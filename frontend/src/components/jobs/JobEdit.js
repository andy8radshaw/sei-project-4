import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getSingleJob, editJob } from '../../lib/api'
import { Grid, Header, Segment } from 'semantic-ui-react'
import useFetch from '../../utils/useFetch'
import useForm from '../../utils/useForm'

import PageContainer from '../common/PageContainer'
import FormInput from '../common/FormInput'
import FormButton from '../common/FormButton'

function JobEdit() {
  const { id: jobId } = useParams()
  const history = useHistory()
  const { data: job, loading, error } = useFetch(getSingleJob, jobId)
  const onSubmitSuccess = () => {
    history.push(`/jobs/${jobId}/`)
  }

  const { formData, handleChange, setFormData, formErrors, handleSubmit } = useForm({
    job_title: '',
    company: '',
    application_deadline: null,
    application_submitted: null,
    interview_date: null,
    job_offer_date: null,
    offer_acceptance_date: null,
    job_url: '',
    salary: null,
    city: '',
    country: '',
    status: null
  }, editJob, jobId, onSubmitSuccess)

  React.useEffect(() => {
    if (job) {
      setFormData({ ...job, status: job.status.id })
    }
  }, [job, setFormData])

  if (error) {
    console.log(error)
  }

  return (
    <PageContainer>
      {loading ?
        'LOADING' :
        <Segment.Group>
          <Segment textAlign='left'>
            <Header as='h1' textAlign='center'>{job.job_title}</Header>
            <Grid stackable columns={2}>
              <Grid.Row stretched>
                <Grid.Column width={12}>
                  <Header size='small'>Job title</Header>
                  <Segment>
                    <p>{job.job_title}</p>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={4} only='computer tablet'>
                  <Header size='small'>Application deadline</Header>
                  <Segment>
                    <p>{job.application_deadline ? job.application_deadline : 'No date'}</p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={12}>
                  <Header size='small'>Company</Header>
                  <Segment>
                    <p>{job.company}</p>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={4} only='computer tablet'>
                  <Header size='small'>Application submitted</Header>
                  <Segment>
                    <p>{job.application_submitted ? job.application_submitted : 'No date'}</p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row stretched>
                <Grid.Column width={4}>
                  <Header size='small'>City</Header>
                  <Segment>
                    <p>{job.city}</p>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Header size='small'>Country</Header>
                  <Segment>
                    <p>{job.country}</p>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={4} only='computer tablet'>
                  <Header size='small'>Interview date</Header>
                  <Segment>
                    <p>{job.interview_date ? job.interview_date : 'No date'}</p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row stretched>
                <Grid.Column width={12}>
                  <Header size='small'>URL</Header>
                  <Segment>
                    <p>{job.job_url}</p>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={4} only='computer tablet'>
                  <Header size='small'>Job offer date</Header>
                  <Segment>
                    <p>{job.job_offer_date ? job.job_offer_date : 'No date'}</p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row stretched>
                <Grid.Column width={6}>
                  <Header size='small'>Salary</Header>
                  <Segment>
                    <p>{job.salary ? job.salary : 'No salary'}</p>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={6}>
                  <Header size='small'>Status</Header>
                  <Segment>
                    <p>{job.status.name}</p>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={4} only='computer tablet'>
                  <Header size='small'>Offer accepted</Header>
                  <Segment>
                    <p>{job.offer_accepted ? job.offer_accepted : 'No date'}</p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Column width={4} only='mobile'>
                <Header size='small'>Application deadline</Header>
                <Segment>
                  <p>{job.application_deadline ? job.application_deadline : 'No date'}</p>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4} only='mobile'>
                <Header size='small'>Application submitted</Header>
                <Segment>
                  <p>{job.application_submitted ? job.application_submitted : 'No date'}</p>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4} only='mobile'>
                <Header size='small'>Interview date</Header>
                <Segment>
                  <p>{job.interview_date ? job.interview_date : 'No date'}</p>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4} only='mobile'>
                <Header size='small'>Job offer date</Header>
                <Segment>
                  <p>{job.job_offer_date ? job.job_offer_date : 'No date'}</p>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4} only='mobile'>
                <Header size='small'>Offer accepted</Header>
                <Segment>
                  <p>{job.offer_accepted ? job.offer_accepted : 'No date'}</p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
            </Grid>
            <FormButton
              fluidSize='large'
              color='orange'
              buttonText='Update'
              type='submit'
            />
          </Segment>
        </Segment.Group>
      }
    </PageContainer >
  )
}
export default JobEdit