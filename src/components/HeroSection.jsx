import "./HeroSection.css";
import bp from "../assets/bpkoirala.webp";
import gms from "../assets/ganeshmansingh.jpg";
import kpb from "../assets/krishna-prasad-bhattarai.jpeg";
import gpk from "../assets/girija-prasad-koirala.jpeg";
import sk from "../assets/sushil.jpg";
import sbd from "../assets/sherbahadur.jpg";

const FORMER_PRESIDENTS = [
  {
    name: "विश्वेश्वरप्रसाद कोइराला",
    nameEn: "B.P. Koirala",
    years: "१९५९–१९९४",
    title: "प्रथम प्रधानमन्त्री तथा पार्टी अध्यक्ष",
    image: bp,
    fallbackInitial: "बि",
  },
  {
    name: "गणेशमान सिंह",
    nameEn: "Ganesh Man Singh",
    years: "१९९१–१९९३",
    title: "पार्टी अध्यक्ष",
    image: gms,
    fallbackInitial: "ग",
  },
  {
    name: "कृष्णप्रसाद भट्टराई",
    nameEn: "K.P. Bhattarai",
    years: "१९९३–१९९५",
    title: "पार्टी अध्यक्ष",
    image: kpb,
    fallbackInitial: "कृ",
  },
  {
    name: "गिरिजाप्रसाद कोइराला",
    nameEn: "G.P. Koirala",
    years: "१९९५–२०१०",
    title: "पार्टी अध्यक्ष",
    image: gpk,
    fallbackInitial: "गि",
  },
  {
    name: "सुशील कोइराला",
    nameEn: "Sushil Koirala",
    years: "२०१०–२०१६",
    title: "पार्टी सभापति",
    image: sk,
    fallbackInitial: "सु",
  },
  {
    name: "शेरबहादुर देउवा",
    nameEn: "Sher Bahadur Deuba",
    years: "२०१६–२०२३",
    title: "पार्टी सभापति",
    image: sbd,
    fallbackInitial: "शे",
  },
];

function PresidentCard({ president, index }) {
  return (
    <div
      className="president-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="president-img-wrap">
        {president.image ? (
          <img
            src={president.image}
            alt={president.name}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        ) : null}
        <div
          className="president-fallback"
          style={{ display: president.image ? "none" : "flex" }}
        >
          {president.fallbackInitial}
        </div>
      </div>
      <div className="president-info">
        <h4>{president.name}</h4>
        {/* <span className="president-years">{president.years}</span> */}
        {/* <p className="president-title-label">{president.title}</p> */}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background pattern */}
      <div className="hero-bg-pattern" />

      <div className="hero-content">
        <div className="hero-badge">
          <span>🇳🇵</span> नेपाली कांग्रेस कुश्मी-गाउँ काठमाडौं सम्पर्क समिति
        </div>
        <h1 className="hero-title">
          <span className="hero-title-line1">लोकतन्त्रको</span>
          <span className="hero-title-line2">सशक्त आवाज</span>
        </h1>
        <p className="hero-tagline">
          कुश्मी-गाउँ र काठमाडौंका नेपाली कांग्रेस शुभेच्छुकहरूको बीचमा पुल
          बनाउँदै
        </p>
      </div>

      {/* Former Presidents Section */}
      <div className="former-presidents-section">
        <div className="fp-header">
          <div className="fp-line" />
          <h2>राष्ट्रियता लोकतन्त्र समाजवाद</h2>
          <div className="fp-line" />
        </div>
        <p className="fp-sub">
          हाम्रा महान् नेताहरूको सपना र संघर्षबाट प्रेरित भएर अगाडि बढ्दैछौं
        </p>
        <div className="presidents-grid">
          {FORMER_PRESIDENTS.map((p, i) => (
            <PresidentCard key={p.nameEn} president={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
