import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../src/ui/Heading';
import Button from '../../../src/ui/Button';
import Card from '../../../src/ui/Card';
import InlineList from '../../../src/ui/InlineList';
import Text from '../../../src/ui/Text';

class CoinDashlet extends PureComponent {
  render() {
    const { name, priceLabel } = this.props;
    return (
      <Card vertical={4} horizontal={4}>
        <Heading level={4}>
          {name}
          <br></br>
          <Text>{priceLabel}</Text>
        </Heading>
        <InlineList spacingBetween={1}>
          <Button primary small>
            Sell
          </Button>
          <Button small>Buy</Button>
        </InlineList>
      </Card>
    );
  }
}

CoinDashlet.propTypes = {
  name: PropTypes.string,
  priceLabel: PropTypes.string,
};

export default CoinDashlet;
