import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import './App.scss';
import 'react-notifications-component/dist/theme.css'
import ReactNotification from 'react-notifications-component'
import Axios from 'axios'

const loading = () => {
  return (<div className="animated fadeIn pt-3 center text-center">...Loading</div>)
}

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));


class App extends Component {

  componentWillMount() {
    Axios.interceptors.request.use(function (config) {

      // spinning start to show
      // UPDATE: Add this code to show global loading indicator
      document.body.classList.add('loading-indicator');

      const token = window.localStorage.token;
      if (token) {
        config.headers.Authorization = `token ${token}`
      }
        return config
      }, function (error) {
        document.body.classList.remove('loading-indicator');
        return Promise.reject(error);
      });

      Axios.interceptors.response.use(function (response) {
        document.body.classList.remove('loading-indicator');
        return response;
      }, function (error) {
        document.body.classList.remove('loading-indicator');
        return Promise.reject(error);
      });
  }

  render() {
    return (
      <HashRouter>
        <ReactNotification />
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
