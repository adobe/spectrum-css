import React from 'react'
import Router from 'next/router'

export default class extends React.Component {
  static async getInitialProps({ res, query }) {
    const {url} = query;
    if (res) {
      res.writeHead(302, {
        Location: url
      });
      res.end();
    } else {
      Router.push(url);
    }
    return {};
  }
}
