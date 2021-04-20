import React, { PureComponent } from 'react';
import AppLayout from '../src/components/AppLayout';
import RegisterPageContainer from '../src/containers/signup/RegisterPageContainer';
import NotificationContainer from '../src/containers/NotificationContainer';

class RegisterDocument extends PureComponent {
  render() {
    return (
      <AppLayout>
        <RegisterPageContainer />
        <NotificationContainer />
      </AppLayout>
    );
  }
}

export default RegisterDocument;
