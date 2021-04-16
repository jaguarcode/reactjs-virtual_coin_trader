import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import InlineList from '../../ui/InlineList';
import Button from '../../ui/Button';
import Text from '../../ui/Text';
import Input from '../../ui/Input';
import Form from '../../ui/Form';

import Select, { Option } from '../../ui/Select';
import Api from '../../Api';

class TransactionSearchFilter extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(params) {
    const { setTransactionList } = this.props;
    Api.get('/transactions', { params }).then(({ data }) => setTransactionList(data));
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Consumer>
          {({ onChange, values }) => (
            <InlineList spacingBetween={1} verticalAlign="bottom">
              <Text large bold>
                Search
              </Text>
              <Select name="code" label="Coin Code" onChange={onChange} value={values['code']}>
                <Option label="select one..." value="" />
                <Option label="Virtual Coin #1" value="VC1" />
                <Option label="Virtual Coin #2" value="VC2" />
                <Option label="Virtual Coin #3" value="VC3" />
              </Select>
              <Input
                name="currentPrice_gte"
                label="minimum price"
                onChange={onChange}
                value={values['currentPrice_gte']}
              />
              <Input
                name="currentPrice_lte"
                label="maximum price"
                onChange={onChange}
                value={values['currentPrice_lte']}
              />
              <Button type="submit" primary>
                Search
              </Button>
            </InlineList>
          )}
        </Form.Consumer>
      </Form>
    );
  }
}

TransactionSearchFilter.propTypes = {
  setTransactionList: PropTypes.func,
};

export default TransactionSearchFilter;
