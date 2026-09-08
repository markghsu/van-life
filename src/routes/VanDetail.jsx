import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router';

export default function Van() {
    const [vanData, setVanData] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        async function getVanData() {
            try {
                const response = await fetch(`/api/van/${id}`)
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data.van)
                setVanData(data?.van)
            }
            catch(err) {
                console.log(err)
            }
        }
        getVanData()
    },[])
    console.log(vanData)
    return (<main className="van-detail">
        { vanData ?
            <>
                <h1 className="van-detail-name">{vanData.name}</h1>
                <img className="van-image" alt={vanData.name} src={vanData.imageUrl} />
                <p>Price: ${vanData.price}/day</p>
                <p>{vanData.description}</p>
                <div className="pill" data-type={vanData.type}>{vanData.type}</div>
                <Link to="/vans">Back to all vans</Link>
            </>
        : <h1>Loading...</h1> }
        </main>
    )
}