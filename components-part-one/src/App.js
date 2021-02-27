import { 
  FooterContainer,
  MainContainer,
  HeaderContainer
} from './styles'
import { ErrorBoundary } from './components'

function App() {
  return (
      <ErrorBoundary>
        <>
        <HeaderContainer/>
        <MainContainer/>
        <FooterContainer/>
        </>
      </ErrorBoundary>
  );
}

export default App;
