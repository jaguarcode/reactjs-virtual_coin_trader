import React, { PureComponent } from 'react';

import InlineList from '../../ui/InlineList';
import Button from '../../ui/Button';
import Text from '../../ui/Text';
import Input from '../../ui/Input';
import Form from '../../ui/Form';

import Select, { Option } from '../../ui/Select';

class TransactionSearchFilter extends PureComponent {
  render() {
    return (
      <Form onSubmit={(values) => console.log(values)}>
        <Form.Consumer>
          {({ onChange, values }) => (
            <InlineList spacingBetween={2} verticalAlign="bottom">
              <Text large bold>
                Search
              </Text>
              <Select name="code" label="Coin Code" onChange={onChange} value={values['code']}>
                <Option label="select one..." />
                <Option label="Virtual Coin #1" value="VC1" />
                <Option label="Virtual Coin #2" value="VC2" />
                <Option label="Virtual Coin #3" value="VC3" />
              </Select>
              <Input
                name="minAmount"
                label="minimum amount"
                onChange={onChange}
                value={values['minAmount']}
              />
              <Input
                name="maxAmount"
                label="maximum amount"
                onChange={onChange}
                value={values['maxAmount']}
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

TransactionSearchFilter.propTypes = {};

export default TransactionSearchFilter;
