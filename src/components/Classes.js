import ClassesImage1 from '../assets/images/hot-core.png'
import ClassesImage2 from '../assets/images/tree.png'
import ClassesImage3 from '../assets/images/yoga.png'


const Classes = () => {
    return <section class="classes container" id="classes">
    <h3 class="section-title">YOGA CLASSES</h3>
    <span class="section-subtitle">build your best body</span>
    <div class="row program-row">
      <div class="col program-card">
        <img
          class="program-card-image"
          src={ClassesImage1}
          alt=""
        />
        <h4 class="card-title">Hot Core</h4>
        <p class="card-description">
        Hot Core is a 60 minute class focusing on awakening up and bringing life to the core via abdominal and balancing postures 
        strengthening the connection between upper and lower body. Develop core strength through dynamic movements. 
        Expect to sweat a lot and in exchange for improved strength, stamina and balance of body and mind.
        </p>
      </div>
      <div class="col program-card">
        <img
          class="program-card-image"
          src={ClassesImage2}
          alt=""
        />
        <h4 class="card-title">Hot Detox Flow</h4>
        <p class="card-description">
        Hot Detox Flow takes practitioners through a dynamic 60 minutes of movement, cleansing through breath and movement when you flow from one pose to another with emphasis on the digestive system. A flowing sequence incorporating twisting in standing, 
        seated and supine poses meant to free up mobility in the spine and detoxify the internal organs feeling fresh from within.
        </p>
      </div>

      <div class="col program-card">
        <img
          class="program-card-image"
          src={ClassesImage3}
          alt=""
        />
        <h4 class="card-title">Hot Vinyasa</h4>
        <p class="card-description">
        Hot Vinyasa takes practitioners through a dynamic 60 minutes of movement synchronised with breath. Rhythmic transitions in and out of 
        creatively conceived pose combinations add a cardiovascular workout to the practice, challenging you to play with your edge without hurting yourself.
        </p>

      </div>

    </div>
    <a href="#" class="classes-btn">Join Now</a>
  </section>

}

export default Classes;