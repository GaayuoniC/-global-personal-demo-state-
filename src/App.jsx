import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Card } from "../components/Card";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Card title="Box One">
          <p>I am the box one contents</p>
        </Card>
        <Card title="Box Two">
          <p>I am the box two contents</p>
        </Card>
        <Card title="Box Three">
          <p>I am the box three contents</p>
        </Card>
      </main>
      <Footer />
    </>
  );
}

export default App;
