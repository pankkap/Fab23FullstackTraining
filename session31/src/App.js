import "../node_modules/bootstrap/dist/css/bootstrap.css";
import TodoApp from './components/StateManagement/TodoApp';
import TextAnalyzer from './components/StateManagement/TextAnalyzer';
import SocialPostApp from './components/StateManagement/SocialPostApp';
import Menu from './components/Menu';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Posts from './components/Pages/Posts';
import PageNotFound from './components/Pages/PageNotFound';
function App() {

  return (
    <div className="container">
      {/* Single Page Application */}
      <BrowserRouter>
      {/* Menu should be outside the Routes, because it will visible on every page */}
      <Menu/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/posts' element={<Posts/>} />
        <Route path="*" element={<PageNotFound/>} />
        
        {/* Other apps will also render simultaneously  */}
        <Route path='/todo' element={<TodoApp/>} />
        <Route path='/text' element={<TextAnalyzer/>} />
        <Route path='/social' element={<SocialPostApp/>} />
      </Routes>
      </BrowserRouter>   


    </div>
  );
}

export default App;
