import React from 'react';
import StatusLight from '@react/react-spectrum/StatusLight';

class Status extends React.Component {

  render() {
    let statusVariant = 'positive';
    switch (this.props.status) {
      case 'Contribution':
        statusVariant = 'notice'
        break;
      case 'Verified':
        statusVariant = 'positive'
        break;
      case 'Deprecated':
        statusVariant = 'negative'
        break;
    }

    return (
      <StatusLight {...this.props} variant={statusVariant}>{this.props.status}</StatusLight>
    );
  }
}

export default Status
