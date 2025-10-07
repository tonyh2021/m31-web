import "./Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Article from "./helpers/Article.js";
import TeamSection from "./helpers/TeamSection.js";
import NewsletterForm from "./helpers/NewsletterForm.js";
import Footer from "./helpers/Footer.js";
import mainfig from "../images/mainfig.png";
import headshot1 from "../images/headshot_bowang.png";

import servicedeploy from "../images/deployment.png";
import servicesegmentation from "../images/model.png";
import serviceresearch from "../images/annotation_pipeline.png";

import backgroundvid from "../images/CTLesion-annotation-examples.mp4";

import { LuBrainCog } from "react-icons/lu";

import { GrDeploy } from "react-icons/gr";

import { GiArchiveResearch } from "react-icons/gi";

const teamMembers = [
  {
    name: "Bo Wang",
    role: "Founder & CEO",
    description: ["CIFAR AI Chair", "Canada Research Chair"],
    imgSrc: headshot1,
    twitter: "https://x.com/BoWang87",
    linkedin: "https://www.linkedin.com/in/bo-wang-a6065240/",
    googlescholar:
      "https://scholar.google.ca/citations?user=37FDILIAAAAJ&hl=en",
  },
  // {
  //   name: 'Jun Ma',
  //   role: 'Co-Founder & CTO',
  //   description: ['AI Scientist'],
  //   imgSrc: headshot2,
  //   twitter: 'https://x.com/JunMa_11',
  //   linkedin: 'https://www.linkedin.com/in/jun-ma-867b34224/',
  //   googlescholar: 'https://scholar.google.com.hk/citations?user=bW1UV4IAAAAJ&hl=en'
  // }
];
const articles = [
  {
    title: "Segment anything in medical images",
    authors: [
      "Jun Ma",
      "Yuting He",
      "Feifei Li",
      "Lin Han",
      "Chenyu You",
      "Bo Wang",
    ],
    journal: "Nature Communication",
    date: "January 22, 2024",
    link: "https://www.nature.com/articles/s41467-024-44824-z",
  },
  {
    title:
      "The multimodality cell segmentation challenge: toward universal solutions",
    authors: [
      "Jun Ma",
      "Ronald Xie",
      "Shamini Ayyadhury",
      "Cheng Ge",
      "Anubha Gupta",
      "Ritu Gupta",
      "Song Gu",
      "Yao Zhang",
      "Gihun Lee",
      "Joonkee Kim",
      "Wei Lou",
      "Haofeng Li",
      "Eric Upschulte",
      "Timo Dickscheid",
      "José Guilherme de Almeida",
      "Yixin Wang",
      "Lin Han",
      "Xin Yang",
      "Marco Labagnara",
      "Vojislav Gligorovski",
      "Maxime Scheder",
      "Sahand Jamal Rahi",
      "Carly Kempster",
      "Alice Pollitt",
      "Leon Espinosa",
      "Tâm Mignot",
      "Jan Moritz Middeke",
      "Jan-Niklas Eckardt",
      "Wangkai Li",
      "Zhaoyang Li",
      "Xiaochen Cai",
      "Bizhe Bai",
      "Noah F. Greenwald",
      "David Van Valen",
      "Erin Weisbart",
      "Beth A. Cimini",
      "Trevor Cheung",
      "Oscar Brück",
      "Gary D. Bader",
      "Bo Wang",
    ],
    journal: "Nature Methods",
    date: "March 26, 2024",
    link: "https://www.nature.com/articles/s41592-024-02233-6",
  },
  {
    title: "Towards foundation models of biological image segmentation",
    authors: ["Jun Ma", "Bo Wang"],
    journal: "Nature Methods",
    date: "July 11, 2023",
    link: "https://www.nature.com/articles/s41592-023-01885-0",
  },
];

const serviceDetails = {
  segmentation: {
    img: servicesegmentation,
    text: "Scalable AI-powered tools for fast, accurate segmentation across diverse medical imaging modalities—ideal for both early-stage and large-scale research.",
  },
  deployment: {
    img: servicedeploy,
    text: "Integrate advanced imaging foundation models into clinical workflows with full support from selection to deployment.",
  },
  research: {
    img: serviceresearch,
    text: "Partner with us to co-develop AI-driven research, secure funding, and translate clinical challenges into real-world impact.",
  },
};

export default function Home() {
  const navigate = useNavigate(); // Add this

  const handleViewPublications = () => {
    navigate("/Resources");
  };

  const handleViewProducts = () => {
    navigate("/Products");
  };

  const handleViewServices = () => {
    navigate("/Services");
  };

  // handle main fig when clicked

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  // handle services
  const [activeService, setActiveService] = useState(null);

  const openServicePopup = (serviceKey) => {
    setActiveService(serviceKey);
  };

  const closeServicePopup = () => {
    setActiveService(null);
  };

  return (
    <div>
      <div className="front">
        <div className="video-wrapper">
          <video autoPlay loop muted>
            <source src={backgroundvid} />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="front-text">
          <h1>
            The Future of AI
            <br />
            Biomedical Imaging
          </h1>
          <p>
            M31 is a non-profit research organization, pioneering advancements
            in biomedical imaging through cutting-edge AI.
          </p>
        </div>
      </div>
      <div className="element-containter">
        <div className="description-photo-containter">
          <div className="description-containter">
            <h1>
              AI-powered, research-focused & patient-centered solutions to
              medical imaging analysis.
            </h1>
            <p>
              At M31 Biomedical AI, we combine scientific excellence with
              real-world impact to transform the future of medical imaging. Our
              expertise spans neurodegenerative disease research, custom AI
              model development, and radiology workflow enhancement—powered by
              cutting-edge foundation models. In collaboration with hospitals,
              universities, and pharmaceutical companies, we develop scalable,
              task-specific tools that power discovery, enhance diagnostics, and
              improve patient outcomes.{" "}
              <b>
                Every solution is designed with both scientific depth and
                operational practicality, tailored to meet the unique needs of
                our partners.
              </b>
            </p>
            <button onClick={handleViewProducts}>
              Learn more about our products
            </button>
          </div>
          <div className="photo-container" onClick={openLightbox}>
            <img src={mainfig} alt="Main Figure" className="thumbnail-image" />
          </div>
          {isLightboxOpen && (
            <div className="lightbox-overlay" onClick={closeLightbox}>
              <img
                src={mainfig}
                alt="Enlarged Main Figure"
                className="lightbox-image"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </div>
      </div>
      <div className="element-containter">
        <h1>Our services</h1>
        <div className="services-containter">
          <div className="icon-text-container">
            <div
              className="icon-text"
              onClick={() => openServicePopup("segmentation")}
            >
              <LuBrainCog className="service-icon" />
              <h2>Medical Image Segmentation</h2>
            </div>
            <div
              className="icon-text"
              onClick={() => openServicePopup("deployment")}
            >
              <GrDeploy className="service-icon" />
              <h2>Foundation Model Deployment</h2>
            </div>
            <div
              className="icon-text"
              onClick={() => openServicePopup("research")}
            >
              <GiArchiveResearch className="service-icon" />
              <h2>Research Collaboration</h2>
            </div>
          </div>
          {activeService && (
            <div className="popup-overlay" onClick={closeServicePopup}>
              <div className="popup-box" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={closeServicePopup}>
                  ×
                </button>
                <img
                  src={serviceDetails[activeService].img}
                  alt={activeService}
                  className="popup-image"
                />
                <p className="popup-text">
                  {serviceDetails[activeService].text}
                </p>
              </div>
            </div>
          )}
          <button onClick={handleViewServices}>
            Learn more about our services
          </button>
        </div>
      </div>

      <div className="element-containter">
        <h1>Highlighted articles</h1>
        <div className="article-container">
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
          <button onClick={handleViewPublications}>
            View our latest publications
          </button>
        </div>
      </div>
      <div className="element-containter">
        <h1>Meet our scientists</h1>
        <TeamSection members={teamMembers} />
      </div>
      <div className="element-containter">
        <NewsletterForm />
      </div>
      <Footer />
    </div>
  );
}
