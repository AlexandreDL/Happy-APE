import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  Filter,
  TextInput,
  ReferenceInput,
  SelectInput,
  SimpleList,
  Responsive,
} from 'react-admin';

const PostFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

const UserList = props => (
  <List filters={<PostFilter />} {...props}>
    <Responsive
      small={(
        <SimpleList
          primaryText={record => record.title}
          secondaryText={record => `${record.views} views`}
          tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
        />
  )}
      medium={(
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          <EmailField source="email" />
          <TextField source="address.street" />
          <TextField source="phone" />
          <UrlField source="website" />
          <TextField source="company.name" />
        </Datagrid>
        )}
    />
  </List>
);

export default UserList;

