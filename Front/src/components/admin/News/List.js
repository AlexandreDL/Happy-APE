import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  ShowButton,
  Filter,
  ReferenceInput,
  SelectInput,
  TextInput,
  SimpleList,
  Responsive,
  RichTextField,
} from 'react-admin';

const NewsFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="author" reference="news" allowEmpty>
      <SelectInput optionText="lastname" />
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
          <ReferenceField label="User" source="author" reference="news">
            <TextField source="lastname" />
          </ReferenceField>
          <TextField source="title" />
          <RichTextField source="content" />
          <EditButton />
          <ShowButton />
        </Datagrid>
)}
        />
  </List>
);

export default NewsList;
