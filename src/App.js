// components
import ChargersForm from "./pages/ChargersForm";
// styled components
import {StyledMainContent, StyledMainWrapper} from "./styled/layout";

/**
 * Entry point component
 * @return {JSX.Element}
 */
function App() {
  return (
    <StyledMainWrapper>
      <StyledMainContent id="main">
        <ChargersForm/>
      </StyledMainContent>
    </StyledMainWrapper>
  );
}

export default App;
