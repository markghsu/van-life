import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router'

export default function Vans() {
    const [loading, setLoading] = useState(true)
    const [errMsg, setErrMsg] = useState('')
    const [vans, setVans] = useState([])
    const [filters, setFilters] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    
    useEffect(() => {
        async function getVanData() {
            try {
                const response = await fetch('/api/vans')
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data)
                setVans(data?.vans.models)
                setFilters(data?.types.models)
                setErrMsg('')
            }
            catch(err) {
                setErrMsg('Error, could not retrieve van data. ' + err.message)
            }
            finally {
                setLoading(false)
            }
        }
        getVanData()
    },[])
    return (<main className="vans">
        <h1>Explore our Van Options</h1>
        {
            loading ? <p>Loading...</p> :
            errMsg ? <p>{errMsg}</p> :
            vans && <>
                <section className="van-filters">
                    {filters.map((f) => (
                        <Link key={f.name} to={`?type=${f.name}`} className="pill" data-type={f.name}>{f.name}</Link>
                    ))}
                </section>
                <ul className="vans-list">{
                        vans.filter((a) => (!typeFilter || a.type == typeFilter)).map((van) => (
                            <li className="van-item" key={van.id}>
                                <Link to={`/vans/${van.id}`} aria-label={`See details about van ${van.name}`}><img className="van-image" alt={van.name} src={van.imageUrl} />
                                <h3 className="van-name">{van.name}</h3>
                                <p>Price: ${van.price}/day</p>
                                <div className="pill" data-type={van.type}>{van.type}</div>
                                </Link>
                            </li>
                    ))}
                </ul>
            </>
        }
    </main>)
}