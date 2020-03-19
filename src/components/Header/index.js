import React from 'react'
import styled from '@emotion/styled'

import { AiTwotoneBug, AiOutlineMore } from 'react-icons/ai'
// import { GiHamburgerMenu } from 'react-icons/gi'

import { translationOptions, TranslationContext } from '../../helpers/translations'

import SearchInput from '../SearchInput'
import Select from '../Select'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #223843;
  font-weight: bold;
  margin-bottom: 10px;
`

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 15px;
`

const IconContainer = styled.div`
  display: none;
  margin: 0px 4px;
  @media (max-width: 720px) {
    display: block;
  }
`

const HeaderTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-left: 5px;
  @media (max-width: 720px) {
    display: none;
  }
`

const OptionContainer = styled.div`
  margin: 0px 10px;
  width: 120px;
  @media (max-width: 720px) {
    display: none;
  }
  &:hover {
    cursor: pointer;
  }
`
export const Header = ({
  handleLanguageChange
}) => {
  const translations = React.useContext(TranslationContext)
  return (
    <HeaderContainer>
      <SectionContainer>
        <AiTwotoneBug size={32} />
        <HeaderTitle>
          BugCatcher
        </HeaderTitle>
      </SectionContainer>
      <SectionContainer>
        <SearchInput />
      </SectionContainer>
      <SectionContainer>
        <OptionContainer>{translations.dashboard}</OptionContainer>
        <OptionContainer>{translations.myAccount}</OptionContainer>
        <Select
          onChange={handleLanguageChange}
          options={translationOptions}
        />
        <IconContainer>
          <AiOutlineMore size={40} />
        </IconContainer>
      </SectionContainer>
    </HeaderContainer>
  )
}