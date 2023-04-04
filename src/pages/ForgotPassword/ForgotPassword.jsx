import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import "./forgot-password.scss"


const ForgotPassword = () => {
    const emailRef = useRef()
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const { resetPassword } = useAuth()

    async function submitForm(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setSuccess(true)
        } catch (error) {
            if (error.code === "auth/user-not-found") {
                setError("Pogrešan email.")
            } else {
                setError("Greška prilikom slanja emaila!")
            }
        }
        setLoading(false)
    }
    return (
        <>
            <div className="form-wrapper">
                <form className="reset-pass-form" onSubmit={submitForm}>
                    <h1>Resetiraj šifru</h1>
                    {error && <div className="error-popup"><p>{error}</p></div>}
                    {success && <div className="success-popup"><p>Provjerite svoj inbox!</p></div>}
                    <input type="email" ref={emailRef} placeholder="Email" />
                    <button type="submit" disabled={loading}>Restartuj šifru</button>
                    <p><Link to="/login">Prijavi se ponovo</Link></p>
                </form>
            </div>
        </>
    )
}

export default ForgotPassword;