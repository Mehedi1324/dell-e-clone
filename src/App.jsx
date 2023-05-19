import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="bg-gradient-to-r from-[#000000d4] backdrop-brightness-50 to-gray-900 h-full min-h-screen backdrop-blur-sm">
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
