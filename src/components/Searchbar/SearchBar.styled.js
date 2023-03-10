import styled from 'styled-components';
import { IconButton as NewBtn } from 'components/IconButton/IconButton';
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    width: 200px;
    height: 32px;
    padding: 0;
    border: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    :hover,
    :focus {
      outline: none;
    }
  }
`;
export const Header = styled.header`
  width: 1200px;
  background-color: #0a0a0a;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 10px;
`;
export const IconButton = styled(NewBtn)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #fff;
  svg {
    width: 24px;
    height: 24px;
  }
`;
