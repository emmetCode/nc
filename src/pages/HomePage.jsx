import HeroSection from "../components/HeroSection";
import SambodhanSection from "../components/SambodhanSection";
import "./HomePage.css";

const QUICK_STATS = [
  { icon: "🏛️", label: "स्थापना", value: "२०८३" },
  { icon: "👥", label: "सदस्य", value: "५+" },
  { icon: "📢", label: "विज्ञप्ति", value: "सक्रिय" },
  { icon: "🗺️", label: "क्षेत्र", value: "काठमाडौं" },
];

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />

      {/* Quick stats bar */}
      <div className="stats-bar">
        {QUICK_STATS.map((s) => (
          <div key={s.label} className="stat-item">
            <span className="stat-icon">{s.icon}</span>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <SambodhanSection />

      {/* About section */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="section-title">समितिको बारेमा</h2>
          <p className="section-subtitle">हाम्रो उद्देश्य र कार्यक्षेत्र</p>
          <div className="about-grid">
            <div className="about-card card">
              <div className="about-card-icon">🎯</div>
              <h3>हाम्रो लक्ष्य</h3>
              <p>
                कुश्मी-गाउँका नेपाली कांग्रेसका शुभेच्छुक र काठमाडौंका पार्टी
                संरचनाबीच प्रभावकारी सञ्चार र समन्वय स्थापना गर्नु यस समितिको
                मुख्य लक्ष्य हो।
              </p>
            </div>
            <div className="about-card card">
              <div className="about-card-icon">🤝</div>
              <h3>हाम्रो कार्य</h3>
              <p>
                पार्टीका कार्यक्रम र नीतिहरू जनस्तरमा पुर्‍याउने, स्थानीय
                समस्याहरू बारे जागरण फैलाउने र समुदायमा पार्टीको उपस्थिति सुदृढ
                पार्ने काम गर्दछौं।
              </p>
            </div>
            <div className="about-card card">
              <div className="about-card-icon">🌟</div>
              <h3>हाम्रो प्रतिबद्धता</h3>
              <p>
                बिपी कोइरालाले देखाएको लोकतन्त्रको बाटोमा हिँड्दै, कुश्मी-गाउँको
                विकास र जनताको कल्याणका निम्ति निरन्तर काम गर्न हामी प्रतिबद्ध
                छौं।
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
