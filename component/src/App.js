import logo from './logo.svg';
import './App.css';
import { Background } from './components/HomePage';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { SignIn } from './components/SignIn';

function App() {
  return (
    <div id='Return'>
      < Background/>
    </div>
  );
}

export default App;