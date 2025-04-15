import './App.css';
import Header from './components/Header';
import About from './components/About';
import FeatureSection1 from './components/FeatureSection1';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <FeatureSection1 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
