import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import Text from '../ui/Text';
import Spacing from '../ui/Spacing';

class NotFound extends PureComponent {
  render() {
    const { url } = this.props.match || {};
    return (
      <React.Fragment>
        <Spacing bottom={2}>
          <Text xlarge>{url} page not found.</Text>
        </Spacing>
        <Link to="/">Move to Main page</Link>
      </React.Fragment>
    );
  }
}

export default NotFound;
