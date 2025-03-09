import React from 'react'
import { Button, ConfigProvider } from 'antd'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  position: relative;
  overflow: hidden;
  border: none;
  color: white;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${(props) => props.primaryColor}, ${(props) => props.secondaryColor});
    transition: opacity 0.3s ease-in-out;
    border-radius: inherit;
    opacity: 1;
  }

  &:hover::before {
    opacity: 0;
  }

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${(props) => props.secondaryColor}, ${(props) => props.primaryColor});
    transition: opacity 0.3s ease-in-out;
    border-radius: inherit;
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
  }

  > span {
    position: relative;
    z-index: 1;
  }
`

const CustomButton = ({ children, type = 'primary', size, icon, colors = ['#6253e1', '#04befe'], ...rest }) => {
  return (
    <ConfigProvider>
      <StyledButton type={type} size={size} icon={icon} primaryColor={colors[0]} secondaryColor={colors[1]} {...rest}>
        {children}
      </StyledButton>
    </ConfigProvider>
  )
}

export default CustomButton
