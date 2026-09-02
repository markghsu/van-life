import { Link } from 'react-router'

export default function Home() {
    return (
        <main className="hero">
            <h1>You got the travel plans, we got the travel vans</h1>
            <p>Add adventure to your life by joining the #vanline movement</p>
            <Link to="/vans" className="button">Find your van</Link>
        </main>
    )
}