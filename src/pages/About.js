import "./About.css";
import Footer from "./helpers/Footer.js";
import brain from "../images/brain_graphic.png";
import ai from "../images/AI_graphic.png";
import computer from "../images/computer.png";
import footerImg from "../images/footer.jpg";

export default function About() {
  return (
    <div className="page">
      <div
        className="top-page-title"
        style={{
          backgroundImage: `url(${footerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 style={{ color: "white" }}>About us</h1>
      </div>
      <div className="about-content">
        <div className="about-description">
          <div className="about-image">
            <img
              src={brain}
              alt="Brain Logo"
              style={{ width: "600px", height: "auto" }}
            />
          </div>
          <div className="about-text">
            <h2>Pioneering Innovations in Bioimaging</h2>
            <p>
              M31 Biomedical AI is a non-profit research organization with a
              for-profit subsidiary, advancing the future of biomedical imaging
              through artificial intelligence. We collaborate with healthcare
              systems, research institutions, and pharmaceutical companies to
              develop AI-driven tools that accelerate imaging analysis, enhance
              clinical research, and deepen disease understanding.
            </p>

            <p>
              At the intersection of AI and imaging science, our
              interdisciplinary team transforms complex biological data into
              clear, actionable insights. We design solutions that empower
              researchers and clinicians with greater diagnostic precision and
              more effective treatment strategies. Through ongoing innovation
              and integration of next-generation methodologies, we aim to
              illuminate human biology—unlocking discoveries that drive better
              outcomes in healthcare.
            </p>
          </div>
        </div>
        <div className="about-description">
          <div className="about-text">
            <h2>Accelerating Breakthroughs in Human Health</h2>
            <p>
              Our mission is to drive progress in human health by leveraging
              AI-powered imaging technologies. By streamlining the analysis of
              biological systems, we help scientists and clinicians detect
              patterns earlier, enabling faster, more personalized
              interventions.
            </p>
            <p>
              Committed to bridging the gap between research and application, we
              focus on developing scalable, real-world solutions that improve
              care delivery and patient quality of life. Strategic
              collaborations and relentless innovation allow us to translate
              scientific insights into measurable health impact—faster and more
              effectively.
            </p>
          </div>
          <div className="about-image">
            {" "}
            <img
              src={ai}
              alt="Brain Logo"
              style={{ width: "400px", height: "auto" }}
            />{" "}
          </div>
        </div>
        <div className="about-description">
          <div className="about-image">
            {" "}
            <img
              src={computer}
              alt="Brain Logo"
              style={{ width: "400px", height: "auto" }}
            />
          </div>
          <div className="about-text">
            <h2>Comprehensive Solutions for Biomedical Research</h2>
            <p>
              M31 Biomedical AI delivers a complete suite of services to support
              the full spectrum of biomedical research. From data acquisition to
              advanced analysis, our integrated platforms equip researchers with
              powerful, user-friendly tools for in-depth investigation.
            </p>
            <p>
              Built for adaptability, our systems evolve alongside scientific
              advancements and are tailored to diverse research needs. By
              providing reliable, end-to-end support, we enable our partners to
              focus on discovery with confidence in the integrity and precision
              of their results.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
