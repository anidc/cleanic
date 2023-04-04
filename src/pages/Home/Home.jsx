import "./home.scss"
import image from "../../images/zena-naslovna.png"
const Home = () => {
    return (
        <>
            <main>
                <div className="left-main">
                    <h3>Pronađite već danas</h3>
                    <h1>Potrebno vam je pospremiti stan a nemate vremena?</h1>
                    <p>Naši Cleaniceri će vaš dom ili poslovni prostor vratiti na fabričke postavke!</p>
                </div>
                <div className="right-main">
                    <img src={image} alt="" />
                </div>
            </main>

            <div className="book-cleanic">
                <h3>Unajmi Cleanicera</h3>
                <div className="book-content">
                    <div className="cleanicer-city">
                        <label htmlFor="">Odaberite grad</label>
                        <select name="">
                            <option value="" selected disabled>Grad</option>
                            <option value="">Sarajevo</option>
                            <option value="">Mostar</option>
                            <option value="">Tuzla</option>
                        </select>
                    </div>
                    <div className="cleanicer-type">
                        <label htmlFor="">Odaberite vrstu prostora</label>
                        <select name="">
                            <option value="" selected disabled>Vrsta prostora</option>
                            <option value="">Stan</option>
                            <option value="">Kuća</option>
                            <option value="">Poslovni prostor</option>
                        </select>
                    </div>
                    <button>Pretraži</button>
                </div>
            </div>

        </>
    )
}

export default Home;