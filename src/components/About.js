import AboutImage from '../assets/images/about.jpg';

const About = () => {
    return  <section class="about container" id="about">
    <div class="about-wrapper">
      <img class="about-image" src={AboutImage} alt="" />
      <div class="about-data">
        <h3 class="about-title">About Us</h3>
        <p class="about-description">
        Here we are dedicated to helping individuals achieve balance, strength, and 
        peace of mind through the practice of yoga. Our aim is to provide high-quality yoga courses and 
        resources that cater to students of all levels, from beginners to experienced practitioners.
        <br />         <br /> 

        Our team of experienced and certified yoga instructors is passionate about sharing 
        the transformative power of yoga with our students. We believe that yoga is not 
        just a physical exercise, but a holistic practice that nurtures the body, mind, and spirit. 
        Through our courses, we guide students on a journey of self-discovery, mindfulness, and personal growth.
        <br />         <br /> 

        Our yoga courses are thoughtfully designed to cater to the specific needs and goals of our students. We offer a variety of classes, 
        including Hot Core, Hot Detox Flow, Vinyasa and many more. Each class is carefully crafted to incorporate breath work, meditation, 
        and proper alignment, ensuring a well-rounded and fulfilling experience.
        </p>
      </div>
    </div>
  </section>
}

export default About;