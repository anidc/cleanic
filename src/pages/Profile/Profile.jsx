import { useAuth } from "../../contexts/AuthContext";
import "./profile.scss"
import profilePic from "../../images/profile-pic.jpg"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
// import { useHistory } from "react-router-dom";


const Profile = () => {
    const { uid } = useParams()
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const [user, setUser] = useState(null)
    const navigate = useNavigate();

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [navigate])

    useEffect(() => {
        const getUserData = async () => {
            const ref = doc(db, "Users", uid)
            const res = await getDoc(ref)

            if (!res.exists()) return
            const { name, surname, location, price } = res.data()
            if (name && surname) setUser({ name, surname, price, location })
        }
        getUserData()
    }, [uid]);

    async function handleLogout() {
        setError("")
        try {
            await logout()
            navigate("/")
        } catch (error) {
            setError("Neuspjesna odjava")
        }
    }
    return (
        <div className="profile-page">
            <div className="profile-wrapper">
                <div className="gradient-profile">

                </div>
                <div className="content-profile">

                    <div className="left-profile">
                        <div className="profile-image-wrapper">
                            <img src={profilePic} alt="" />
                        </div>
                        <div className="profile-info">
                            <h3>{user?.name} {user?.surname}</h3>
                            <p>{user?.location}</p>
                            <p>Cijena po m2: <strong>{user?.price}KM</strong></p>
                        </div>
                    </div>
                    <div className="mid-profile">
                        <h3>O korisniku:</h3>
                        {user && user.phone ? (
                            <p className="phone-number">Telefon: {user.phone}</p>
                        ) : (
                            <p className="phone-number">Telefon: Nije unešen!</p>
                        )
                        }
                        {
                            user && user.about ? (
                                <p>blabla</p>
                            ) : (
                                <>
                                    <p>Korisnik nije unio više o sebi!</p>
                                </>
                            )
                        }
                    </div>
                    <div className="right-profile">
                        {
                            currentUser && uid === currentUser.uid ?
                                <>
                                    <Link to="/update-profile" className="update-profile-button">Uredi profil</Link>
                                    <button onClick={handleLogout}>Odjavi se</button>
                                </>
                                : <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;