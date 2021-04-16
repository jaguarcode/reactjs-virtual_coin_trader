import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../src/ui/Heading';
import Button from '../../../src/ui/Button';
import Card from '../../../src/ui/Card';
import InlineList from '../../../src/ui/InlineList';
import Text from '../../../src/ui/Text';
import { Consumer as Modal } from '../../../src/ui/Modal/context';
import { TRADE_COIN_MODAL } from '../../constants/modals';

class CoinDashlet extends PureComponent {
  render() {
    const { name, priceLabel } = this.props;
    return (
      <Modal>
        {({ openModal }) => (
          <Card vertical={4} horizontal={4}>
            <Heading level={4}>
              {name}
              <br></br>
              <Text>{priceLabel}</Text>
            </Heading>
            <InlineList spacingBetween={1}>
              <Button
                primary
                small
                onPress={() =>
                  openModal(TRADE_COIN_MODAL, { type: 'sell', name, price: priceLabel })
                }
              >
                Sell
              </Button>
              <Button
                small
                onPress={() =>
                  openModal(TRADE_COIN_MODAL, { type: 'buy', name, price: priceLabel })
                }
              >
                Buy
              </Button>
            </InlineList>
          </Card>
        )}
      </Modal>
    );
  }
}

CoinDashlet.propTypes = {
  name: PropTypes.string,
  priceLabel: PropTypes.string,
};

export default CoinDashlet;
