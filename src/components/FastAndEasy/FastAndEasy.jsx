import checkmark from "../../images/checked.png"
import contact from "../../images/contact-phone.png"
import deck from "../../images/deck-chair.png"

import "./fastandeasy.scss"

const FastAndEasy = () => {
    return (
        <div className="fast-and-easy">
            <h3 className="fast-easy-subheading">U par koraka</h3>
            <h2 className="fast-easy-heading">Brzo i lako dođi do Cleanic-era</h2>
            <div className="cards">
                <div className="card-step">
                    <img src={checkmark} alt="" />
                    <h3 className="fast-easy-card-heading">Odaberi</h3>
                    <p className="fast-easy-card-text">Odaberite lokaciju te pregledajte profile i cijene dostupnih čistača kako biste pronašli onoga koji odgovara vašim potrebama.</p>
                </div>
                <div className="card-step">
                    <img src={contact} alt="" />
                    <h3 className="fast-easy-card-heading">Kontaktiraj</h3>
                    <p className="fast-easy-card-text">Kontaktirajte čistača ili čistačicu po vašem izboru kako biste se dogovorili o detaljima usluge čišćenja.</p>
                </div>
                <div className="card-step">
                    <img src={deck} alt="" />
                    <h3 className="fast-easy-card-heading">Odmori</h3>
                    <p className="fast-easy-card-text">Odmorite se dok Vaš odabrani čistač ili čistačica radi svoj posao i osigurava čistoću i urednost Vašeg doma ili poslovnog prostora.</p>
                </div>
            </div>
        </div>
    )
}

export default FastAndEasy;