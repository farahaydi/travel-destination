import "./Home.css";
import Header from '../../components/header/Header';
import Tours from '../../components/tours/Tours';
import Footer from '../../components/footer/Footer';

function Home() {
    return (
      <div className="App">
        <Tours />
        <Footer />
      </div>
    );
  }

export default Home;
