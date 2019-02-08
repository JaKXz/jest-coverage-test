import React from 'react';
import IFNOTWrapped from '../src/IFNOTWrapped.jsx';
import {shallow} from 'enzyme';

describe('IFNOTWrapped', () => {
  it('render', () => {
    shallow(<IFNOTWrapped />);
  });
});
