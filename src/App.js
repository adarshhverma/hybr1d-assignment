import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./components/Homepage"
import BlogPostPage from './components/BlogPostPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/blog/:id"  element={<BlogPostPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
