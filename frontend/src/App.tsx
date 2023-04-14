import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}
