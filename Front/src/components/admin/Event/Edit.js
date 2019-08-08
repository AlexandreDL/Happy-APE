import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  DisabledInput,
  ReferenceInput,
  SelectInput,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const EventsTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};


const EventsEdit = props => (
  <Edit title={<EventsTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <ReferenceInput source="author" reference="events">
        <SelectInput optionText="lastname" />
      </ReferenceInput>
      <TextInput source="title" />
      <RichTextInput source="content" />
    </SimpleForm>
  </Edit>
);

export default EventsEdit;
