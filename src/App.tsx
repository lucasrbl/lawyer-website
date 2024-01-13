import { GlobalStyles } from './assets/styles/GlobalStyles';
import { About } from './components/About/About';
import { Header } from './components/Header/Header';
import { MainSection } from './components/MainSection/MainSection';

const App: React.FC = () => {

  return (
    <>
    <GlobalStyles/>
    <Header/>
    <MainSection/>
    <About />
    </>
  );
};

export default App;
