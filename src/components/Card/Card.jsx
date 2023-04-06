import "./card.scss"
import image from "../../images/profile-pic.jpg"

const Card = ({ user }) => {
    return (
        <div className="card">
            <div className="image-side">
                <img src={image} alt="" />
            </div>
            <div className="info-side">
                <h3>{user.name}</h3>
                <div className="location-price">
                    <p className="location">{user.location}</p>
                    <p className="price">{user.price}KM/<span>m2</span></p>
                </div>
            </div>
        </div>
    )
}

export default Card;