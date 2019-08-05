// in src/App.js

import React from 'react';
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

import authProvider from 'src/components/admin/Utils/authProvider';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Admin theme={theme} dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      
      <Resource name="posts" options={{ label: 'événements' }} list={EventList} edit={EventEdit} create={EventCreate} show={EventShow} icon={PostIcon} />
      <Resource name="news" options={{ label: 'actualités' }} list={NewsList} edit={NewsEdit} create={NewsCreate} show={NewsShow} icon={PostIcon} />
      <Resource name="users" options={{ label: 'utilisateurs' }} list={UserList} icon={UserIcon} />
    </Admin>
  </MuiThemeProvider>
);

export default App;
