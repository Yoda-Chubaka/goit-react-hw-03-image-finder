import styled from 'styled-components'

export const SearchbarStyle = styled.header
  `top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #00b274;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  /* width: 48px; */
  height: 48px;
  border: 0;
  padding: 10px;
  font: inherit;
  font-weight: 500;
  background-color: #b6d7a8;
  color: #fff;
  font-size: 20px;
  /* opacity: 0.6; */
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover{
    opacity: 1;
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  &::placeholder{
    font: inherit;
    font-size: 18px;
  }
`