import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Archives from "./pages/Archives";
import Detail from "./pages/Detail";
import NewNote from "./pages/NewNote";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="min-h-dvh bg-gray-50 text-gray-900">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/notes/new" element={<NewNote />} />
          <Route path="/notes/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
