import { BsEnvelopeAtFill, BsTelephoneFill } from "react-icons/bs";
import { ReactComponent as Mirror } from "../../images/mirror.svg"
import { Link } from "react-router-dom";
import "./footer.scss"

const Footer = () => {
    return (
        <>
            <section className="above-footer-section">
                Osvježite svoj dom uz nas!
                <Mirror className="mirror-svg" />
            </section>
            <footer>
                <div className="footer-wrapper">
                    <div className="footer-content logo-quote">
                        <h4 className="footer-logo">Clean<span>ic</span></h4>
                        <p className="footer-quote">Naši Cleaniceri vraćaju vaš dom ili poslovni prostor na fabričke postavke!</p>
                    </div>
                    <div className="footer-content">
                        <h4 className="footer-content-title">Platforma</h4>
                        <Link className="footer-link" to="/">Home</Link>
                        <Link className="footer-link" to="/search">Cleanic-eri</Link>
                        <Link className="footer-link" to="/about-us">Ko smo mi?</Link>
                    </div>
                    <div className="footer-content">
                        <h4 className="footer-content-title">Kontakt</h4>
                        <p><BsTelephoneFill className="footer-icon" /> 061/061-061</p>
                        <p><BsEnvelopeAtFill className="footer-icon" /> info@cleanic.ba</p>

                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Copyright &copy; Cleanic 2023</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;