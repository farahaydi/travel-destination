import "./Home.css";
import Header from '../../components/header/Header';
import Tours from '../../components/tours/Tours';
import Footer from '../../components/footer/Footer';
import db from "../../data/db.json";

function Home() {
    return (
      <div className="App">
        <Header />
        {
          db.map((obj, i) => (
          <Tours  image={obj.image} name={obj.name} />
          ))
        }
        <Footer />
      </div>
    );
  }

export default Home;
