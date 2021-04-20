import React from 'react';
import App, { Container } from 'next/app';
import configureStore from '../src/store/configureStore';
import { Provider } from 'react-redux';
import ModalProvider from '../src/ModalProvider';
import AppLayout from '../src/components/AppLayout';
import NotificationContainer from '../src/containers/NotificationContainer';
import { StaticRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import RouterStateContainer from '../src/containers/RouterStateContainer';

const isServer = typeof window === 'undefined';

class MyApp extends App {
  store = configureStore();

  render() {
    const { Component, router, pageProps } = this.props;
    const Router = isServer ? StaticRouter : BrowserRouter;
    const routerProps = isServer ? { location: router.asPath } : {};

    return (
      <Container>
        <Provider store={this.store}>
          <Router {...routerProps}>
            <RouterStateContainer />
            <ModalProvider>
              <AppLayout>
                <Component {...pageProps} />
                <NotificationContainer />
              </AppLayout>
            </ModalProvider>
            <NotificationContainer />
          </Router>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
