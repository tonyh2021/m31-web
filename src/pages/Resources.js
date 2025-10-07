import React, { useState } from "react";
import Article from "./helpers/Article.js";
import footerImg from "../images/footer.jpg";
import Footer from "./helpers/Footer.js";

const research_articles = [
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
    type: "research",
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
    type: "research",
  },
  {
    title: "Towards foundation models of biological image segmentation",
    authors: ["Jun Ma", "Bo Wang"],
    journal: "Nature Methods",
    date: "July 11, 2023",
    link: "https://www.nature.com/articles/s41592-023-01885-0",
    type: "viewpoints",
  },
  {
    title:
      "MedShapeNet – a large-scale dataset of 3D medical shapes for computer vision",
    authors: [
      "Jianning Li",
      "Zongwei Zhou",
      "Jiancheng Yang",
      "Antonio Pepe",
      "Christina Gsaxner",
      "Gijs Luijten",
      "Chongyu Qu",
      "Tiezheng Zhang",
      "Xiaoxi Chen",
      "Wenxuan Li",
      "Marek Wodzinski",
      "Paul Friedrich",
      "Kangxian Xie",
      "Yuan Jin",
      "Narmada Ambigapathy",
      "Enrico Nasca",
      "Naida Solak",
      "Gian Marco Melito",
      "Viet Duc Vu",
      "Afaque R. Memon",
      "Christopher Schlachta",
      "Sandrine De Ribaupierre",
      "Rajnikant Patel",
      "Roy Eagleson",
      "Xiaojun Chen",
      "Heinrich Mächler",
      "Jan Stefan Kirschke",
      "Ezequiel de la Rosa",
      "Patrick Ferdinand Christ",
      "Hongwei Bran Li",
      "David G. Ellis",
      "Michele R. Aizenberg",
      "Sergios Gatidis",
      "Thomas Küstner",
      "Nadya Shusharina",
      "Nicholas Heller",
      "Vincent Andrearczyk",
      "Adrien Depeursinge",
      "Mathieu Hatt",
      "Anjany Sekuboyina",
      "Maximilian T. Löffler",
      "Hans Liebl",
      "Reuben Dorent",
      "Tom Vercauteren",
      "Jonathan Shapey",
      "Aaron Kujawa",
      "Stefan Cornelissen",
      "Patrick Langenhuizen",
      "Achraf Ben-Hamadou",
      "Ahmed Rekik",
      "Sergi Pujades",
      "Edmond Boyer",
      "Federico Bolelli",
      "Costantino Grana",
      "Luca Lumetti",
      "Hamidreza Salehi",
      "Jun Ma",
      "Yao Zhang",
      "Ramtin Gharleghi",
      "Susann Beier",
      "Arcot Sowmya",
      "Eduardo A. Garza-Villarreal",
      "Thania Balducci",
      "Diego Angeles-Valdez",
      "Roberto Souza",
      "Leticia Rittner",
      "Richard Frayne",
      "Yuanfeng Ji",
      "Vincenzo Ferrari",
      "Soumick Chatterjee",
      "Florian Dubost",
      "Stefanie Schreiber",
      "Hendrik Mattern",
      "Oliver Speck",
      "Daniel Haehn",
      "Christoph John",
      "Andreas Nürnberger",
      "João Pedrosa",
      "Carlos Ferreira",
      "Guilherme Aresta",
      "António Cunha",
      "Aurélio Campilho",
      "Yannick Suter",
      "Jose Garcia",
      "Alain Lalande",
      "Vicky Vandenbossche",
      "Aline Van Oevelen",
      "Kate Duquesne",
      "Hamza Mekhzoum",
      "Jef Vandemeulebroucke",
      "Emmanuel Audenaert",
      "Claudia Krebs",
      "Timo van Leeuwen",
      "Evie Vereecke",
      "Hauke Heidemeyer",
      "Rainer Röhrig",
      "Frank Hölzle",
      "Vahid Badeli",
      "Kathrin Krieger",
      "Matthias Gunzer",
      "Jianxu Chen",
      "Timo van Meegdenburg",
      "Amin Dada",
      "Miriam Balzer",
      "Jana Fragemann",
      "Frederic Jonske",
      "Moritz Rempe",
      "Stanislav Malorodov",
      "Fin H. Bahnsen",
      "Constantin Seibold",
      "Alexander Jaus",
      "Zdravko Marinov",
      "Paul F. Jaeger",
      "Rainer Stiefelhagen",
      "Ana Sofia Santos",
      "Mariana Lindo",
      "André Ferreira",
      "Victor Alves",
      "Michael Kamp",
      "Amr Abourayya",
      "Felix Nensa",
      "Fabian Hörst",
      "Alexander Brehmer",
      "Lukas Heine",
      "Yannik Hanusrichter",
      "Martin Weßling",
      "Marcel Dudda",
      "Lars E. Podleska",
      "Matthias A. Fink",
      "Julius Keyl",
      "Konstantinos Tserpes",
      "Moon-Sung Kim",
      "Shireen Elhabian",
      "Hans Lamecker",
      "Dženan Zukić",
      "Beatriz Paniagua",
      "Christian Wachinger",
      "Martin Urschler",
      "Luc Duong",
      "Jakob Wasserthal",
      "Peter F. Hoyer",
      "Oliver Basu",
      "Thomas Maal",
      "Max J. H. Witjes",
      "Gregor Schiele",
      "Ti-chiun Chang",
      "Seyed-Ahmad Ahmadi",
      "Ping Luo",
      "Bjoern Menze",
      "Mauricio Reyes",
      "Thomas M. Deserno",
      "Christos Davatzikos",
      "Behrus Puladi",
      "Pascal Fua",
      "Alan L. Yuille",
      "Jens Kleesiek",
      "Jan Egger",
    ],
    journal: "Biomedical Engineering",
    date: "December 30, 2024",
    link: "https://www.degruyterbrill.com/document/doi/10.1515/bmt-2024-0396/html",
    type: "research",
  },
  {
    title: "MedRAX: Medical Reasoning Agent for Chest X-ray",
    authors: [
      "Adibvafa Fallahpour",
      "Jun Ma",
      "Alif Munim",
      "Hongwei Lyu",
      "Bo Wang",
    ],
    journal: "Arxiv",
    date: "February 4, 2025",
    link: "https://arxiv.org/abs/2502.02673",
    type: "research",
  },
  {
    title: "MedSAM2: Segment Anything in 3D Medical Images and Videos",
    authors: [
      "Jun Ma",
      "Zongxin Yang",
      "Sumin Kim",
      "Bihui Chen",
      "Mohammed Baharoon",
      "Adibvafa Fallahpour",
      "Reza Asakereh",
      "Hongwei Lyu",
      "Bo Wang",
    ],
    journal: "Arxiv",
    date: "April 4, 2025",
    link: "#",
    type: "research",
  },
  {
    title:
      "Generative AI could revolutionize health care — but not if control is ceded to big tech",
    authors: [
      "Augustin Toma",
      "Senthujan Senkaiahliyan",
      "Patrick R. Lawler",
      "Barry Rubin",
      "Bo Wang",
    ],
    journal: "Nature",
    date: "November 30, 2023",
    link: "https://www.nature.com/articles/d41586-023-03803-y",
    type: "viewpoints",
  },
];

const TABS = [
  { key: "all", label: "Latest Releases" },
  { key: "research", label: "Research Articles" },
  { key: "reviews", label: "Reviews" },
  { key: "viewpoints", label: "Viewpoints" },
  { key: "challenges", label: "Challenges" },
];

export default function Resources() {
  const [selectedTab, setSelectedTab] = useState("all");

  let articlesToShow = [];
  if (selectedTab === "all") {
    articlesToShow = research_articles
      .slice()
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  } else {
    articlesToShow = research_articles
      .filter((article) => article.type === selectedTab)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  return (
    <div>
      <div className="element-containter">
        <div
          className="top-page-title"
          style={{
            backgroundImage: `url(${footerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 style={{ color: "white" }}>See what we're working on</h1>
        </div>
        <div className="article-container">
          {research_articles
            .filter((article) => article.type === "preprint")
            .map((article, index) => (
              <Article key={index} article={article} />
            ))}
        </div>
      </div>
      <div className="element-containter">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "2rem",
            justifyContent: "center",
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedTab(tab.key)}
              style={{
                padding: "10px 24px",
                borderRadius: "20px",
                border: "2px solid",
                borderColor:
                  selectedTab === tab.key ? "#3da9fc" : "transparent",
                background: selectedTab === tab.key ? "#3da9fc" : "white",
                color: selectedTab === tab.key ? "white" : "#3da9fc",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow:
                  selectedTab === tab.key
                    ? "0 4px 8px rgba(61, 169, 252, 0.2)"
                    : "none",
                transition: "all 0.2s ease",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="article-container">
          {articlesToShow.length === 0 ? (
            <p>No articles found for this category.</p>
          ) : (
            articlesToShow.map((article, index) => (
              <Article key={index} article={article} />
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
