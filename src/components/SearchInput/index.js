import React from 'react'
import styled from '@emotion/styled'

import { AiOutlineSearch } from 'react-icons/ai'

export const SearchInputContainer = styled.div`
  border: 2px solid;
  border-radius: 4px;
  width: 100%;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  @media (max-width: 720px) {
    border: 1px solid;
    padding: 2px 4px;
  }
`

export const Input = styled.input`
  border: none;
  background-color: #223843;
  font-size: 18px;
  font-weight: bold;
  color: #EFF1F3;
  padding: 5px;
  margin: 0 5px;
  width: 100%;
  outline: none;
  @media (max-width: 720px) {
    font-size: 14px;
  }
`

const SearchInput = ({ header, body, children }) => (
  <SearchInputContainer>
    <AiOutlineSearch size={30}/>
    <Input></Input>
  </SearchInputContainer>
)

export default SearchInput
