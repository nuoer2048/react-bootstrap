import * as React from 'react';
import { mount } from 'enzyme';

import Overlay from '../src/Overlay';
import Popover from '../src/Popover';

describe('<Overlay>', () => {
  it('should forward ref to the overlay', () => {
    const ref = React.createRef();
    mount(
      <Overlay ref={ref} show>
        <Popover id="my-overlay">test</Popover>
      </Overlay>,
    );

    ref.current.id.should.equal('my-overlay');
  });
});
