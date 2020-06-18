import React from 'react'
import { Grid, Form, Header } from 'semantic-ui-react'

function FormWrapper({ textAlign, verticalAlign, titleSize, color, formTitle, onSubmit, children }) {
  return (
    <Grid textAlign={textAlign} style={{ height: '100vh' }} verticalAlign={verticalAlign}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header id="header-font" as={titleSize} color={color}>{formTitle}</Header>
        <Form
          size='large'
          onSubmit={onSubmit}
        >
          {children}
        </Form>
      </Grid.Column>
    </Grid>

  )
}
export default FormWrapper