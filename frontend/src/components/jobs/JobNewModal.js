import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

import JobNew from './JobNew'

function JobNewModal({ addNewModalOpen, handleNewJobModalClose, newJobStatus }) {

  // console.log(newJobStatus, typeof(newJobStatus))
  return (
    <Modal open={addNewModalOpen}>
      <Modal.Content>
        <Button
          size='large'
          className='cancel-button'
          icon='close'
          onClick={handleNewJobModalClose}
        />
        <JobNew
          handleNewJobModalClose={handleNewJobModalClose}
          newJobStatus={newJobStatus}
        />
      </Modal.Content>
    </Modal>
  )
}

export default JobNewModal