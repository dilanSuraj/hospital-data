import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import Dashboard from '../../views/Dashboard/Dashboard'

import {
  AppHeader,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';

const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  constructor(props) {
    super(props);
    
  }
  
  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    
    return (
      <div className="app">
        <AppHeader fixed>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
        </AppHeader>
        <div className="app-body">
          <main className="main">
            <Container fluid>
                <Switch>
                  <Redirect from="/" to="/dashboard" />
                </Switch>
                <Dashboard/>  
            </Container>
          </main>
        </div>
        </div>
    );
  }
}

export default DefaultLayout;
