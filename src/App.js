import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import { Audios } from './pages/Audios';
import { Videos } from './pages/Videos';
import AppContainer from './components/AppContainer';
import SurahDetails from './pages/SurahDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Blog />} />
        <Route path='audios' element={<AppContainer>
          <Audios />
        </AppContainer>
        } />
        <Route path='videos' element={<AppContainer>
          <Videos />
        </AppContainer>
        } />
        <Route path='surahDetails' element={<AppContainer>
          <SurahDetails />
        </AppContainer>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
