import Link from 'next/link';
import Button from '@react/react-spectrum/Button';
import ShowMenu from '@react/react-spectrum/Icon/ShowMenu';
import { SideNav, SideNavItem } from '@react/react-spectrum/SideNav';
import Router from 'next/router';
import classNames from 'classnames';
import menuData from '../data/newmenu';
import styles from './css/sidebar.scss';
import SiteSearch from './SiteSearch';
import getConfig from 'next/config';
import {withRouter} from 'next/router'

const pathPrefix = process.env.NODE_ENV === 'production'
  ? '/spectrum-css'
  : '';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.selectedItem = React.createRef();
    let selected = menuData.key.find((item)=> {
      return item.url === props.router.query.id;
    });
    this.state = {
      menuOpen:false,
      selectedParents: selected ? selected.parent.split(',') : new Array()
    }

  }
  componentWillReceiveProps(nextProps){
      //console.log(nextProps.router.query.id);
      let selected = menuData.key.find((item)=> {
        return item.url === nextProps.router.query.id;
      });

      this.setState({
        selectedParents: selected ? selected.parent.split(',') : new Array()
      });
      //Perform some operation
      //this.setState({someState: someValue });
  }

  openMenu = () => {
    this.setState({
      menuOpen: true
    })
  }
  closeMenu = () => {
    this.setState({
      menuOpen: false
    })
  }
  navigate = (slug,type) => {
    if(type === 'Internal') {
      if (slug === 'home') {
        Router.push(`${pathPrefix}/`);
        this.setState({
          menuOpen: false
        })
      } else {
        console.log({slug,type})
        console.log({pathname: `${pathPrefix}/components/${slug}/`, query: slug})
        Router.push({pathname: `${pathPrefix}/components/${slug}/`, query: slug});
        this.setState({
          menuOpen: false
        })
      }
    } else {
      window.open(slug, '_blank');
    }
  }


  render() {
    return (
    <>
    <div
      className={classNames(styles.overlay, this.state.menuOpen?styles.menuOpen:styles.menuClosed)}
      onClick={()=>this.closeMenu()}
    ></div>
    <div className={styles.appHeader}>
      <Button variant="tool" icon={<ShowMenu />} aria-label="Show" onClick={() => this.openMenu()} />
    </div>
    <div className={classNames(styles.sideBar, this.state.menuOpen?styles.menuOpen:styles.menuClosed)}>
    <div className={classNames(styles.spectrumSidebar)}>
        <div className={styles.header}>
          <Link href="/" as={`${pathPrefix}/`}><a><img src={`${pathPrefix}/static/logo.png`} alt="Spectrum Logo" srcSet={`${pathPrefix}/static/logo@2x.png 2x`} className={styles.logo} onClick={(e) => {this.navigate('home', "Internal"); e.preventDefault();}}/></a></Link>
          <SiteSearch/>
        </div>
        <div className={styles.navigation}>

            <SideNav defaultValue={this.props.router.query.id} style={{width: '200px',marginBottom:80}} variant="multiLevel">

            {menuData.menu[0].children.map((item, i)=>{
              return(

                <SideNavItem
                  defaultExpanded =  {this.state.selectedParents.includes(item.title) ? true :false}
                  value={item.url} label={item.title} key={i} style={{width: '200px'}}>
                  {item.children && item.children.map((mi, i)=>{
                    return (
                      <SideNavItem value={mi.url} label={mi.title} key={i}
                          onClick={(e) => {
                            mi.linkType !== 'group' ?
                            this.navigate(mi.url, mi.linkType): undefined
                            // mi.url ? this.navigate(mi.url, 'Internal'): undefined
                            e.preventDefault();
                          }

                          }
                          style={{width: '200px'}}
                          defaultExpanded =  {this.state.selectedParents.includes(item.title)}
                          ref={this.props.router.query.id === mi.url ?  this.selectedItem : undefined}
                        >
                        {mi.linkType === 'group' && mi.children.map((mi3, i)=>{
                          return (

                            <SideNavItem value={mi3.url} key={i} label={mi3.title} onClick={() => this.navigate(mi3.url, mi3.linkType)} style={{width: '200px'}}>

                            </SideNavItem>
                          )
                        })}
                      </SideNavItem>
                    )
                  })}
                </SideNavItem>

              )

            }) }
            </SideNav>
            <SideNav style={{width: '200px', marginBottom:'40px'}}>
                <SideNavItem value="Contributions" target="_blank" href="https://spectrum-contributions.corp.adobe.com" style={{width: '200px'}}>Contributions</SideNavItem>

            </SideNav>




        </div>
        </div>
    </div>
    </>
    )
    }

}

export default withRouter(Sidebar)
