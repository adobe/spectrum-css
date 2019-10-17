import Search from "@react/react-spectrum/Search";
import Router from "next/router";
import Link from "next/link";
import classNames from "classnames";
import styles from "./css/siteSearch.scss";
import lunr from "lunr";
import search_store from "../data/search_store";
import search_index from "../data/search_index";


class SiteSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      results: [],
      usageGuidelines: [],
      components: [],
      foundation: [],
      files: [],
      behaviors: [],
      contributions: [],
      resources: [],
      tutorials: [],
      searchVal: "",
      numResults: 0,
      kbSelectedIndex: 0,
      kbSelectedLink: undefined,
      kbSelectedType: undefined,
      searchIndex: undefined,
      searchLoaded: true
    };

    this.searchContainer = React.createRef();

    //const res = await fetch(`${publicRuntimeConfig.API}/getSearchIndex`)
    //const data = await res.json();

    this.idx = lunr.Index.load(search_index);
    //this.setState({searchIndex: data});
  }

  resetSearch = () => {
    this.setState({
      menuOpen: false,
      results: [],
      usageGuidelines: [],
      components: [],
      foundation: [],
      files: [],
      behaviors: [],
      contributions: [],
      resources: [],
      tutorials: [],
      searchVal: "",
      numResults: 0,
      kbSelectedIndex: 0,
      kbSelectedLink: undefined,
      kbSelectedType: undefined
    });
  };

  focusOnSearchItem = index => {
    this.setState({
      kbSelectedIndex: index
    });

    let searchEl = document.getElementById(`${index}_search`);
    if (searchEl) {
      searchEl.focus();
    }
  };

  handleSearchKeyPress = e => {
    if (this.state.numResults !== 0) {
      switch (e.key) {
        case "Enter":
          if (this.state.numResults !== 0) {
            // Navigate to the first search result
            let searchEl = document.getElementById('0_search');
            searchEl.click();
          }
          break;
        case "Tab":
        case "ArrowDown":
            this.openMenu();
            this.focusOnSearchItem(0);
            e.preventDefault();
          break;
      }
    }
  };

  handleKeyPress = e => {
    if (this.state.menuOpen) {
      let index;
      switch (e.key) {
        case "ArrowDown":
          index = this.state.kbSelectedIndex == this.state.numResults - 1
            ? 0
            : this.state.kbSelectedIndex + 1;

          this.focusOnSearchItem(index);

          e.preventDefault();
          break;
        case "ArrowUp":
          index = this.state.kbSelectedIndex == 0
            ? this.state.numResults - 1
            : this.state.kbSelectedIndex - 1;

          this.focusOnSearchItem(index);

          e.preventDefault();
          break;
        case "Home":
          this.focusOnSearchItem(0);

          e.preventDefault();
          break;
        case "End":
          this.focusOnSearchItem(this.state.numResults - 1);

          e.preventDefault();
          break;
        case "Tab":
          if (e.shiftKey && this.state.kbSelectedIndex == 0) {
            e.preventDefault();
            this.focusOnSearch();
          }
          break;
        case "Escape":
          this.focusOnSearch()
          this.closeMenu();

          e.preventDefault();
          break;
      }
    }
  };

  focusOnSearch = () => {
    let field = this.searchContainer.current.querySelector('.spectrum-Search-input');
    if (field) {
      field.focus();
    }

    this.setState({
      kbSelectedIndex: -1
    });
  };

  getHREF = (slug, type, query) => {
    let q = query ? `#${query.replace(/ /g, "-")}` : "#";
    if (type === "Internal") {
      return `/page/${slug}${q}`;
    }
    return slug;
  };

  search = val => {
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
    if (val.length > 2) {
      let searchParam = `${val.trim()} ${val.trim()}*`;

      r = this.idx.search(searchParam + "*");
    }
    let length = 0;
    r.forEach((item, i) => {
      let storeItem = search_store[item.ref];
      if (storeItem.type == "usageGuideline") {
        length++;
        usageGuidelines.push(storeItem);
      } else if (
        storeItem.type === "page" &&
        storeItem.pageType === "Component"
      ) {
        length++;
        components.push(storeItem);
      } else if (storeItem.type === "Behavior") {
        length++;
        behaviors.push(storeItem);
      } else if (
        storeItem.type === "page" &&
        storeItem.pageType === "Foundation"
      ) {
        length++;
        foundation.push(storeItem);
      } else if (
        storeItem.type === "page" &&
        storeItem.pageType === "Resources"
      ) {
        length++;
        resources.push(storeItem);
      } else if (storeItem.type === "Tutorial") {
        length++;
        tutorials.push(storeItem);
      } else if (storeItem.type === "xd") {
        length++;
        files.push(storeItem);
      } else if (storeItem.type === "contribution") {
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
    });
  };

  closeMenu = e => {
    setTimeout(
      function() {
        this.setState({
          menuOpen: false,
          kbSelectedIndex: 0
        });

        // Workaround: React Spectrum incorrectly assigns this attribute to the <input>, it should be on the outer <div>
        let searchComponent = this.searchContainer.current.querySelector('.spectrum-Search');
        searchComponent.setAttribute('aria-expanded', 'false');
      }.bind(this),
      100
    );
  };

  openMenu = () => {
    this.setState({ menuOpen: true });

    // Workaround: React Spectrum incorrectly assigns this attribute to the <input>, it should be on the outer <div>
    let searchComponent = this.searchContainer.current.querySelector('.spectrum-Search');
    searchComponent.setAttribute('aria-expanded', 'true');
  };

  getHighlighted = (index) => {
    if (index === this.state.kbSelectedIndex) {
      return styles['is-highlighted'];
    }
  };

  componentDidMount = () => {
    // Workaround: React Spectrum incorrectly assigns the following attributes to the <input>, they should be on the outer <div>
    let searchComponent = this.searchContainer.current.querySelector('.spectrum-Search');
    searchComponent.setAttribute('aria-haspopup', 'listbox');
    searchComponent.setAttribute('aria-owns', 'search-results-listbox');
    searchComponent.setAttribute('aria-expanded', 'false');

    // Workaround: React Spectrum incorrectly assigns searchbox here, it needs to be textbox or aXe has a conniption
    let searchInput = this.searchContainer.current.querySelector('.spectrum-Search-input');
    searchInput.setAttribute('role', 'textbox');
    searchInput.setAttribute('type', 'text');
  };

  render() {
    let searchIndex = -1;
    return (
      <div
        className={styles.searchContainer}
        ref={this.searchContainer}
        role="search"
      >
        <div className={styles.overlay}></div>
        <Search
          role="combobox"
          aria-autocomplete="list"
          aria-label="Search"
          placeholder="Search"
          defaultValue=""
          value={this.state.searchVal}
          style={{ width: "100%" }}
          onChange={e => {
            this.search(e);
            this.openMenu();
          }}
          onFocus={e => {
            this.openMenu();
          }}
          onKeyDown={e => {
            this.handleSearchKeyPress(e);
          }}
          disabled={!this.state.searchLoaded}
        />
        <div
          onClick={e => {
            this.closeMenu();
          }}
          className={classNames(
            styles.overlay,
            this.state.menuOpen && this.state.searchVal.length > 2
              ? styles.overlayOpen
              : undefined
          )}
        ></div>
        <div
          className={classNames(
            styles.results,
            this.state.menuOpen && this.state.searchVal.length > 2
              ? styles.open
              : undefined
          )}
         onKeyDown={this.handleKeyPress}
         id="search-results-listbox"
         role="listbox"
         aria-label="Search"
        >
          {this.state.numResults === 0 ? (
            <div className={styles.noResultsContainer}>
              <div
                className={classNames(
                  "spectrum-Heading2--quiet",
                  styles.noResults
                )}
              >
                No results found
              </div>
              <div className={classNames("spectrum-Body4", styles.noResulsSub)}>
                <em>Try another search term.</em>
              </div>
            </div>
          ) : (
            undefined
          )}
          {this.state.foundation.length ? (
            <div className={styles.resultContainer} role="group" aria-labelledby="results_Foundation">
              <div className={styles.header} role="presentation">
                <h4 className="spectrum-Heading--subtitle3" aria-hidden="true" id="results_Foundation">Foundation</h4>
              </div>
              <ul className={styles.resultSet} role="presentation">
                {this.state.foundation.map((result, i) => (
                  <li key={i} role="presentation">
                    <a
                      role="option"
                      id={`${++searchIndex}_search`}
                      className={classNames(
                        "spectrum-Body4",
                        styles.listItem,
                        this.getHighlighted(searchIndex)
                      )}
                      href={this.getHREF(result.slug, "Internal")}
                    >
                      {result.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            undefined
          )}
          {this.state.components.length ? (
            <div className={styles.resultContainer} role="group" aria-labelledby="results_Components">
              <div className={styles.header} role="presentation">
                <h4 className="spectrum-Heading--subtitle3" aria-hidden="true" id="results_Components">Components</h4>
              </div>
              <ul className={styles.resultSet} role="presentation">
                {this.state.components.map((result, i) => (
                  <li key={i} role="presentation">
                    <Link href={`/components/id?id=${result.slug}`}
                      as={`${process.env.BACKEND_URL}/components/${result.slug}`}>
                      <a role="option"
                        onClick={(e)=>{this.closeMenu();}}
                        id={`${++searchIndex}_search`}
                        className={classNames(
                          "spectrum-Body4",
                          styles.listItem,
                          this.getHighlighted(searchIndex)
                        )}>
                        {result.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            undefined
          )}

          {this.state.resources.length ? (
            <div className={styles.resultContainer} role="group" aria-labelledby="results_Resources">
              <div className={styles.header} role="presentation">
                <h4 className="spectrum-Heading--subtitle3" aria-hidden="true" id="results_Resources">Resources</h4>
              </div>
              <ul className={styles.resultSet} role="presentation">
                {this.state.resources.map((result, i) => (
                  <li key={i} role="presentation"><a
                    role="option"
                    id={`${++searchIndex}_search`}
                    className={classNames(
                      "spectrum-Body4",
                      styles.listItem,
                      this.getHighlighted(searchIndex)
                    )}
                    href={this.getHREF(result.slug, "Internal")}
                  >
                    {result.name}
                  </a></li>
                ))}
              </ul>
            </div>
          ) : (
            undefined
          )}
          {this.state.usageGuidelines.length ? (
            <div className={styles.resultContainer} role="group" aria-labelledby="results_UsageGuidelines">
              <div className={styles.header} role="presentation">
                <h4 className="spectrum-Heading--subtitle3" aria-hidden="true" id="results_UsageGuidelines">Usage Guidelines</h4>
              </div>
              <ul className={styles.resultSet} role="presentation">
                {this.state.usageGuidelines.map((result, i) => (
                  <li key={i} role="presentation"><a
                    role="option"
                    id={`${++searchIndex}_search`}
                    className={classNames(
                      "spectrum-Body4",
                      styles.listItem,
                      this.getHighlighted(searchIndex)
                    )}
                    href={this.getHREF(result.slug, "Internal", result.query)}
                  >
                    <div
                      className={classNames("spectrum-Body5", styles.subHeader)}
                    >
                      {result.pageType} <span aria-hidden="true">&gt;</span> {result.name}
                    </div>
                    <div>{result.display_description}</div>
                  </a></li>
                ))}
              </ul>
            </div>
          ) : (
            undefined
          )}

          {this.state.behaviors.length ? (
            <div className={styles.resultContainer} role="group" aria-labelledby="results_Behaviors">
              <div className={styles.header} role="presentation">
                <h4 className="spectrum-Heading--subtitle3" aria-hidden="true" id="results_Behaviors">Behaviors</h4>
              </div>
              <ul className={styles.resultSet} role="presentation">
                {this.state.behaviors.map((result, i) => (
                  <li key={i} role="presentation"><a
                    role="option"
                    id={`${++searchIndex}_search`}
                    className={classNames(
                      "spectrum-Body4",
                      styles.listItem,
                      this.getHighlighted(searchIndex)
                    )}
                    href={this.getHREF(result.slug, "Internal", result.query)}
                  >
                    <div
                      className={classNames("spectrum-Body5", styles.subHeader)}
                    >
                      {result.pageType} <span aria-hidden="true">&gt;</span> {result.name}
                    </div>
                    <div>{result.display_description}</div>
                  </a></li>
                ))}
              </ul>
            </div>
          ) : (
            undefined
          )}

          {this.state.files.length ? (
            <div className={styles.resultContainer} role="group" aria-labelledby="results_Downloads">
              <div className={styles.header} role="presentation">
                <h4 className="spectrum-Heading--subtitle3" aria-hidden="true" id="results_Downloads">Downloads</h4>
              </div>
              <ul className={styles.resultSet} role="presentation">
                {this.state.files.map((result, i) => (
                  <li key={i} role="presentation"><a
                    role="option"
                    id={`${++searchIndex}_search`}
                    className={classNames(
                      "spectrum-Body4",
                      styles.listItem,
                      this.getHighlighted(searchIndex)
                    )}
                    target="_blank"
                    href={this.getHREF(`/static/resources/Latest/${result.slug}`, "File")}
                  >
                    <div className={styles.file}>
                      <div className={styles.icon}>
                        <img src="/static/icon_xd_small@2x.png" alt="XD File" />
                      </div>
                      {result.slug}
                    </div>
                  </a></li>
                ))}
              </ul>
            </div>
          ) : (
            undefined
          )}
          {this.state.tutorials.length ? (
            <div className={styles.resultContainer} role="group" aria-labelledby="results_Tutorials">
              <div className={styles.header} role="presentation">
                <h4 className="spectrum-Heading--subtitle3" aria-hidden="true" id="results_Tutorials">Tutorials</h4>
              </div>
              <ul className={styles.resultSet} role="presentation">
                {this.state.tutorials.map((result, i) => (
                  <li key={i} role="presentation"><a
                    role="option"
                    id={`${++searchIndex}_search`}
                    className={classNames(
                      "spectrum-Body4",
                      styles.listItem,
                      this.getHighlighted(searchIndex)
                    )}
                    target="_blank"
                    onClick={this.getHREF(result.slug, "External")}
                  >
                    {result.name}
                  </a></li>
                ))}
              </ul>
            </div>
          ) : (
            undefined
          )}
          {this.state.contributions.length ? (
            <div className={styles.resultContainer} role="group" aria-labelledby="results_Contributions">
              <div className={styles.header} role="presentation">
                <h4 className="spectrum-Heading--subtitle3" aria-hidden="true" id="results_Contributions">Contributions</h4>
              </div>
              <ul className={styles.resultSet} role="presentation">
                {this.state.contributions.map((result, i) => (
                  <li key={i} role="presentation"><a
                    role="option"
                    id={`${++searchIndex}_search`}
                    className={classNames(
                      "spectrum-Body4",
                      styles.listItem,
                      this.getHighlighted(searchIndex)
                    )}
                    target="_blank"
                    href={this.getHREF(
                      `https://spectrum-contributions.corp.adobe.com/submissions/${result.slug}`,
                      "External"
                    )}
                  >
                    <div>{result.description}</div>
                  </a></li>
                ))}
              </ul>
            </div>
          ) : (
            undefined
          )}
        </div>
      </div>
    );
  }
}

export default SiteSearch;
