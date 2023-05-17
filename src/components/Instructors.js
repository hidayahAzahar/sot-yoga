import InsImage1 from '../assets/images/ins-1.jpg'
import InsImage2 from '../assets/images/ins-2.jpg'
import InsImage3 from '../assets/images/ins-3.jpg'

const Instructors = () => {
    return <section class="ins container" id="instructors">
    <h3 class="section-title">OUR INSTRUCTORS</h3>
    <div class="row ins-row">
        <div class="col instructor-card">
        <img
          class="instructor-card-image"
          src= {InsImage1}
          alt=""
        />
        <h4 class="card-title">Mia</h4>
        </div>
        <div class="col instructor-card">
        <img
          class="instructor-card-image"
          src= {InsImage2}
          alt=""
        />
        <h4 class="card-title">Ryan</h4>
        </div>
        <div class="col instructor-card">
        <img
          class="instructor-card-image"
          src= {InsImage3}
          alt=""
        />
        <h4 class="card-title">Aimee</h4>
        </div>
      </div>
  </section>
}


export default Instructors;