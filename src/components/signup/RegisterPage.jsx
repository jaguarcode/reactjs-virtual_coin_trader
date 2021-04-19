import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Text from '../../ui/Text';
import Spacing from '../../ui/Spacing';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import InlineList from '../../ui/InlineList';
import Form from '../../ui/Form';
import { Consumer as Modal } from '../../ui/Modal/context';

class RegisterPage extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values, closeModal) {
    const { createUser } = this.props;
    createUser(values, closeModal);
  }

  render() {
    const { loading } = this.props;
    return (
      <Modal>
        {({ closeModal }) => (
          <Form onSubmit={(values) => this.handleSubmit(values, closeModal)}>
            <Form.Consumer>
              {({ onChange }) => (
                <Spacing horizontal={4} vertical={8}>
                  <Text xlarge bold>
                    Sign up
                  </Text>
                  <Spacing bottom={2}>
                    <Input name="userId" label="User Id" onChange={onChange} />
                  </Spacing>
                  <Spacing bottom={2}>
                    <Input
                      name="totalAmount"
                      type="number"
                      label="How much do you have??"
                      onChange={onChange}
                    />
                  </Spacing>
                  <InlineList spacingBetween={1}>
                    <Button type="submit" primary disabled={loading}>
                      Submit
                    </Button>
                    <Button onPress={closeModal} disabled={loading}>
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

RegisterPage.propTypes = {
  loading: PropTypes.bool,
  createUser: PropTypes.func,
};

export default RegisterPage;
