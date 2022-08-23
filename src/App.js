import './App.css';
import Banner from './Componentlar/Banner/Banner';
import Footer from './Componentlar/Footer/Footer';
import Header from './Componentlar/Header/Header';
import Katalog from './Componentlar/Kataloglar/Katalog';
import Navbar from './Componentlar/Navbar/Navbar';
import Obuna from './Componentlar/Obuna/Obuna';
import Oyin from './Componentlar/Oyin/Oyin';
import Stenka from './Componentlar/Stenki/Stenka';
import Tosh from './Componentlar/Tosh/Tosh';
import Xizmat from './Componentlar/Xizmat/Xizmat';

function App() {
  return (
    <div className="App">
        <Header/>
        <Navbar/>
        <Banner/>
        <Stenka/>
        <Oyin/>
        <Tosh/>
        <Katalog/>
        <Xizmat/>
        <Obuna/>
        <Footer/>
    </div>
  );
}

export default App;
