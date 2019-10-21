import React from 'react'
import { withRouter } from "next/router";

class Redirect extends React.Component {
  static async getInitialProps() {
    const node_env = process.env.NODE_ENV;
    return { node_env };
  }
  componentDidMount() {
    window.location.replace(this.props.pageData.url);
  }
  render() {return(<div></div>)}
}

Redirect.getInitialProps = async function(context) {
  const { url } = context.query;
  return { pageData: { url } };
};
export default withRouter(Redirect);
