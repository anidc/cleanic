import { useEffect, useRef, useState } from "react";
import { collection, query, where, getDocs, doc, getDoc, orderBy, limit, startAfter } from "firebase/firestore";
import { db } from "../../firebase";
import Card from "../../components/Card/Card";
import "./search.scss"

const Search = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(false)
    const [gradovi, setGradovi] = useState([])
    const locationRef = useRef()
    const genderRef = useRef()
    const priceOrderRef = useRef()
    const [lastDoc, setLastDoc] = useState(null);
    const [hasMore, setHasMore] = useState(true)

    const getLocations = async () => {
        const ref = doc(db, "Mjesta", "Gradovi")
        const res = await getDoc(ref)
        setGradovi(res.data().grad)
    }

    const getUsers = async (e, lastDoc) => {
        if (e) e.preventDefault()

        setLoading2(true)

        let q = collection(db, "Users");

        if (locationRef.current.value) {
            q = query(q, where("location", "==", locationRef.current.value));
        }
        if (genderRef.current.value) {
            q = query(q, where("gender", "==", genderRef.current.value));
        }

        if (priceOrderRef.current.value === "asc") {
            q = query(q, orderBy("price", "asc"))
        } else if (priceOrderRef.current.value === "desc") {
            q = query(q, orderBy("price", "desc"))
        }

        if (lastDoc) {
            q = query(q, startAfter(lastDoc))
        }

        q = query(q, limit(20))

        const querySnapshot = await getDocs(q);
        const newUsers = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        if (newUsers.length === 0) {
            setHasMore(false)
        }
        if (!lastDoc) {
            setUsers(newUsers)
        } else {
            setUsers((prevUsers) => [...prevUsers, ...newUsers])
        }
        setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1])
        setLoading(false)
        setLoading2(false)
    }

    useEffect(() => {
        setLoading(true)
        getUsers();
        getLocations()
    }, []);

    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };


    useEffect(() => {
        const handleScroll = debounce(() => {
            const scrollTop = document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const scrollHeight = document.documentElement.scrollHeight;

            if (scrollTop + windowHeight >= scrollHeight - 300 && !loading && hasMore) {
                getUsers(null, lastDoc);
            }
        }, 200)


        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading, hasMore, lastDoc]);
    return (
        <div className="search-wrapper">
            <div className="search-sort">
                <select ref={priceOrderRef} name="priceOrder" onChange={getUsers}>
                    <option value="">Relevantnosti</option>
                    <option value="asc">Najjeftiniji prvo</option>
                    <option value="desc">Najskuplji prvo</option>
                </select>
            </div>
            <div className="search-content">
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
                        <p>Učitavanje... </p>
                        <div className="spinner">

                        </div>
                    </div>
                ) : (
                    <div className="card-wrapper">
                        {users && users.length > 0 ? (
                            users.map((user, index) => (
                                <Card key={user.id} user={user} />
                            ))
                        ) : (
                            <div className="card-wrapper empty-message">
                                <p>Nema rezultata pretrage.</p>
                            </div>
                        )}

                        {loading2 && (
                            <div className="card-wrapper loading2">
                                <div className="spinner"></div>
                            </div>
                        )}
                    </div>
                )}
            </div>

        </div>

    )
}

export default Search;