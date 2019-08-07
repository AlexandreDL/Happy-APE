import React from 'react';
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  TextInput,
  DisabledInput,
  SelectInput,
 
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const NewsTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};


const NewsEdit = props => (
  <Edit title={<NewsTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <ReferenceInput source="author" reference="profile/users">
        <SelectInput optionText="lastname" />
      </ReferenceInput>
      <TextInput source="title" />
      <RichTextInput source="content" />
    </SimpleForm>
  </Edit>
);

export default NewsEdit;
