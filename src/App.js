import './App.css';
import Aisle from "./components/Aisle"
import Footer from './components/Footer';
import Header from './components/Header';
import Receipt from './components/Receipt';

function App() {
  return (
    <div className="App">
      <Header/>
      <Aisle/>
      <Receipt/>
      <Footer/>
    </div>
  );
}

export default App;
