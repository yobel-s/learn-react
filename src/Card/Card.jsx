import profilePicture from '../assets/profile.jpeg'
import './Card.css';

/* ----- FIRST CODE ----- */

function Card(){

    //const handleClick =() => console.log("OUCH");

    return(
        <div className="card">
            {/* <img className="card-image" src={profilePicture} alt="photos-picture" onClick={(e) => handleClick(e)}/> */}
            <img className="card-image" src={profilePicture} alt="photos-picture"/>
            <h2 className="card-title">Yobel Codot</h2>
            <p className="card-text">I learn React.js</p>
        </div>
    );
}

export default Card


