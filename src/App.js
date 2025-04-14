import './App.css';
import Header from './components/Header';
import About from './components/About';
import FeatureSection1 from './components/FeatureSection1';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <FeatureSection1 />
      </main>
    </div>
  );
}

export default App;
