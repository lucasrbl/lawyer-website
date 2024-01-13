import { GlobalStyles } from './assets/styles/GlobalStyles';
import { About } from './components/About/About';
import { Header } from './components/Header/Header';

const App: React.FC = () => {

  return (
    <>
    <GlobalStyles/>
    <Header/>
    <About />
    </>
  );
};

export default App;
