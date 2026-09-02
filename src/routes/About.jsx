import { Link } from 'react-router'

export default function About() {
    return (<main className="about">
    <img className="main-img" src = "https://static.istockphoto.com/site-merchandising/site-media/M1JJA3JCTgKy_evergreen-static-hero-ocean-aerial.jpg" alt="Tent sitting on top of one of the vans" />
      <section className="text-content">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        <section className="cta">
          <strong>Your destination is waiting. <br />
  Your van is ready.</strong>
          <Link to="/vans" className="button">Explore Our Vans</Link>
        </section>
      </section>
    </main>)
}