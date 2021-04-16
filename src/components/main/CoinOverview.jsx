import React, { PureComponent } from 'react';
import Heading from '../../ui/Heading';
import InlineList from '../../ui/InlineList';
import CoinDashlet from './CoinDashlet';

class CoinOverview extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Heading level={3}>Coin Trends</Heading>
        <InlineList spacingBetween={1}>
          <CoinDashlet name="Virtual Coin #1" priceLabel="$1,000" />
          <CoinDashlet name="Virtual Coin #2" priceLabel="$100" />
          <CoinDashlet name="Virtual Coin #3" priceLabel="$10" />
        </InlineList>
      </React.Fragment>
    );
  }
}

export default CoinOverview;
