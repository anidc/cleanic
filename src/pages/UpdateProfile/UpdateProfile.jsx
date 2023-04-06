import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { doc, getDoc } from "firebase/firestore"
import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { db } from "../../firebase"
import "./updateprofile.scss"

const UpdateProfile = () => {
    const nameRef = useRef()
    const surnameRef = useRef()
    const phoneRef = useRef()
    const genderRef = useRef()
    const priceRef = useRef()
    const locationRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { currentUser, updatePassword, updateEmail, updateUser } = useAuth()

    const [user, setUser] = useState(null)
    const [gradovi, setGradovi] = useState([])
    const [selected, setSelected] = useState("")

    const getLocations = async () => {
        const ref = doc(db, "Mjesta", "Gradovi")
        const res = await getDoc(ref)
        setGradovi(res.data().grad)
    }

    const getUserData = async () => {
        const ref = doc(db, "Users", currentUser.uid)
        const res = await getDoc(ref)

        if (!res.exists()) return
        const { name, surname, location, price, gender } = res.data()

        setSelected(location);
        if (name && surname) setUser({ name, surname, location, price, gender })
    }

    useEffect(() => {
        if (!currentUser) {
            navigate("/")
        } else {
            getUserData()
            getLocations()
        }
    }, [currentUser, navigate])

    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Šifre se ne poklapaju")
        }

        const promises = []
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }
        if (nameRef.current.value || surnameRef.current.value) {
            promises.push(updateUser({ name: nameRef.current.value, surname: surnameRef.current.value, price: priceRef.current.value, location: locationRef.current.value, gender: genderRef.current.value }))
        }

        Promise.all(promises)
            .then(() => {
                setError("")
                setSuccess("Uspješno ste izmijenili informacije!")
                setTimeout(() => {
                    navigate("/profile")
                }, 200);
            })
            .catch((error) => {
                console.log(error)
                setError("Greška prilikom izmjene informacija!")
            }
            )
            .finally(() => {
                setLoading(false)
            })

    }
    return (
        <>
            <div className="form-wrapper update-profile">
                <form onSubmit={handleSubmit}>
                    <h1>Uredi profil</h1>
                    {error && <div className="error-popup"><p>{error}</p></div>}
                    {success && <div className="success-popup"><p>Uspješno ste uredili profil!</p></div>}
                    <div className="info-fields">
                        <div className="left-side">
                            <label htmlFor="name">Ime</label>
                            <input type="text" required defaultValue={user && user.name} ref={nameRef} />
                            <label htmlFor="name">Prezime</label>
                            <input type="text" required defaultValue={user && user.surname} ref={surnameRef} />
                            <label htmlFor="name">Spol</label>
                            <select defaultValue={user && user.gender} ref={genderRef}>
                                <option disabled selected>Odaberite pol</option>
                                <option value="Muško">Muško</option>
                                <option value="Žensko">Žensko</option>
                            </select>
                        </div>
                        <div className="mid-side">
                            <label htmlFor="price">Cijena po m2</label>
                            <input type="number" ref={priceRef} required defaultValue={user && user.price} placeholder="Cijena po m2" />
                            <label htmlFor="price">Broj telefona</label>
                            <input type="tel" ref={phoneRef} defaultValue={user && user.phone} placeholder="061/234-567" />
                            <label htmlFor="location">Lokacija</label>

                            <select type="text" ref={locationRef} onChange={e => {
                            }} >
                                <option disabled>Odaberite grad</option>
                                {gradovi.map(grad => {
                                    return <option key={grad} selected={grad === selected} value={grad}>{grad}</option>
                                })}
                            </select>


                        </div>
                        <div className="right-side">
                            <label htmlFor="name">Email</label>
                            <input type="email" defaultValue={currentUser.email} ref={emailRef} placeholder="Email" />
                            <label htmlFor="name">Password</label>
                            <input type="password" ref={passwordRef} placeholder="Ostavi prazno ako ne želiš promijeniti" />
                            <label htmlFor="name">Potvrdi password</label>
                            <input type="password" ref={passwordConfirmRef} placeholder="Ostavi prazno ako ne želiš promijeniti" />
                        </div>
                    </div>
                    <button type="submit" disabled={loading}>Završi</button>
                    <p><Link to="/profile">Cancel</Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default UpdateProfile;