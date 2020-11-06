import styled from 'styled-components';
import { primaryColor } from '../../constants';

export const MainWrapper = styled.div `
  @keyframes go-left {
    from { transform: translateX(100%) }
    to { transform: translateX(0) }
  }
  @keyframes go-right {
    from { transform: translateX(0) }
    to { transform: translateX(100%) }
  }

  width: 250px;
  height: 100vh;
  background: white;
  position: fixed;
  z-index: 10000;
  top: 0; right: 0;
  box-sizing: border-box;
  
  animation: go-left 300ms forwards;

  &.hidden {
    animation: go-right 300ms forwards;
  }

  @media (min-width: 920px) {
    width: 300px;
    position: absolute;
    right: 0;
    z-index: 10000;
  }
`;

export const OptionsContainer = styled.section `
  margin-top: 40px;
`;

export const SingleOption = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 0 15px 16px;
  cursor: pointer;
  transition: linear 150ms;

  :hover {
    background: ${primaryColor};
  }
`;

export const OptionName = styled.p `
  margin: 0 0 0 10px;
  color: black;
  text-decoration: none !important;
`;

export const Name = styled.p `
  margin: 16px 0 0 16px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Montserrat';
`;