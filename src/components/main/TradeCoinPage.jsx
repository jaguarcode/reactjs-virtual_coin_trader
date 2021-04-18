import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Text from '../../ui/Text';
import Spacing from '../../ui/Spacing';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import InlineList from '../../ui/InlineList';
import Form from '../../ui/Form';
import { Consumer as Modal } from '../../ui/Modal/context';

class TradeCoinPage extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values, closeModal) {
    const { name, code, createTransaction } = this.props;
    const formValues = {
      ...values,
      code,
      name,
    };
    createTransaction(formValues, closeModal);
  }

  render() {
    const { name, price, type, loading } = this.props;
    const typeName = type === 'sell' ? 'Sell' : 'Buy';
    return (
      <Modal>
        {({ closeModal }) => (
          <Form
            onSubmit={(values) => this.handleSubmit(values, closeModal)}
            initValues={{ currentPrice: price }}
          >
            <Form.Consumer>
              {({ onChange, values }) => (
                <Spacing horizontal={4} vertical={8}>
                  <Text xlarge bold>
                    {name} {typeName}
                  </Text>
                  <Spacing bottom={2}>
                    <Input
                      name="currentPrice"
                      label="Price"
                      value={values['currentPrice']}
                      onChange={onChange}
                    />
                  </Spacing>
                  <Spacing bottom={2}>
                    <Input
                      name="amount"
                      label="Amount"
                      value={values['amount']}
                      onChange={onChange}
                    />
                  </Spacing>
                  <InlineList spacingBetween={1}>
                    <Button primary disable={loading}>
                      {typeName}
                    </Button>
                    <Button onPress={closeModal} disable={loading}>
                      Cancel
                    </Button>
                  </InlineList>
                </Spacing>
              )}
            </Form.Consumer>
          </Form>
        )}
      </Modal>
    );
  }
}

TradeCoinPage.propTypes = {
  createTransaction: PropTypes.func,
};

export default TradeCoinPage;
