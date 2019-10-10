import Search from '@react/react-spectrum/Search';
import Router from 'next/router';
import classNames from 'classnames';
import styles from './css/siteSearch.scss';
import lunr from 'lunr';

import search_store from '../data/search_store';
import search_index from '../data/search_index';
import getConfig from 'next/config'


class SiteSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen:false,
      results: [],
      usageGuidelines: [],
      components: [],
      foundation: [],
      files: [],
      behaviors: [],
      contributions: [],
      resources: [],
      tutorials: [],
      searchVal: '',
      numResults: 0,
      kbSelectedIndex: 1,
      kbSelectedLink: undefined,
      kbSelectedType: undefined,
      searchIndex:undefined,
      searchLoaded: true
    }
    
    this.selectedSlug = undefined;
    this.selectedQuery = undefined
    this.selectedSlugType = 'Internal';
    //const res = await fetch(`${publicRuntimeConfig.API}/getSearchIndex`)
    //const data = await res.json();
  
    this.idx = lunr.Index.load(search_index);
    //console.log(search_index);
    //this.setState({searchIndex: data});
  }

  async componentDidMount() {
    document.addEventListener("keyup", (e) => this.handleKeyPress(e));
    
    

    

  }
  resetSearch = () => {
    this.setState(
      {
        menuOpen:false,
        results: [],
        usageGuidelines: [],
        components: [],
        foundation: [],
        files: [],
        behaviors: [],
        contributions: [],
        resources: [],
        tutorials: [],
        searchVal: '',
        numResults: 0,
        kbSelectedIndex: 1,
        kbSelectedLink: undefined,
        kbSelectedType: undefined,
        
      }
    )

  }
  handleKeyPress = (e) => {
      //console.log('keypress function');
      if(this.state.menuOpen && this.state.searchVal.length) {
        switch(e.key) {
          case "ArrowDown":
            this.setState({
              kbSelectedIndex: this.state.kbSelectedIndex == this.state.numResults ? this.state.numResults : this.state.kbSelectedIndex+1
            })
            break;
          case "ArrowUp":
            this.setState({
              kbSelectedIndex: this.state.kbSelectedIndex == 1 ? 1 : this.state.kbSelectedIndex-1
            })
            break;
          case "Enter":
            
            this.navigate(this.selectedSlug, this.selectedSlugType, this.selectedQuery);
            this.resetSearch();
            document.activeElement.blur();
            break;
          default:
          // do nothing
        }
      }
      
  }

  navigate = (slug,type,query) => {

    let q = query ? `#${query.replace(/ /g,"-")}` : '#';
    if(type === 'Internal') {
      // Router.push(`/components/${slug}${q}`);
      Router.push(`/components/${slug}`);
      this.setState({
        menuOpen: false
      })
    } else if (type === 'File') {
      window.open(slug);
    } else {
      window.open(slug, '_blank');
    }
    this.search("");
    this.setState({menuOpen:false, searchVal:''})
  }

  search = (val) => {
    this.setState({
      searchVal: val
    });
    let usageGuidelines = [];
    let components = [];
    let foundation = [];
    let behaviors = [];
    let files = [];
    let contributions = [];
    let resources = [];
    let tutorials = [];

    let r = [];
    if(val.length > 2) {
        let searchParam = `${val.trim()} ${val.trim()}*` ;
        r = this.idx.search(searchParam + '*');
    }
    let length = 0;
    r.forEach((item,i) => {
      let storeItem = search_store[item.ref];
      
      if (storeItem.type == 'usageGuideline') {
        length++;
        usageGuidelines.push(storeItem);
      } else 
      if (storeItem.type == 'page' && storeItem.pageType === 'Component' ) {
        length++;
        components.push(storeItem);
      } else if (storeItem.type == 'Behavior') {
        length++;
        behaviors.push(storeItem);
      } else if (storeItem.type == 'page' && storeItem.pageType === 'Foundation' ) {
        length++;
        foundation.push(storeItem);
      } else if (storeItem.type == 'page' && storeItem.pageType === 'Resources' ) {
        length++;
        resources.push(storeItem);
      } else if (storeItem.type === 'Tutorial') {
        length++;
        tutorials.push(storeItem);
      } else if (storeItem.type === 'xd') {
        length++;
        files.push(storeItem);
      } else if (storeItem.type === 'contribution') {
        length++;
        contributions.push(storeItem);
      } 

    });
    this.setState({
      results: r,
      usageGuidelines: usageGuidelines,
      components: components,
      behaviors: behaviors,
      foundation: foundation,
      files: files,
      contributions: contributions,
      resources: resources,
      tutorials: tutorials,
      numResults: length
    })
  }

  closeMenu = (e) => {
    setTimeout(function() {
      this.setState({menuOpen:false})
    }.bind(this), 100);
  }

  focus = (e) => {
    this.setState({menuOpen:true});
  }

  getSelected = (index,slug,type,query) => {
    
    //TODO: this needs to be improved - data model for results weren't set up well for keyboard focus
    if (this.state.numResults && index === this.state.kbSelectedIndex) {
      
      this.selectedSlug = slug;
      this.selectedSlugType = type;
      this.selectedQuery = query;
      document.getElementById(`${index}_search`) ? document.getElementById(`${index}_search`).scrollIntoView(false) : undefined;
      return styles.selected;
    }
  }
  
  render() {
    let searchIndex = 0;
    return (
        <div className={styles.searchContainer}>
         <div className={styles.overlay}></div>
            <Search
                placeholder="Search"
                defaultValue=""
                value={this.state.searchVal}
                style={{width:'100%'}}
                onChange={e => {this.search(e)}}
                onFocus = {e => {this.focus(e)}}
                onKeyPress={(e)=>{this.handleKeyPress(e)}}
                disabled = {!this.state.searchLoaded}
                
            />
            <div onClick={(e) => {this.closeMenu()}} className={classNames(styles.overlay,this.state.menuOpen && this.state.searchVal.length >  2  ? styles.overlayOpen : undefined )}></div>
                <div className={classNames(styles.results, this.state.menuOpen && this.state.searchVal.length >  2 ? styles.open : undefined)}>
                {this.state.numResults === 0 ?
                
                  <div className={styles.noResultsContainer}>
                    <div className={classNames('spectrum-Heading2--quiet', styles.noResults)}>No results found</div>
                    <div className={classNames('spectrum-Body4', styles.noResulsSub)}><em>Try another search term.</em></div>
                  </div>: undefined
                }
                {this.state.foundation.length ?
                  <div className={styles.resultContainer}>
                  <div className={styles.header}><h4 className="spectrum-Heading--subtitle3">Foundation</h4></div>
                  <ul className={styles.resultSet}>
                  {this.state.foundation.map((result, i) =>
                    <li id={`${searchIndex++}_search`} key={i} className={classNames('spectrum-Body4', styles.listItem,this.getSelected(searchIndex,result.slug,'Internal'))} onClick={() =>{this.navigate(result.slug, 'Internal')}}>
                    
                      {result.name}
                    </li>
                  
                  )}
                  </ul>
                  </div>:undefined
                } 
                {this.state.components.length ?
                  <div className={styles.resultContainer}>
                  <div className={styles.header}><h4 className="spectrum-Heading--subtitle3">Components</h4></div>
                  <ul className={styles.resultSet}>
                  {this.state.components.map((result, i) =>
                    <li id={`${searchIndex++}_search`} key={i} className={classNames('spectrum-Body4', styles.listItem, this.getSelected(searchIndex,result.slug,'Internal'))} onClick={() =>{this.navigate(result.slug, 'Internal')}}>
                    
                      {result.name}
                    </li>
                  
                  )}
                  </ul>
                  </div>:undefined
                } 
                
                {this.state.resources.length ?
                  <div className={styles.resultContainer}>
                  <div className={styles.header}><h4 className="spectrum-Heading--subtitle3">Resources</h4></div>
                  <ul className={styles.resultSet}>
                  {this.state.resources.map((result, i) =>
                    <li id={`${searchIndex++}_search`} key={i} className={classNames('spectrum-Body4', styles.listItem,this.getSelected(searchIndex,result.slug,'Internal'))} onClick={() =>{this.navigate(result.slug, 'Internal')}}>
                    
                      {result.name}
                    </li>
                  
                  )}
                  </ul>
                  </div>:undefined
                } 
                {this.state.usageGuidelines.length ?
                  <div className={styles.resultContainer}>
                    <div className={styles.header}><h4 className="spectrum-Heading--subtitle3">Usage Guidelines</h4></div>
                    <ul className={styles.resultSet}>
                    
                    {this.state.usageGuidelines.map((result, i) =>
                      <li id={`${searchIndex++}_search`} key={i} className={classNames('spectrum-Body4', styles.listItem,this.getSelected(searchIndex,result.slug,'Internal',result.query))} onClick={() =>{this.navigate(result.slug, 'Internal', result.query)}}>
                        <div className={classNames("spectrum-Body5", styles.subHeader)}>{result.pageType} > {result.name}</div>
                        <div>{result.display_description}</div>
                      </li>
                    
                    )}
                    </ul>
                  </div>:undefined
                }
           
                {this.state.behaviors.length ?
                  <div className={styles.resultContainer}>
                    <div className={styles.header}><h4 className="spectrum-Heading--subtitle3">Behaviors</h4></div>
                    <ul className={styles.resultSet}>
                    
                    {this.state.behaviors.map((result, i) =>
                      <li id={`${searchIndex++}_search`} key={i} className={classNames('spectrum-Body4', styles.listItem,this.getSelected(searchIndex,result.slug,'Internal',result.query))} onClick={() =>{this.navigate(result.slug, 'Internal', result.query)}}>
                        <div className={classNames("spectrum-Body5", styles.subHeader)}>{result.pageType} > {result.name}</div>
                        <div>{result.display_description}</div>
                      </li>
                    
                    )}
                    </ul>
                  </div>:undefined
                }

                {this.state.files.length ?
                  <div className={styles.resultContainer}>
                  <div className={styles.header}><h4 className="spectrum-Heading--subtitle3">Downloads</h4></div>
                  <ul className={styles.resultSet}>
                  
                  {this.state.files.map((result, i) =>
                    <li id={`${searchIndex++}_search`} key={i} className={classNames('spectrum-Body4', styles.listItem,this.getSelected(searchIndex,`https://spectrum-resources.corp.adobe.com/resources/Latest/${result.slug}`,'File'))} onClick={() =>{this.navigate(`https://spectrum-resources.corp.adobe.com/resources/Latest/${result.slug}`, 'File')}}>
                      <div className={styles.file}>
                        <div className={styles.icon}><img src="/static/icon_xd_small@2x.png"/></div>
                        {result.slug}
                      </div>
                    </li>
                  
                  )}
                  </ul>
                  </div>:undefined
                }
                {this.state.tutorials.length ?
                  <div className={styles.resultContainer}>
                  <div className={styles.header}><h4 className="spectrum-Heading--subtitle3">Tutorials</h4></div>
                  <ul className={styles.resultSet}>
                  
                  {this.state.tutorials.map((result, i) =>
                    <li id={`${searchIndex++}_search`} key={i} className={classNames('spectrum-Body4', styles.listItem,this.getSelected(searchIndex,result.slug,'External'))} onClick={() =>{this.navigate(result.slug, 'External')}}>
                      {result.name}
                    </li>
                  )}
                  </ul>
                  </div>:undefined
                }
                {this.state.contributions.length ?
                <div className={styles.resultContainer}>
                  <div className={styles.header}><h4 className="spectrum-Heading--subtitle3">Contributions</h4></div>
                  <ul className={styles.resultSet}>
                  
                  {this.state.contributions.map((result, i) =>
                    <li id={`${searchIndex++}_search`} key={i} className={classNames('spectrum-Body4', styles.listItem,this.getSelected(searchIndex,`https://spectrum-contributions.corp.adobe.com/submissions/${result.slug}`,'External'))} onClick={() =>{this.navigate(`https://spectrum-contributions.corp.adobe.com/submissions/${result.slug}`, 'External')}}>
                      <div>
                        {result.description}
                      </div>
                    </li>
                  
                  )}
                  </ul>
                  </div>:undefined
                }
                </div>
                
        </div>
        )
    }
}

export default SiteSearch
