import React from 'react'
import { Button, Modal, Header, Form } from 'semantic-ui-react'
import FormInput from '../common/FormInput'

function ResourceNewModal({
  modalOpen,
  formData,
  handleModalOpen,
  handleModalClose,
  handleChange,
  handleSubmit
}) {
  return (
    <div>
      <Modal open={modalOpen} onClose={handleModalClose} trigger={
        <div className='resource-add-btn'>
          <Button
            basic
            color='orange'
            animated='fade'
            className='fluid add-btn'
            onClick={handleModalOpen}
          >
            <Button.Content visible>+</Button.Content>
            <Button.Content hidden>Add a new Resource</Button.Content>
          </Button>
        </div>
      } closeIcon>
        <Header as='h3' className='add-resource' icon='at' content='add resource' />
        <Modal.Content>
          <Form onSubmit={handleSubmit}>
            <FormInput
              className='fluid'
              focus
              placeholder='resource title...'
              value={formData.title || ''}
              type='text'
              name='title'
              onChange={handleChange}
            />
            <FormInput
              className='fluid'
              focus
              placeholder='link...'
              value={formData.url || ''}
              type='text'
              name='url'
              onChange={handleChange}
            />
            <Button
              fluid
              className='add-resource'
              type='submit'
            >
              Add
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    </div>
  )
}

export default ResourceNewModal