import { useEffect, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router';

export default function Van() {
    const [vanData, setVanData] = useState(null)
    const {id} = useParams()
    const type = useLocation().state?.type
    console.log(useLocation(), type)
    useEffect(() => {
        async function getVanData() {
            try {
                const response = await fetch(`/api/van/${id}`)
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const data = await response.json();
                setVanData(data?.van)
            }
            catch(err) {
                console.log(err)
            }
        }
        getVanData()
    },[])

    return (<main className="van-detail">
            { vanData ?
                <>
                    <h1 className="van-name">{vanData.name}</h1>
                    <img className="van-image" alt={vanData.name} src={vanData.imageUrl} />
                    <div className="pill van-type" data-type={vanData.type}>{vanData.type}</div>
                    <p className="van-price"><strong>${vanData.price}</strong>/day</p>
                    <p className="van-description">{vanData.description}</p>
                    <button className="van-cta button">Rent this van</button>
                </>
            : <h1>Loading...</h1> }
            <Link to={".." + (type?"?type="+type:"")} relative="path" className="back-link">← Back to {type?type:"all"} vans</Link>
        </main>
    )
}