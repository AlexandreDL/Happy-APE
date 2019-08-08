// in src/App.js

import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from 'src/components/App/theme';

import { Admin, Resource } from 'react-admin';
// lien vers nos composants
import UserList from 'src/components/admin/Users/List';
import EventList from 'src/components/admin/Event/List';
import EventShow from 'src/components/admin/Event/Show';
import EventEdit from 'src/components/admin/Event/Edit';
import EventCreate from 'src/components/admin/Event/Create';
import NewsList from 'src/components/admin/News/List';
import NewsShow from 'src/components/admin/News/Show';
import NewsEdit from 'src/components/admin/News/Edit';
import NewsCreate from 'src/components/admin/News/Create';
import PageList from 'src/components/admin/Page/List';
import PageEdit from 'src/components/admin/Page/Edit';
import ContactList from 'src/components/admin/Contact/List';
import ContactShow from 'src/components/admin/Contact/Show';
import Dashboard from 'src/components/admin/Dashboard';
import PrivatePostList from 'src/components/admin/PrivatePost/List';
import PrivatePostShow from 'src/components/admin/PrivatePost/Show';
import PrivatePostEdit from 'src/components/admin/PrivatePost/Edit';
import PrivatePostCreate from 'src/components/admin/PrivatePost/Create';

// Icons
import LocalPostOffice from '@material-ui/icons/LocalPostOffice';
import FormatIndentIncrease from '@material-ui/icons/FormatIndentIncrease';
import Announcement from '@material-ui/icons/Announcement';
import AddToHomeScreen from '@material-ui/icons/AddToHomeScreen';
import EventAvailable from '@material-ui/icons/EventAvailable';
import UserIcon from '@material-ui/icons/Group';

// reactadmin
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
          <Admin api={ this.state.api }
            apiDocumentationParser={apiDocumentationParser}
            dataProvider= {dataProvider(this.state.api)}
            theme={theme} 
            dashboard={Dashboard}
            authProvider={authProvider}
          >
            <Resource name="events" options={{ label: 'événements' }} list={EventList} edit={EventEdit} create={EventCreate} show={EventShow} icon={EventAvailable} />
            <Resource name="news" options={{ label: 'actualités' }} list={NewsList} edit={NewsEdit} create={NewsCreate} show={NewsShow} icon={Announcement} />
            <Resource name="profile/users" options={{ label: 'utilisateurs' }} list={UserList} icon={UserIcon} />
            <Resource name="pages" options={{ label: 'pages' }} list={PageList} edit={PageEdit} icon={FormatIndentIncrease} />
            <Resource name="contacts" options={{ label: 'contact' }} list={ContactList} show={ContactShow} icon={LocalPostOffice} />
            <Resource name="private_posts" options={{ label: 'Actu interne' }} list={PrivatePostList} edit={PrivatePostEdit} show={PrivatePostShow} create={PrivatePostCreate} icon={AddToHomeScreen} />
          </Admin>
        </MuiThemeProvider>
      );
    }
}
