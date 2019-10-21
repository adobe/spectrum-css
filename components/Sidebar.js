import { SideNav, SideNavItem } from "@react/react-spectrum/SideNav";

import Button from "@react/react-spectrum/Button";
import Link from "next/link";
import Logo from "./Logo";
import Router from "next/router";
import ShowMenu from "@react/react-spectrum/Icon/ShowMenu";
import SiteSearch from "./SiteSearch";
import classNames from "classnames";
import getConfig from "next/config";
import menuData from "../data/newmenu";
import styles from "./css/sidebar.scss";
import { withRouter } from "next/router";

const createLinkProps = item => {
  if (item.linkType === "External") {
    return { href: item.url };
  }
  if (item.parent.split(",").includes("Components")) {
    return {
      href: `/components/id?id=${item.url}`,
      as: `${process.env.BACKEND_URL}/components/${item.url}`
    };
  }
  return { href: `/${item.url}`, as: `${process.env.BACKEND_URL}/${item.url}` };
};

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.selectedItem = React.createRef();
    this.state = {
      menuOpen: false
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  componentWillReceiveProps(nextProps) {
    const selected = menuData.key.find(item => {
      return item.url === nextProps.router.query.id;
    });
    this.search = React.createRef();
    if (selected) {
      const selectedParentSlug = selected.parent.split(",").find(item => {
        return item !== "top-level-menu-item" && item !== "WebsiteMenu";
      });
      const selectedParent = menuData.key.find(item => {
        return item.title === selectedParentSlug;
      });
      if (selectedParent) {
        selectedParent.defaultExpanded = true;
      }
    }
  }
  updateDimensions(e) {
    if(this.state.menuOpen && window.innerWidth >= 960) {
      this.closeMenu();
    }
  }
  openMenu() {
    this.setState({
      menuOpen: true
    });
  };
  closeMenu() {
    this.search.current.setState({
      menuOpen: false
    });
    this.setState({
      menuOpen: false
    });
  };

  render() {
    let sidebarWidth = '208px';

    return (
      <>
        <div
          className={classNames(
            styles.overlay,
            this.state.menuOpen ? styles.menuOpen : styles.menuClosed
          )}
          onClick={() => this.closeMenu()}
        ></div>
        <div className={styles.appHeader}>
          <Button
            variant="tool"
            icon={<ShowMenu />}
            aria-label="Show"
            onClick={() => this.openMenu()}
          />
        </div>
        <div
          className={classNames(
            styles.sideBar,
            this.state.menuOpen ? styles.menuOpen : styles.menuClosed
          )}
        >
          <div className={classNames(styles.spectrumSidebar)}>
            <div className={styles.header}>
              <Logo/>

              <SiteSearch ref={this.search} />
            </div>

            <div className={styles.navigation}>
              <SideNav
                defaultValue={this.props.router.query.id}
                style={{ width: sidebarWidth, marginBottom: 80 }}
                variant="multiLevel"
              >
                {menuData.menu[0].children.map((item, i) => {
                  if (!item.children || item.children.length == 0) {
                    return (
                      <SideNavItem
                        value={item.url}
                        label={item.title}
                        key={i}
                        style={{ width: sidebarWidth }}
                        ref={
                          item.url === this.props.router.query.id
                            ? this.selectedItem
                            : undefined
                        }
                        renderLink={props => {
                          delete props.href;
                          if(item.linkType === "External") {
                            return (
                              <a target="_blank" className="spectrum-SideNav-itemLink" {...createLinkProps(item)}>{item.title}</a>
                            );
                          } else {
                            return (
                              <Link {...createLinkProps(item)}>
                                <a {...props}>{item.title}</a>
                              </Link>
                            );
                          }
                        }}
                      />
                    );
                  } else {
                    return (
                      <SideNavItem
                        value={item.url}
                        label={item.title}
                        key={i}
                        defaultExpanded={item.defaultExpanded}
                        style={{ width: sidebarWidth }}
                      >
                        {item.children &&
                          item.children.map((childItem, childI) => {
                            return (
                              <SideNavItem
                                value={childItem.url}
                                label={childItem.title}
                                key={childI}
                                style={{ width: sidebarWidth }}
                                ref={
                                  childItem.url === this.props.router.query.id
                                    ? this.selectedItem
                                    : undefined
                                }
                                renderLink={props => {
                                  delete props.href;
                                  props.target = "_blanks";
                                  if(childItem.linkType === "External") {
                                    return (
                                      <a {...createLinkProps(childItem)}>{childItem.title}</a>
                                    );
                                  } else {
                                    return (
                                      <Link {...createLinkProps(childItem)}>
                                        <a {...props}>{childItem.title}</a>
                                      </Link>
                                    );
                                  }
                                }}
                              />
                            );
                          })}
                      </SideNavItem>
                    );
                  }
                })}
              </SideNav>
              <SideNav style={{ width: sidebarWidth, marginBottom: "40px" }}>
                <SideNavItem
                  value="Spectrum"
                  target="_blank"
                  href="https://spectrum.adobe.com/"
                  style={{ width: sidebarWidth }}
                >
                  Spectrum
                </SideNavItem>
              </SideNav>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(Sidebar);
