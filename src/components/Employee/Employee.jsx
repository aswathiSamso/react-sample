import {
  Form,
  FormButton,
  FormCheckbox,
  FormGroup,
  FormInput,
  FormRadio,
  FormSelect,
  FormTextArea,
} from 'semantic-ui-react'
import React, { Component } from 'react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const Employee = () => {
  const { value } = this.state
  return (
    <Form>
      <FormGroup widths='equal'>
        <FormInput fluid label='First name' placeholder='First name' />
        <FormInput fluid label='Last name' placeholder='Last name' />
        <FormSelect
          fluid
          label='Gender'
          options={options}
          placeholder='Gender'
        />
      </FormGroup>
      <FormGroup inline>
        <label>Size</label>
        <FormRadio
          label='Small'
          value='sm'
          checked={value === 'sm'}
          onChange={this.handleChange}
        />
        <FormRadio
          label='Medium'
          value='md'
          checked={value === 'md'}
          onChange={this.handleChange}
        />
        <FormRadio
          label='Large'
          value='lg'
          checked={value === 'lg'}
          onChange={this.handleChange}
        />
      </FormGroup>
      <FormTextArea label='About' placeholder='Tell us more about you...' />
      <FormCheckbox label='I agree to the Terms and Conditions' />
      <FormButton>Submit</FormButton>
    </Form>
  )
}

export default Employee