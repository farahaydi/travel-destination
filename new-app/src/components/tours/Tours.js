import "./Tours.css";
import db from "../../data/db.json";

function Tours(props) {

    return (
        <div class="card-container">
        <div class="card">
          <div class="image-container">
            <img src={props.image} alt={props.name} />
          </div>
          <div class="card-text">
            <p>{props.name}</p>
          </div>
        </div>
      </div>
    );
  }
  export default Tours;
