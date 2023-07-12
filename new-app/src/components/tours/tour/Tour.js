import './Tour.css';
import { Link } from 'react-router-dom';
function Tour({ img, name, id }) {
    return (
        <div class="card-container">
        <div class="card">
          <div class="image-container">
          <Link to={`city/${id}`}>
                <img src={img} alt={name} className="card-img" />
            </Link>
          </div>
          <div class="card-text">
          <h3 className="card-title">{name}</h3>
          </div>
        </div>
      </div>
    )
};

export default Tour;





