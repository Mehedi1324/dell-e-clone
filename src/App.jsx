import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="bg-[#f9fafe] h-[calc(100vh-63px)]">
          <Routes className="">
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
