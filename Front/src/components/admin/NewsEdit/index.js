import React from 'react';
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  TextInput,
  DisabledInput,
  SelectInput,
  LongTextInput,
} from 'react-admin';

const NewsTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};


const NewsEdit = props => (
  <Edit title={<NewsTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Edit>
);

export default NewsEdit;
