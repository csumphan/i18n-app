import React from 'react'
import styled from '@emotion/styled'

import { AiFillPlusCircle } from 'react-icons/ai'
import { IoMdShareAlt } from 'react-icons/io'

import { TranslationContext } from '../../helpers/translations'

import { PageVisit } from './panels/PageVisit'
import { StatusCode } from './panels/StatusCode'
import { Browser } from './panels/Browser'
import { SearchTerm } from './panels/SearchTerm'
import { SignUp } from './panels/SignUp'

const DashboardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
`

const Header = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin: 20px 10px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 450px) {
    font-size: 16px;
  }
`

const IconContainer = styled.div`
  margin: 0 5px;
  color: #EFF1F3;
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
`

export const Dashboard = () => {
  const translations = React.useContext(TranslationContext)
  return (
    <div>
      <Header>
        {translations.userAnalysis}
        <div>
          <IconContainer>
            <AiFillPlusCircle />
          </IconContainer>
          <IconContainer>
            <IoMdShareAlt />
          </IconContainer>
        </div>
      </Header>
      <DashboardContainer>
        <PageVisit />
        <StatusCode />
        <Browser />
        <SearchTerm />
        <SignUp />
      </DashboardContainer>
    </div>
  )
}