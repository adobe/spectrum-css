import Link from "next/link";
import Button from "@react/react-spectrum/Button";
import ShowMenu from "@react/react-spectrum/Icon/ShowMenu";
import { SideNav, SideNavItem } from "@react/react-spectrum/SideNav";
import Router from "next/router";
import classNames from "classnames";
import menuData from "../data/newmenu";
import styles from "./css/sidebar.scss";
import SiteSearch from "./SiteSearch";
import getConfig from "next/config";
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
  componentWillReceiveProps(nextProps) {
    const selected = menuData.key.find(item => {
      return item.url === nextProps.router.query.id;
    });
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
  openMenu = () => {
    this.setState({
      menuOpen: true
    });
  };
  closeMenu = () => {
    this.setState({
      menuOpen: false
    });
  };

  render() {
    return (
      <>
        <div
          className={classNames(
            styles.overlay,
            this.state.menuOpen ? styles.menuOpen : styles.menuClosed
          )}
          onClick={() => this.closeMenu()}
        />
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
              <Link href="/" as={`${process.env.BACKEND_URL}/`}>
                <a className={styles.logoLink}>
                  <img
                    src={`${process.env.BACKEND_URL}/static/adobe-logo.svg`}
                    alt="Adobe Logo"
                    className={styles.logo}
                  />
                  <span>Spectrum CSS</span>
                </a>
              </Link>
              <SiteSearch />
            </div>
            <div className={styles.navigation}>
              <SideNav
                defaultValue={this.props.router.query.id}
                style={{ width: "200px", marginBottom: 80 }}
                variant="multiLevel"
              >
                {menuData.menu[0].children.map((item, i) => {
                  if (!item.children || item.children.length == 0) {
                    return (
                      <SideNavItem
                        value={item.url}
                        label={item.title}
                        key={i}
                        style={{ width: "200px" }}
                        ref={
                          item.url === this.props.router.query.id
                            ? this.selectedItem
                            : undefined
                        }
                        renderLink={props => {
                          delete props.href;
                          return (
                            <Link {...createLinkProps(item)}>
                              <a {...props}>{item.title}</a>
                            </Link>
                          );
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
                        style={{ width: "200px" }}
                      >
                        {item.children &&
                          item.children.map((childItem, childI) => {
                            return (
                              <SideNavItem
                                value={childItem.url}
                                label={childItem.title}
                                key={childI}
                                style={{ width: "200px" }}
                                ref={
                                  childItem.url === this.props.router.query.id
                                    ? this.selectedItem
                                    : undefined
                                }
                                renderLink={props => {
                                  delete props.href;
                                  return (
                                    <Link {...createLinkProps(childItem)}>
                                      <a {...props}>{childItem.title}</a>
                                    </Link>
                                  );
                                }}
                              />
                            );
                          })}
                      </SideNavItem>
                    );
                  }
                })}
              </SideNav>
              <SideNav style={{ width: "200px", marginBottom: "40px" }}>
                <SideNavItem
                  value="Spectrum"
                  target="_blank"
                  href="#"
                  style={{ width: "200px" }}
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
