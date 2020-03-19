import React from 'react'
import { Global } from '@emotion/core'

export const GlobalCss = () => {
  return (
    <Global
      styles={{
        body: {
          margin: 0,
          fontFamily: 'Helvetica',
          backgroundColor: '#3E5064',
          color: '#EFF1F3'
        },
        '@media (max-width: 600px)': {
          fontSize: '14px'
        }
      }}
    />
  )
}