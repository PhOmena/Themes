import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secundary};
  display: flex;
  align-items: center;
  padding: 0 70px;
  justify-content: space-between;
  font-size: 15px;
`;
