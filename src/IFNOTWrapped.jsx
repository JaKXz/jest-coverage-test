import React, {Component} from 'react';

export default class IFNOTWrapped extends Component {
  render() {
    return (
      <div>
        {true ? 'OK' : null}
        {true && 'OK'}
        {false ? 'OK' : null}
        {false && 'OK'}
      </div>
    )
  }
};
