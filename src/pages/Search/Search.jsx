import { useEffect, useRef, useState } from "react";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Card from "../../components/Card/Card";
import "./search.scss"

const Search = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [gradovi, setGradovi] = useState([])
    const locationRef = useRef()
    const genderRef = useRef()

    const getLocations = async () => {
        const ref = doc(db, "Mjesta", "Gradovi")
        const res = await getDoc(ref)
        setGradovi(res.data().grad)
    }

    const getUsers = async (e) => {
        if (e) e.preventDefault()
        setLoading(true)
        let q = collection(db, "Users");

        if (locationRef.current.value) {
            q = query(q, where("location", "==", locationRef.current.value));
        }
        if (genderRef.current.value) {
            q = query(q, where("gender", "==", genderRef.current.value));
        }

        const querySnapshot = await getDocs(q);
        const users = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setUsers(users)
        setLoading(false)
    }
    useEffect(() => {
        getUsers();
        getLocations()
    }, []);
    return (
        <div className="search-wrapper">
            <div className="filters">
                <h2>Filteri</h2>
                <form onSubmit={getUsers} action="">

                    <select ref={locationRef} name="" id="">
                        <option value="">Odaberite grad</option>
                        {gradovi.map((grad) => {
                            return <option key={grad} value={grad}>{grad}</option>
                        })}
                    </select>
                    <select ref={genderRef} name="" id="">
                        <option value="">Odaberite pol</option>
                        <option value="Muško">Muško</option>
                        <option value="Žensko">Žensko</option>
                    </select>
                    <button type="submit">Pretraži</button>
                </form>
            </div>

            {loading ? (
                <div className="card-wrapper loading">
                    <p>Učitavanje...</p>
                </div>
            ) : (
                <div className="card-wrapper">
                    {users && users.length > 0 ? (
                        users.map((user) => <Card key={user.id} user={user} />)
                    ) : (
                        <div className="card-wrapper empty-message">
                            <p>Nema rezultata pretrage.</p>
                        </div>
                    )}
                </div>
            )}
        </div>

    )
}

export default Search;