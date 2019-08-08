import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,

 
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const EventsTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};


const EventsEdit = props => (
  <Edit title={<EventsTitle />} {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <RichTextInput source="content" />
    </SimpleForm>
  </Edit>
);

export default EventsEdit;
