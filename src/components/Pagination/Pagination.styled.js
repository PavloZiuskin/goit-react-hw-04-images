import styled from 'styled-components';
import { IconButton as NewIcon } from 'components/IconButton/IconButton';

export const IconButton = styled(NewIcon)`
  width: 100px;
  height: 40px;
  background-color: #4712fa;
  border-radius: 4px;
  color: #fff;
`;
export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 1200px;
`;
