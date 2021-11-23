import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  width: 100vw;
  color: ${props => props.theme.colors.secundary};
  display: flex;
  align-items: center;
  background-color: invisible;
  padding: 20px
`;