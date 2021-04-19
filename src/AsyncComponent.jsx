import React, { PureComponent } from 'react';
import Text from './ui/Text';

export default class AsyncComponent extends PureComponent {
  componentDidMount() {
    const { loader } = this.props;
    loader().then(({ default: Component }) => {
      this.Component = Component;
      this.forceUpdate();
    });
  }

  render() {
    const { loader, ...otherProps } = this.props;
    const Component = this.Component;

    return Component ? (
      <Component {...otherProps} />
    ) : (
      <Text secondary large>
        Loading...
      </Text>
    );
  }
}
