import { doc, getDoc } from "firebase/firestore"
import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { db } from "../../firebase"
import "./signup.scss"

const Signup = () => {
    const nameRef = useRef()
    const surnameRef = useRef()
    const priceRef = useRef()
    const locationRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { signup, currentUser } = useAuth()
    const [gradovi, setGradovi] = useState([])
    const getUserData = async () => {
        const ref = doc(db, "Mjesta", "Gradovi")
        const res = await getDoc(ref)
        setGradovi(res.data().grad)
    }

    useEffect(() => {
        if (currentUser) {
            navigate("/")
        }
        getUserData()
    }, [currentUser, navigate])
    async function handleSubmit(e) {
        e.preventDefault()

        if (!passwordRef.current.value || !passwordConfirmRef.current.value || !emailRef.current.value || !nameRef.current.value || !surnameRef.current.value) {
            return setError("Popunite sve podatke!")
        }

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Šifre se ne poklapaju")
        }

        try {
            setError("")
            setLoading(true)
            await signup(nameRef.current.value, surnameRef.current.value, priceRef.current.value, locationRef.current.value, emailRef.current.value, passwordRef.current.value)
            setSuccess(true)
            setTimeout(() => {
                navigate("/")
            }, 200);
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setError("Email je već u upotrebi.")
            } else {
                setError("Greška tokom registracije!")
            }

        }
        setLoading(false)

    }

    return (
        <>
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Registruj se</h1>
                    {error && <div className="error-popup"><p>{error}</p></div>}
                    {success && <div className="success-popup"><p>Uspješno ste se registrovali!</p></div>}
                    <input type="text" ref={nameRef} placeholder="Ime" />
                    <input type="text" ref={surnameRef} placeholder="Prezime" />
                    <input type="number" ref={priceRef} placeholder="Cijena po m2" />
                    <select type="text" ref={locationRef} >
                        <option disabled selected>Odaberite grad</option>
                        {gradovi.map(grad => {
                            return <option key={grad}>{grad}</option>
                        })}
                    </select>
                    <input type="email" ref={emailRef} placeholder="Email" />
                    <input type="password" ref={passwordRef} placeholder="Password" />
                    <input type="password" ref={passwordConfirmRef} placeholder="Potvrdite password" />
                    <button type="submit" disabled={loading}>Registruj se</button>
                    <p>već si registrovan? <Link to="/login">Prijavi se</Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Signup;