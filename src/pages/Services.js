import footerImg from '../images/footer.jpg';
import Footer from './helpers/Footer.js';

export default function Services() {
    return (
      <div className="page">
        <div className="top-page-title" style={{
          backgroundImage: `url(${footerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',

        }}>
          <h1>Learn more about our products</h1>
        </div>
        <Footer />
      </div>
    );
  }