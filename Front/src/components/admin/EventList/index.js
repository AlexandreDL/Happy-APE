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

const EventFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);


const EventList = props => (
  <List filters={<EventFilter />} {...props}>
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
          <ReferenceField label="User" source="author" reference="profile/users">
            <TextField source="lastname" />
          </ReferenceField>
          <TextField source="name" />
          <TextField source="content" />
          <EditButton />
        </Datagrid>
)}
        />
  </List>
);

export default EventList;
