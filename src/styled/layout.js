import styled from 'styled-components';

const StyledMainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 15px;
  background-color: #f5f5f5;
`;

const StyledMainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #cfd8dc;
  width: 700px;
  min-height: 300px;
  padding: 20px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  color: #263238;
`;

export {StyledMainContent, StyledMainWrapper};
