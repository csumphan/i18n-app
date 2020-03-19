import React from 'react'
import styled from '@emotion/styled'

import PropTypes from 'prop-types';

const CardContainer = styled.div`
  background-color: #25374A;
  border-radius: 4px;
  display: inline-block;
  margin: 10px;
  padding: 5px;
  @media (max-width: 540px) {
    overflow-x: auto;
    width: 320px;
  }
`

const Title = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  padding: 0 8px;
`

export const Card = ({ title, children }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      {children}
    </CardContainer>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card
