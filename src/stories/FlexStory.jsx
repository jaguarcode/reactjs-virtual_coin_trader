import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('UI/Flex', module)
  .addWithJSX('Flex Box Layout 예제', () => (
    <div style={{ display: 'flex' }}>
      <div style={{ border: '1px red solid', padding: 30, height: 30 }}>Box 1</div>
      <div style={{ border: '1px red solid', padding: 30, height: 20 }}>Box 2</div>
      <div style={{ border: '1px red solid', padding: 30, height: 25 }}>Box 3</div>
    </div>
  ))
  .addWithJSX('Flex Direction 예제', () => (
    <div>
      <h4>flexDirection: 'row'</h4>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ border: '1px red solid', padding: 30 }}>Box 1</div>
        <div style={{ border: '1px red solid', padding: 30 }}>Box 2</div>
        <div style={{ border: '1px red solid', padding: 30 }}>Box 3</div>
      </div>
      <h4>flexDirection: 'column'</h4>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ border: '1px red solid', padding: 30 }}>Box 1</div>
        <div style={{ border: '1px red solid', padding: 30 }}>Box 2</div>
        <div style={{ border: '1px red solid', padding: 30 }}>Box 3</div>
      </div>
    </div>
  ));
