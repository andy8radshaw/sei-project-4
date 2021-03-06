import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function DeleteConfirmModal({ deleteModalOpen, nameOfThingToDelete, handleCloseDeleteConfirm, handleDelete }) {

  return (
    <Modal size='mini' open={deleteModalOpen} basic>
      <Header icon='archive' content='Delete?' />
      <Modal.Content>
        <p>
          Please confirm if you would like to delete this {nameOfThingToDelete}. This action cannot be undone...
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='blue' inverted onClick={handleCloseDeleteConfirm}>
          <Icon name='ban' /> cancel
        </Button>
        <Button color='red' inverted onClick={handleDelete}>
          <Icon name='remove' /> Delete
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default DeleteConfirmModal