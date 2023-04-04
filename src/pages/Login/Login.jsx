import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import "./login.scss"


const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { login, currentUser } = useAuth()

    useEffect(() => {


        if (currentUser) {
            navigate("/")
        }
    }, [currentUser, navigate])
    async function submitForm(e) {
        e.preventDefault()


        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            setSuccess(true)
            setTimeout(() => {
                navigate("/")
            }, 200);
        } catch (error) {
            if (error.code === "auth/user-not-found") {
                setError("Pogrešan email.")
            } else {
                setError("Pogrešna šifra!")
            }
        }
        setLoading(false)
    }
    return (
        <>
            <div className="form-wrapper">
                <form className="login-form" onSubmit={submitForm}>
                    <h1>Prijavi se</h1>
                    {error && <div className="error-popup"><p>{error}</p></div>}
                    {success && <div className="success-popup"><p>Uspješno ste se prijavili!</p></div>}
                    <input type="email" ref={emailRef} placeholder="Email" />
                    <input type="password" ref={passwordRef} placeholder="Password" />
                    <Link className="forgot-password-link" to="/forgot-password">Zaboravili ste šifru?</Link>
                    <button type="submit" disabled={loading}>Prijavi se</button>
                    <p>nisi registrovan? <Link to="/signup">Registruj se ovdje</Link></p>
                </form>
            </div>
        </>
    )
}

export default Login;