import profilePic from './assets/profile.jpg'
function Card(){
return(
    <div className="card">
        <img className="card-image" src={profilePic} alt="Profile Picture" />
        <h2 className='card-title'>Saugat Dhungana</h2>
        <p className="card-text">I dont do anything. I waste my time all the time.</p>
    </div>
)
}

export default Card