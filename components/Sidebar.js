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

  render() {
    return (
    <>
    <div
      className={classNames(styles.overlay, this.state.menuOpen?styles.menuOpen:styles.menuClosed)}
      onClick={()=>this.closeMenu()}/>
    <div className={styles.appHeader}>
      <Button variant="tool" icon={<ShowMenu />} aria-label="Show" onClick={() => this.openMenu()} />
    </div>
    <div className={classNames(styles.sideBar, this.state.menuOpen?styles.menuOpen:styles.menuClosed)}>
    <div className={classNames(styles.spectrumSidebar)}>
        <div className={styles.header}>
          <Link href="/" as={`${process.env.BACKEND_URL}/`}>
            <a>
              <img src={`${process.env.BACKEND_URL}/static/logo.png`} alt="Spectrum Logo" srcSet={`${process.env.BACKEND_URL}/static/logo@2x.png 2x`} className={styles.logo}/>
            </a>
          </Link>
          <SiteSearch/>
        </div>
        <div className={styles.navigation}>
          <SideNav defaultValue={this.props.router.query.id} style={{width: '200px',marginBottom:80}} variant="multiLevel">
            {menuData.menu[0].children.map((item, i)=>{
              return(
                <SideNavItem
                  defaultExpanded={this.state.selectedParents.includes(item.title) ? true :false}
                  value={item.url} label={item.title} key={i} style={{width: '200px'}}>
                  {item.children && item.children.map((mi, i)=>{
                    return (
                      <SideNavItem value={mi.url} label={mi.title} key={i}
                          style={{width: '200px'}}
                          defaultExpanded={this.state.selectedParents.includes(item.title)}
                          ref={this.props.router.query.id === mi.url ?  this.selectedItem : undefined}
                          renderLink={(props) => {
                            if(mi.linkType !== 'group') {
                              delete props.href
                              return(<Link href={`/components/id?id=${mi.url}`} as={`${process.env.BACKEND_URL}/components/${mi.url}`}>
                                <a {...props}>{mi.title}</a>
                                </Link>)
                            } else {
                              return(<div>a group</div>)
                            }
                          }}
                        >
                        {mi.linkType === 'group' && mi.children.map((mi3, i)=>{
                          return (

                            <SideNavItem value={mi3.url} key={i} label={mi3.title} style={{width: '200px'}}>

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
                <SideNavItem value="Spectrum" target="_blank" href="#" style={{width: '200px'}}>Spectrum</SideNavItem>
            </SideNav>




        </div>
        </div>
    </div>
    </>
    )
    }

}

export default withRouter(Sidebar)
