import React from 'react';
import Router from 'next/router';
import styles from './css/subHeader.scss';
import classNames from 'classnames';
import  Markdown from './Markdown';
import Rule from '@react/react-spectrum/Rule';


class SubHeader extends React.Component {

  render() {
    let title = this.props.title ? this.props.title : 'Missing title';

    return (
        <h3 className={classNames('spectrum-Heading4', styles.subHeader, styles.header)} id={title.split(" ").join("-")}>
          {this.props.title}
          <span className={styles.headingAnchor}>
            <a className={classNames(`spectrum-Link`, styles.anchor)} href={'#' + title.split(" ").join("-")}>#</a>
          </span>
          {this.props.children}
        </h3>
    );
  }
}

export default SubHeader
