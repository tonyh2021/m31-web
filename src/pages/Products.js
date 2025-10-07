import Footer from './helpers/Footer.js';
import footerImg from '../images/footer.jpg';
export default function Products() {
    return (
      <div className="page">
        <div className="top-page-title" style={{
          backgroundImage: `url(${footerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',

        }}>
          <h1>Disrupting Healthcare Delivery with AI</h1>
        </div>
        <Footer />
      </div>
    );
  }