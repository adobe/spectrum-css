import Markdown from './Markdown';
import React from 'react';
import ResponsiveImage from './ResponsiveImage';
import Router from 'next/router';
import SubHeader from './SubHeader';
import classNames from 'classnames';
import styles from './css/doubleTextWithVisual.scss';

class DoubleTextWithVisual extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let props = this.props;
    return (
      <>
      <div className={classNames('afg-row', styles.row)}>
        <div className="afg-col-xs-12 afg-col-sm-6">
        <div style={{backgroundColor: this.props.customBackgroundColor1 ? this.props.customBackgroundColor1 : undefined }} className={classNames(this.props.imageStyle ? styles[this.props.imageStyle] : styles.Standard)}>
        <ResponsiveImage
          image={props.desktopImage1.fields.file}
          alt={props.desktopImage1.fields.file}
          />
          </div>
          <SubHeader title={this.props.title1}/>
          <div><Markdown source={this.props.text1} /></div>
        </div>
        {props.desktopImage2 ?
        <div className="afg-col-xs-12 afg-col-sm-6">
          <div style={{backgroundColor: this.props.customBackgroundColor1 ? this.props.customBackgroundColorImage2 : undefined }} className={classNames(this.props.imageStyle ? styles[this.props.imageStyle] : styles.Standard)}>
          <ResponsiveImage
            image={props.desktopImage2.fields.file}
            alt={props.desktopImage1.fields.file}
            />
          </div>
          <SubHeader title={this.props.title2}/>
          <div><Markdown source={this.props.text2} /></div>
        </div>:undefined}

      </div>
      </>

    );
  }
}

export default DoubleTextWithVisual
