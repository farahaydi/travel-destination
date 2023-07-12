import db from '../../data/db.json'
import Tour from './tour/Tour';
import './Tours.css';
function Tours() {
    return (
        <div>
            <div id='tours' className='services'>
            <div className='flex'>
                {db.map((obj, i) => (
                    <Tour key={i} id={obj.id} name={obj.name} img={obj.image} info={obj.info} />
                ))
                }
            </div>
        </div>
        </div>
    )
}
export default Tours;