import './App.css';
import { Background } from './components/HomePage';
import { SignIn } from './components/SignIn';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App=()=> {
  return (
    <div id='Return'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Background/>} />
        
        <Route path="/SignIn" element={< SignIn/>} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;