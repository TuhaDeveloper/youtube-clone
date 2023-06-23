import './App.css';
import Sidebar from './Components/Sidebar';
import Recommended from './Components/Recommended';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './Components/SearchPage';
import ResponsibeBar from './Components/ResponsibeBar';
function App() {
  return (
    <div className="app">
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path='/' element={<>
            <div className='app-page'>
              <Sidebar className='sidebar' />
              <Recommended />
            </div>
          </>} />
        </Routes>
        <Routes>
          <Route path='/search/:searchTerm' element={<>
            <div className='app-page'>
              <Sidebar className='sidebar' />
              <SearchPage />
            </div>
          </>} />
        </Routes>
        <ResponsibeBar />

      </BrowserRouter>

    </div>
  );
}

export default App;
