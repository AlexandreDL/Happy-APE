import React from 'react';
import {
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  SelectInput,
  ImageInput,
  ImageField,
  
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';


const EventCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="author" reference="profile/users">
        <SelectInput optionText="lastname" />
      </ReferenceInput>
      <TextInput source="name" />
      <RichTextInput source="content" />
      <ImageInput source="pictures" label="Related pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export default EventCreate;
