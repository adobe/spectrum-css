import React from 'react';
import Rule from '@react/react-spectrum/Rule';
import classNames from 'classnames';
import styles from './css/subHeader.scss';

class SectionHeader extends React.Component {

  render() {
    let title = this.props.title ? this.props.title : 'Missing title';

    return (
        <div className={classNames('afg-row',styles.headerContainer)}>
            <div className={classNames('afg-col-xs-12')}>
            <h2 id={this.props.title.split(" ").join("-")} className={classNames('spectrum-Heading3',styles.sectionHeader, styles.header)}>
              {this.props.title}
              <span className={styles.headingAnchor}>
                 <a className={classNames(`spectrum-Link`, styles.anchor)} href={'#' + title.split(" ").join("-")} aria-label="§">#</a> {this.props.id  && process.env.NODE_ENV != 'production' ? <span className="spectrum-Body"><a className={classNames("spectrum-Link",styles.editLink)} tabIndex="-1" target="_blank" href={`https://app.contentful.com/spaces/${this.props.space}/entries/${this.props.id}`}>Edit</a></span>:undefined}
              </span>
            </h2>
            <Rule/>
            </div>
          </div>
    );
  }
}

export default SectionHeader
