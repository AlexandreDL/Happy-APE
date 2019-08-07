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
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <RichTextInput source="body" />
    </SimpleForm>
  </Edit>
);

export default EventEdit;
