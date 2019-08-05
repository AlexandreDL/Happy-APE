import React from 'react';
import {
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  SelectInput,
  
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';


const EventCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <RichTextInput source="body" />
    </SimpleForm>
  </Create>
);

export default EventCreate;
