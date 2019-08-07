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

const EventTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};


const EventEdit = props => (
  <Edit title={<EventTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <ReferenceInput source="author" reference="profile/users">
        <SelectInput optionText="lastname" />
      </ReferenceInput>
      <TextInput source="name" />
      <RichTextInput source="content" />
    </SimpleForm>
  </Edit>
);

export default EventEdit;
