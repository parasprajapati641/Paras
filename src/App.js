import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";
import Header from "./Header";
import DemoCard from "./form/DemoCard";
import Design from "./form//Design/Design";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Comment from "./Api";
import Patch from "./Patch";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/formpage" element={<DemoCard />} />
        <Route path="/design" element={<Design/>} />
        <Route path="/comment" element={<Comment/>} />
        <Route path="/patch" element={<Patch/>} />
      </Routes>
    </div>
  );
}

export default App;
