import "./App.scss";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MyProject } from "./components/MyProject/MyProject";

function App() {
  return (
    <>
      <Header />

      <main>
        <AboutMe />

        <MyProject />
      </main>

      <Footer />
    </>
  );
}

export default App;
