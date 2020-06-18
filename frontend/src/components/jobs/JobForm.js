import React from 'react'
import { Segment, Form, Button, Header, Grid, Dropdown, TextArea } from 'semantic-ui-react'
import SemanticDatepicker from 'react-semantic-ui-datepickers'

import FormInput from '../common/FormInput'

function JobForm({ data, errors, handleChange, handleDateChange, selectDropdown, handleSubmit, formHeaderText, options, buttonText }) {

  // console.log(newJobStatus)

  // const jobStatus = (options, newJobStatus) => {
  //   options.find(option => {
  //     console.log(option.value === parseInt(newJobStatus))
  //     if (option.value === parseInt(newJobStatus)) {
  //       return option.text
  //     }
  //   })
  // }

  // console.log(jobStatus(options, newJobStatus))

  return (
    <Segment.Group as='div' className='job-form'>
      <Segment>
        <Header as='h1' textAlign='center'> {formHeaderText}</Header>
        <Form onSubmit={handleSubmit}>
          <Grid stackable columns={2}>
            <Grid.Row>
              <Grid.Column width={11}>
                <Form.Field>
                  <Header size='small'>Job title</Header>
                  <FormInput
                    error={errors.job_title}
                    fluidIcon='id badge outline'
                    iconPosition='left'
                    type='text'
                    placeholder='Job title'
                    name='job_title'
                    value={data.job_title || ''}
                    onChange={handleChange}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column width={5} only='computer'>
                <Form.Field>
                  <Header size='small'>Application deadline</Header>
                  <SemanticDatepicker
                    datePickerOnly
                    clearable
                    format='DD MMMM YYYY'
                    name='application_deadline'
                    value={data.application_deadline ? new Date(data.application_deadline) : ''}
                    onChange={handleDateChange}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={11}>
                <Form.Field>
                  <Header size='small'>Company</Header>
                  <FormInput
                    error={errors.company}
                    fluidIcon='building'
                    iconPosition='left'
                    type='text'
                    placeholder='Company'
                    name='company'
                    value={data.company || ''}
                    onChange={handleChange}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column width={5} only='computer'>
                <Form.Field>
                  <Header size='small'>Application submitted</Header>
                  <SemanticDatepicker
                    datePickerOnly
                    clearable
                    format='DD MMMM YYYY'
                    name='application_submitted'
                    value={data.application_submitted !== null ? new Date(data.application_submitted) : ''}
                    onChange={handleDateChange}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched>
              <Grid.Column width={4}>
                <Form.Field>
                  <Header size='small'>City</Header>
                  <FormInput
                    error={errors.city}
                    type='text'
                    placeholder='City'
                    name='city'
                    value={data.city || ''}
                    onChange={handleChange}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column width={7}>
                <Form.Field>
                  <Header size='small'>Country</Header>
                  <FormInput
                    error={errors.country}
                    type='text'
                    placeholder='Country'
                    name='country'
                    value={data.country || ''}
                    onChange={handleChange}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column width={5} only='computer'>
                <Form.Field>
                  <Header size='small'>Interview date</Header>
                  <SemanticDatepicker
                    datePickerOnly
                    clearable
                    format='DD MMMM YYYY'
                    name='interview_date'
                    value={data.interview_date ? new Date(data.interview_date) : ''}
                    onChange={handleDateChange}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched>
              <Grid.Column width={11}>
                <Form.Field>
                  <Header size='small'>URL</Header>
                  <FormInput
                    error={errors.job_url}
                    type='text'
                    placeholder='Job URL'
                    name='job_url'
                    value={data.job_url || ''}
                    onChange={handleChange}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column width={5} only='computer'>
                <Form.Field>
                  <Header size='small'>Job offer date</Header>
                  <SemanticDatepicker
                    datePickerOnly
                    clearable
                    format='DD MMMM YYYY'
                    name='job_offer_date'
                    value={data.job_offer_date ? new Date(data.job_offer_date) : ''}
                    onChange={handleDateChange}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched>
              <Grid.Column width={6}>
                <Form.Field>
                  <Header size='small'>Salary</Header>
                  <FormInput
                    error={errors.salary}
                    type='text'
                    placeholder='Salary'
                    name='salary'
                    value={data.salary || ''}
                    onChange={handleChange}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column width={5}>
                <Form.Field>
                  <Header size='small'>Status</Header>
                  <Dropdown
                    fluid
                    selection
                    name='status'
                    value={data.status || ''}
                    options={options}
                    onChange={selectDropdown}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column width={5} only='computer'>
                <Form.Field>
                  <Header size='small'>Offer accepted</Header>
                  <SemanticDatepicker
                    datePickerOnly
                    clearable
                    format='DD MMMM YYYY'
                    name='offer_acceptance_date'
                    value={data.offer_acceptance_date ? new Date(data.offer_acceptance_date) : ''}
                    onChange={handleDateChange}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched>
              <Grid.Column width={16}>
                <Form.Field>
                  <Header size='small'>Description/notes</Header>
                  <TextArea
                    error={errors.salary}
                    type='text'
                    placeholder='No description'
                    name='description'
                    value={data.description || ''}
                    onChange={handleChange}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Column width={16} only='tablet mobile'>
              <Form.Field>
                <Header size='small'>Application deadline</Header>
                <SemanticDatepicker
                  datePickerOnly
                  clearable
                  format='DD MMMM YYYY'
                  name='application_deadline'
                  value={data.application_deadline ? new Date(data.application_deadline) : ''}
                  onChange={handleDateChange}
                />
              </Form.Field>
            </Grid.Column>
            <Grid.Column only='tablet mobile'>
              <Form.Field>
                <Header size='small'>Application submitted</Header>
                <SemanticDatepicker
                  fluid
                  datePickerOnly
                  clearable
                  format='DD MMMM YYYY'
                  name='application_submitted'
                  value={data.application_submitted !== null ? new Date(data.application_submitted) : ''}
                  onChange={handleDateChange}
                />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width={16} only='tablet mobile'>
              <Form.Field>
                <Header size='small'>Interview date</Header>
                <SemanticDatepicker
                  datePickerOnly
                  clearable
                  format='DD MMMM YYYY'
                  name='interview_date'
                  value={data.interview_date ? new Date(data.interview_date) : ''}
                  onChange={handleDateChange}
                />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width={16} only='tablet mobile'>
              <Form.Field>
                <Header size='small'>Job offer date</Header>
                <SemanticDatepicker
                  datePickerOnly
                  clearable
                  format='DD MMMM YYYY'
                  name='job_offer_date'
                  value={data.job_offer_date ? new Date(data.job_offer_date) : ''}
                  onChange={handleDateChange}
                />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width={16} only='tablet mobile'>
              <Form.Field>
                <Header size='small'>Offer accepted</Header>
                <SemanticDatepicker
                  datePickerOnly
                  clearable
                  format='DD MMMM YYYY'
                  name='offer_accepted'
                  value={data.offer_accepted ? new Date(data.offer_accepted) : ''}
                  onChange={handleDateChange}
                />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
          </Grid>
          <Button
            className='teal-button'
            content={buttonText} 
            fluid />
        </Form>
      </Segment>
    </Segment.Group>
  )

}

export default JobForm