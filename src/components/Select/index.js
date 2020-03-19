import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core';
import useMedia from 'use-media';

import { TiArrowUnsorted } from 'react-icons/ti'

const Wrapper = styled.div`
  position: relative;
  user-select: none;
  width: 100%;
  @media (max-width: 720px) {
    display: none;
  }
`
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-width: 2px solid;
`
const Body = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  border: 2px solid;
`

const isOpenStyle = props => {
  return css`
    opacity: ${props.isOpen ? 1 : 0};
    visibility: ${props.isOpen ? "visible" : "hidden"};
    pointer-events: ${props.isOpen ? "all" : "none"};
  `
}

const Options = styled.div({
  position: "absolute",
  display: "block",
  top: "100%",
  left: "0",
  right: "0",
  border: "1px solid #394a6d",
  borderTop: "0",
  background: "#223843",
  transition: "all 0.5s",
  zIndex: "2"
}, isOpenStyle)

const Option = styled.div({
  position: 'relative',
  display: 'block',
  padding: '0 10px',
  fontSize: '14px',
  fontWeight: 300,
  color: '#EFF1F3',
  lineHeight: '40px',
  cursor: 'pointer',
  transition: 'all 0.5s',
  '&:hover': {
    backgroundColor: '#D77A61'
  }
}, isOpenStyle)

const SelectInput = styled.select`
  border: 2px solid;
  border-color: #EFF1F3;
  background-color: #223843;
  color: #EFF1F3;
  padding: 5px 0;
`

const Select = ({ onChange, options }) => {
  const [isOpen, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState(options.length > 0 ? options[0] : {})

  const isMobile = useMedia({ maxWidth: '720px' });

  // return normal select if mobile device
  if (isMobile) {
    return (
      <SelectInput value={selected.id} onChange={(e) => {
        const index = e.nativeEvent.target.selectedIndex;
        setSelected({
          id: e.target.value,
          text: e.nativeEvent.target[index].text
        })
        onChange(e.target.value)
      }}>
        {
          options.map(option => (
            <option
              key={option.id}
              value={option.id}>
              {option.text}
            </option>
          ))
        }
      </SelectInput>
    )
  }

  return (
    <Wrapper>
      <Container>
        <Body onClick={() => setOpen(!isOpen)}><span>{selected.text}</span>
          <TiArrowUnsorted />
        </Body>
        <Options isOpen={isOpen}>
          {
            options.map((option) => (
              <Option
                key={option.id}
                isOpen={isOpen}
                onClick={() => {
                  setSelected(option)
                  onChange(option.id)
                  setOpen(false)
                }}
              >{option.text}</Option>
            ))
          }
        </Options>
      </Container>
    </Wrapper>
  )
}

export default Select