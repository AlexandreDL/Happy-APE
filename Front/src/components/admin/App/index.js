// in src/App.js

import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from 'src/components/App/theme';

import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from 'src/components/admin/Users';
import EventList from 'src/components/admin/EventList';
import EventShow from 'src/components/admin/EventShow';
import EventEdit from 'src/components/admin/EventEdit';
import EventCreate from 'src/components/admin/EventCreate';
import NewsList from 'src/components/admin/NewsList';
import NewsShow from 'src/components/admin/NewsShow';
import NewsEdit from 'src/components/admin/NewsEdit';
import NewsCreate from 'src/components/admin/NewsCreate';
import Dashboard from 'src/components/admin/Dashboard';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import parseHydraDocumentation from '@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation';
import { hydraClient, fetchHydra as baseFetchHydra  } from '@api-platform/admin';
import authProvider from 'src/components/admin/Utils/authProvider';
import { Redirect } from 'react-router-dom';
// import Layout from './Component/Layout';
// import dataProvider from 'src/components/admin/DataProvider';

const entrypoint = 'https://back.isodev.ovh/api/';
const fetchHeaders = {Authorization: `Bearer ${window.localStorage.getItem('token')}`};
const fetchHydra = (url, options = {}) => baseFetchHydra(url, {
  ...options,
  headers: new Headers(fetchHeaders),
});
const dataProvider = api => hydraClient(api, fetchHydra);
const apiDocumentationParser = entrypoint => parseHydraDocumentation(entrypoint, { headers: new Headers(fetchHeaders) })
  .then(
    ({ api }) => ({ api }),
    (result) => {
      switch (result.status) {
        case 401:
          return Promise.resolve({
            api: result.api,
            customRoutes: [{
              props: {
                path: '/',
                render: () => <Redirect to="/login"/>,
              },
            }],
          });

        default:
          return Promise.reject(result);
      }
    },
  );

export default class extends Component {
    state = { api: null };

    componentDidMount() {
      apiDocumentationParser(entrypoint).then(({ api }) => {
        this.setState({ api });
      }).catch((e) => {
        console.log(e);
      });
    }

    render() {
      if (this.state.api === null) return <div>Loading...</div>;
      return (
        <MuiThemeProvider theme={theme}>
          <Admin theme={theme} dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
            <Resource name="events" options={{ label: 'événements' }} list={EventList} edit={EventEdit} create={EventCreate} show={EventShow} icon={PostIcon} />
            <Resource name="news" options={{ label: 'actualités' }} list={NewsList} edit={NewsEdit} create={NewsCreate} show={NewsShow} icon={PostIcon} />
            <Resource name="users" options={{ label: 'utilisateurs' }} list={UserList} icon={UserIcon} />
          </Admin>
        </MuiThemeProvider>
      );
    }
}
