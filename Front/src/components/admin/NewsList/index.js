import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Filter,
  ReferenceInput,
  SelectInput,
  TextInput,
  SimpleList,
  Responsive,
} from 'react-admin';

const NewsFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);


const NewsList = props => (
  <List filters={<NewsFilter />} {...props}>
    <Responsive
      small={(
        <SimpleList
          primaryText={record => record.title}
          secondaryText={record => `${record.views} views`}
          tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
        />
)}
      medium={(
        <Datagrid>
          <TextField source="id" />
          <ReferenceField label="User" source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <TextField source="body" />
          <EditButton />
        </Datagrid>
)}
        />
  </List>
);

export default NewsList;
