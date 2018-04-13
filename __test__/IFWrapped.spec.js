import IFWrapped from '../src/IFWrapped';
import {shallow} from 'enzyme';

describe('IFWrapped', () => {
  it('render', () => {
    const c = shallow(<IFWrapped />);
    c.render();
  });
});
