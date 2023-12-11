// import 'src/styles/index.scss';
// import { Main } from './components/index';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <title>Watch Searching</title>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
