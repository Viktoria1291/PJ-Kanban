import { Board } from "./components/board/board";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Layout } from "./components/layout/layout";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Card } from "./components/board/card/card";

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Board />} />
            <Route path="/tasks/:cardId" element={<Card />} />
          </Routes>
        </main>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
