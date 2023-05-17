import HeroImage from '../assets/images/bg-hero.jpg'

const Hero = () => {
    return <section class="hero" style={{backgroundImage: `url(${HeroImage})`}}>
    <h1 class="hero-title">
      THE BEST YOGA CLASSES<br />
      IN THE CITY
    </h1>
  </section>

    
}

export default Hero;