import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  Filter,
  ReferenceInput,
  SelectInput,
  TextInput,
  SimpleList,
  Responsive,
  EditButton,
  ShowButton,
  RichTextField,
} from 'react-admin';

const EventFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="author" reference="events" allowEmpty>
      <SelectInput optionText="lastname" />
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
          <ReferenceField label="User" source="author" reference="events">
            <TextField source="lastname" />
          </ReferenceField>
          <TextField source="name" />
          <RichTextField source="content" />
          <EditButton />
          <ShowButton />
        </Datagrid>
)}
        />
  </List>
);

export default EventList;
