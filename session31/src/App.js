import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import TodoApp from './components/StateManagement/TodoApp';
import TextAnalyzer from './components/StateManagement/TextAnalyzer';
import SocialPostApp from './components/StateManagement/SocialPostApp';
import Menu from './components/Menu';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import PageNotFound from './components/Pages/PageNotFound';
import PostDetails from "./components/Pages/PostDetails";
import AllPosts from "./components/Pages/AllPosts";
import NestedPosts from "./components/Pages/NestedPosts";
import AddNewPost from "./components/Pages/AddNewPost";
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
        <Route path='/allposts' element={<AllPosts/>} />
        <Route path='/allposts/:id' element={<PostDetails/>} />
        <Route path="*" element={<PageNotFound/>} />
        {/* <Route path="/nestedPosts" element={<NestedPosts/>}/> */}
        <Route path="/nestedPosts/*" element={<NestedPosts/>}/>
        {/* Other apps will also render simultaneously  */}
        <Route path='/todo' element={<TodoApp/>} />
        <Route path='/text' element={<TextAnalyzer/>} />
        <Route path='/social' element={<SocialPostApp/>} />
        <Route path='/newPost' element={<AddNewPost/>} />

      </Routes>
      </BrowserRouter>   


    </div>
  );
}

export default App;
