import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { API_FETCHING } from '@ib/api-constants'

import styled from 'styled-components'

import Button from '.'

storiesOf('Component Guide', module)
   .add('Button Component', () => (
      <Button text='Click' onClick={action('clicked')} />
   ))
   .add('Button Component with apiStatus', () => (
      <Button
         text='Click'
         onClick={action('clicked')}
         apiStatus={API_FETCHING}
      />
   ))