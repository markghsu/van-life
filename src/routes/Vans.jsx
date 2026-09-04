import { useEffect, useState } from 'react'
export default function Vans() {
    const [vans, setVans] = useState(null);
    useEffect(() => {
        async function getVanData() {
            try {
                const response = await fetch('/api/vans')
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const data = await response.json();
                setVans(data?.vans)
            }
            catch(err) {
                console.log(err)
            }
        }
        getVanData()
    },[])
    return (<main className="vans">
        <h1>Vans</h1>
        {
            vans && 
                <ul className="vans-list">{
                    vans.map((van) => (
                        <li className="van-item" key={van.id}>
                            <h3 className="van-name">{van.name}</h3>
                            <img className="van-image" alt={van.name} src={van.imageUrl} />
                            <p className="van-description">{van.description}</p>
                            <span>Price: ${van.price}</span>
                            <div className="pill">{van.type}</div>
                        </li>
                ))}
            </ul>
        }
    </main>)
}