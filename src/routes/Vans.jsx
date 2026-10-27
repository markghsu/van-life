import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { clsx } from 'clsx'

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

    function selectFilter(key, value) {
        setSearchParams((prev) => {
            const params = new URLSearchParams(prev)
            if(value === null) {
                params.delete(key)
            } else {
                params.set(key, value)
            }
            return params
        })
    }
    return (<main className="vans">
        <h1>Explore our Van Options</h1>
        {
            loading ? <p>Loading...</p> :
            errMsg ? <p>{errMsg}</p> :
            vans && <>
                <section className="van-filters">
                    {filters.map((f) => (
                        <button key={f.name} className={clsx({ pill: true,selected: typeFilter === f.name})} onClick={() => selectFilter("type",f.name)} data-type={f.name}>{f.name}</button>
                    ))}
                    <button onClick={() => selectFilter("type",null)} className="clear-btn">clear all</button>
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