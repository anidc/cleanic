import FastAndEasy from "../../components/FastAndEasy/FastAndEasy";
import image from "../../images/women-cleaning-window.jpg"
import cities from "../../images/cities.png"
import outfit from "../../images/worker.png"
import users from "../../images/users.png"
import "./aboutus.scss"

const Aboutus = () => {
    return (
        <>
            <div className="image-wrapper">
                <div className="image-overlay"></div>
                <div className="image-overlay2">
                    <h2 className="image-heading">O nama</h2>
                </div>
            </div>
            <div className="aboutus-wrapper">
                <section className="aboutus-top">

                    <div className="aboutus-image-container">
                        <img className="aboutus-image" src={image} alt="" />
                    </div>
                    <div className="aboutus-text">
                        <h3 className="aboutus-text-subheading">Uštedite vrijeme</h3>
                        <h2 className="aboutus-text-heading">Mogućnost pronalaženja čistača u određenom gradu i to po odličnim cijenama.</h2>

                        {/* <br />
                        <p>Dobrodošli na našu novu platformu koja će Vam omogućiti jednostavno i brzo pronalaženje pouzdanih i kvalitetnih čistača i čistačica za Vaš dom ili poslovni prostor. Naša platforma nudi mogućnost pronalaženja čistača u određenom gradu i to po odličnim cijenama.
                            <br />
                            <br />
                            Naša misija je pružiti Vam uslugu koja će Vam uštedjeti vrijeme i trud pri traženju čistača, a istovremeno Vam omogućiti da pronađete najbolju opciju za Vaše potrebe. Naš tim stručnjaka radi naporno kako bi Vam osigurali kvalitetne usluge i osigurali da Vaši domovi i poslovni prostori budu čisti i uredni.
                            <br />
                            <br />
                            Uz našu platformu, više nećete morati gubiti vrijeme na pronalaženje pouzdanih i kvalitetnih čistača. Naša platforma je jednostavna za korištenje, a naši korisnički servisi su uvijek spremni pomoći Vam u slučaju bilo kakvih pitanja ili nedoumica.</p>
                        <br />
                        <p>Naša platforma ne samo da nudi vrhunske usluge čisćenja, već pruža neusporedivu vrijednost za vaš novac. Ne samo da smo posvećeni vašem zadovoljstvu, već smo pošteni i prema vašem novčaniku. Naše cijene su konkurente i prilagodljive vašem budžetu, tako da ne morate brinuti o skrivenim troškovima. Bez obzira trebate li redovno održavanje, ili temeljito čišćenje nakon velikog događaja, naši stručnaci su tu da pruže besprijekornu uslugu. Naš tim stručnih čistača/čistačica obučen je da brzo i učinkovito ukloni sve nečistoće i ostatke, ostavljajući vaš prostor svježim i blistavim. </p>
                        <br />
                        <p>Želimo biti najbolja platforma za pronalaženje čistača u regiji, a to ćemo postići pružanjem kvalitetnih usluga i osiguravanjem da naši korisnici budu zadovoljni našim uslugama. Uvjerite se sami i isprobajte našu platformu već danas!
                            <br />
                            <br />
                            Naši čistači i čistačice su pažljivo odabrani, obučeni i provjereni kako bi Vam osigurali najbolje usluge čišćenja.
                            <br />
                            <br />
                            Naša platforma Vam pruža mogućnost odabira čistača na temelju povratnih informacija korisnika i njihovog ocjenjivanja, kako biste imali sigurnost i povjerenje u usluge koje koristite. Naša platforma je jednostavna i pregledna, tako da možete lako pregledati profile čistača, usporediti cijene i pregovarati s njima.</p>
                        <br /> */}

                        <p className="aboutus-paragraph">Svjesni smo da čišćenje nije uvijek lako, pogotovo kad imate puno drugih obaveza, stoga smo tu da Vam olakšamo posao. Bez obzira na to jeste li u potrazi za nekim tko će održavati Vaš dom ili poslovni prostor, mi smo tu da Vam pomognemo.</p>
                        <p className="aboutus-paragraph">Naša vizija je stvoriti zajednicu u kojoj će korisnici moći pronaći pouzdane i kvalitetne čistače i čistačice, a čistači će imati priliku pružiti kvalitetne usluge i zaraditi dodatni novac. Želimo biti Vaš partner u održavanju čistoće i urednosti Vašeg doma ili poslovnog prostora.</p>
                        <p className="aboutus-paragraph">Pridružite nam se i postanite dio naše zajednice koja se temelji na kvaliteti, transparentnosti i fer cijenama, jer smo svjesni da kvalitetne usluge ne moraju uvijek biti skupe.</p>
                        <div className="aboutus-icons-container">
                            <div className="aboutus-icon-box">
                                <img className="aboutus-icon" src={cities} alt="" />
                                <h4 className="aboutus-icon-number">20+</h4>
                                <p className="aboutus-icon-text">Poslujemo u više od 20 gradova</p>
                            </div>
                            <div className="aboutus-icon-box">
                                <img className="aboutus-icon" src={outfit} alt="" />
                                <h4 className="aboutus-icon-number">80+</h4>
                                <p className="aboutus-icon-text">Imamo više od 80 registrovanih i provjerenih čistača</p>
                            </div>
                            <div className="aboutus-icon-box">
                                <img className="aboutus-icon" src={users} alt="" />
                                <h4 className="aboutus-icon-number">200+</h4>
                                <p className="aboutus-icon-text">Zadovoljstvo naših korisnika je naš prioritet - imamo više od 200 zadovoljnih klijenata</p>
                            </div>
                        </div>
                    </div>

                </section>
                <br />
                <FastAndEasy />
            </div>
        </>
    )
}

export default Aboutus;