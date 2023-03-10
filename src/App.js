
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./components/users";
import Posts from "./components/posts";
import Todos from "./components/todos";
import Albums from "./components/albums";
import Header from "./components/header";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index path="posts" element={<Posts />} />
          <Route path="users" element={<Users />} />
          <Route path="albums" element={<Albums />} />
          <Route path="todos" element={<Todos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}