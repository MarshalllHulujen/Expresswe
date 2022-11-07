import './App.css';
import { Background } from './components/HomePage';
import { SignIn } from './components/SignIn';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Stopwatch } from './components/Stopwatch';

const App=()=> {
  return (
    <div id='Return'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Background/>} />
        <Route path="/SignIn" element={< SignIn/>} />
        <Route path='/Stopwatch' element={< Stopwatch/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;