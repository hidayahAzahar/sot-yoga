const Footer = () => {
    return   <footer class="footer">
    <div class="container footer-container">
      <div class="footer-row">
        <div class="footer-identity">
          <a href="#home" class="nav-logo">Urban Spring Yoga</a>
          <p class="footer-description">
          We invite you to explore our course offerings, read testimonials from our students, and join our vibrant yoga community. 
          Whether you are seeking physical fitness, stress relief, or a deeper connection with yourself, we are here to guide and support you on your yoga path.
          </p>
        </div>
        <div class="footer-feature">
          <div class="col footer-feature-1">
            <h4 class="footer-feature-title">About</h4>
            <ul class="footer-feature-list">
              <li>
                <a href="#about">About Us</a>
              </li>
            </ul>
          </div>
          <div class="col">
            <h4 class="footer-feature-title">Classes</h4>
            <ul class="footer-feature-list">
              <li>
                <a href="#class-one">Hot Core</a>
              </li>
              <li>
                <a href="#class-two">Hot Detox Flow</a>
              </li>
              <li>
                <a href="#class-three">Hot Vinyasa</a>
              </li>
            </ul>
          </div>
         
          <div class="col">
            <h4 class="footer-feature-title">Contact Us</h4>
            <ul class="footer-feature-list">
              <li>
                <a href="#gmail"
                  ><i class="ri-mail-line"></i> info@urbanspring-yoga.com</a
                >
              </li>
              <li>
                <a href="#address"
                  ><i class="ri-map-pin-line"></i> 64 Prinsep St, #02-01, Singapore 188667</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        All rights reserved, &copy; 2022 SoT Pod 2
      </div>
    </div>
  </footer>
}

export default Footer;