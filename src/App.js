import Header from './components/Header'
import {Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './services/history'
import Routes from './routes'
import GlobalStyle from './styles/global';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle/>
    </Router>
  );
}

export default App;
