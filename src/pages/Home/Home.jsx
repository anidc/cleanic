import "./home.scss"
import image from "../../images/women-homepage.png";
import imageBackground from "../../images/home-background.png";
import FastAndEasy from "../../components/FastAndEasy/FastAndEasy";
import Button from "../../components/Button/Button";
import { SlArrowRight } from "react-icons/sl"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <img src={imageBackground} alt="" className="background-home-image" />
            <main>
                <div className="left-main">
                    <h3>Pronađite već danas</h3>
                    <h1>Potrebno vam je pospremiti stan a nemate vremena?</h1>
                    <p>Bez obzira trebate li redovno održavanje, ili temeljito čišćenje nakon velikog događaja, naši stručnaci su tu da pruže besprijekornu uslugu.</p>
                    <div className="left-main-buttons">
                        <Link to="/search" className="left-main-button-link">
                            <Button name="Rezerviši sad" klasa="search-cleanic" />
                        </Link>
                        <Link to="/about-us" className="left-main-button-link">
                            <Button name="Saznaj više" klasa="learn-more" icon={<SlArrowRight />} />
                        </Link>
                    </div>
                </div>
                <div className="right-main">
                    <img src={image} alt="" />
                </div>
            </main>
            <FastAndEasy />
            <br />
            <br />
        </>
    )
}

export default Home;