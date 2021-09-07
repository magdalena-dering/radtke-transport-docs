import * as React from "react"

import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  FileField,
  FileInput,
} from "react-admin"

const PostFilter = (props: any) => {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="title" alwaysOn />
    </Filter>
  )
}

export const FinanceList = (props: any) => (
  <List {...props} filters={<PostFilter />}>
    <Datagrid>
      <TextField source="title" />
      <RichTextField source="body" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" />
    </Datagrid>
  </List>
)

export const FinanceShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <RichTextField source="body" />
      <FileField source="file.src" title="file.title" />
    </SimpleShowLayout>
  </Show>
)

export const FinanceCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <RichTextField source="body" />
      <FileInput source="file" label="File" accept="application/pdf">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
)

export const FinanceEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <SelectInput
        source="rating"
        choices={[
          { id: 1, name: "Good" },
          { id: 2, name: "Okay" },
          { id: 3, name: "Bad" },
        ]}
      />
      <FileInput source="file" label="File" accept="application/pdf">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Edit>
)
