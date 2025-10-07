import './Contact.css';
import Footer from './helpers/Footer.js';
import footerImg from '../images/footer.jpg';


export default function Contact() {
    return (
      <div>


        <div className="top-page-title" style={{
        backgroundImage: `url(${footerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
        }}>
          <h1 style={{ color: 'white', }} >Contact us</h1>
        </div>
        <div className="contact-form">
          <div className="contact-form-content">
          <p>Please fill out the form below with as many details as you can provide and we will respond shortly. We look forward to working with you!</p>

          <form className="form-grid" action="your-server-side-script" method="post">
            <div className="form-row">
              <div>
                <label htmlFor="firstName">
                  First name:<span className="required-asterisk">*</span>
                </label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div>
                <label htmlFor="lastName">Last name:
                  <span className="required-asterisk">*</span>
                </label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>

            <div className="form-row">
              <div>
                <label htmlFor="institution">
                  Institution:<span className="required-asterisk">*</span>
                </label>
                <input type="text" id="institution" name="institution" required />
              </div>
              <div>
                <label htmlFor="lab">Lab or core:</label>
                <input type="text" id="lab" name="lab" />
              </div>
            </div>

            <div className="form-row">
              <div>
                <label htmlFor="email">Email:
                  <span className="required-asterisk">*</span>
                </label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="phone">Phone number:</label>
                <input type="tel" id="phone" name="phone" />
              </div>
            </div>


            <div className="form-single">
              <label htmlFor="comments">Additional Comments:</label>
              <textarea id="comments" name="comments" rows="5" />
            </div>


            <div className="form-single checkbox-row">
              <input type="checkbox" id="newsletter" name="newsletter" />
              <label htmlFor="newsletter">Would you like to subscribe to our newsletter?</label>
            </div>

            <button type="submit" className="submit-btn">Get in touch</button>
          </form>
          
        </div>
        
      </div>
      <Footer />
      </div>
    );
  }