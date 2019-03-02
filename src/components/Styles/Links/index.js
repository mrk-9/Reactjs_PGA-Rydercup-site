import styled from 'styled-components'
import { Link } from 'gatsby'

export const OutlineLink = styled.a`
display: inline-block;
margin-top: 15px;
  padding: 10px 25px;
  border: 1px solid;
  border-radius: 50px;
  font-size: 12px;
  transition: all 0.5s;
  font-weight: 700;
  text-transform: uppercase;
  box-shadow: none;
  background-color: #fff;
  border: 1px solid #C81414;
  color: #C81414;
  font-size: 12px;
  transition: all 0.5s;
  font-weight: 700;
  text-transform: uppercase;
}

&:hover,
&:focus,
&:active {
  background-color: #fff;
  border: 1px solid #EF4B4B;
  outline: none;
  text-decoration: none;
}

`

export const ExternalLink = styled.a`
  text-decoration: none;
  outline: none;
  color: #c81414;
  &:hover {
    color: #ef4b4b;
  }
`
export const PrimaryLink = styled(Link)`
  background-color: #c81414;
  border: 1px solid #c81414;
  display: block;
  color: #fff;
  font-size: 12px;
  transition: all 0.5s;
  font-weight: 700;
  text-transform: uppercase;
  text-align:center;
  padding: 10px 25px;
  width: 100%;
  max-width: 320px;
  border-radius: 50px;
  &:hover {
    color: #fff;
    background-color: #ef4b4b;
    border: 1px solid #ef4b4b;
    outline: none;
    text-decoration: none;
  }
`

export const CircleButton = styled.div`
  display: block;
  margin: 0 auto;
  cursor: pointer;
  padding: 10px 10px;
  font-size: 12px;
  transition: all 0.5s;
  text-transform: uppercase;
  box-shadow: none;
  background-color: #c81414;
  border: 1px solid #c81414;
  color: #fff;
  transition: all 0.5s;
  font-weight: 700;
  text-transform: uppercase;
  width: 48px;
  height: 48px;
  text-align: center;
  line-height: 1.8;
  border-radius: 50%;
  &:hover {
    background-color: #ef4b4b;
    border: 1px solid #ef4b4b;
    color: #fff;
    outline: none;
    text-decoration: none;
  }
`
