import React, {Component} from 'react';

export default class IFWrapped extends Component {
  render() {
    return (
      <div>
        <If condition={true}>
          OK
        </If>
        <If condition={false}>
        OK
        </If>
      </div>
    )
  }
};
