import './App.css';
import { Button, Card } from 'react-bootstrap';
import News from './components/News/News';
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';
import Fragment from './components/Fragment/Fragment';

function App() {
  return (
    <div>
      <h1>This is Button</h1>
      <Header></Header>
      <Fragment></Fragment>
      <TopHeadline></TopHeadline>
      {/* <News></News> */}

    </div>
  );
}

export default App;
