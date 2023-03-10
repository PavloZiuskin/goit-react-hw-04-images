import styled from 'styled-components';
import { IconButton as NewButton } from 'components/IconButton/IconButton';

export const ModalBackdrop = styled.div`
  display: block;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 600px;
  min-height: 300px;
  width: 50%;
  background-color: #fff;
  border-radius: 4px;

  img {
    width: 100%;
  }
`;
export const IconButton = styled(NewButton)`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: transparent;
  svg {
    width: 40px;
    height: 40px;
  }
`;
