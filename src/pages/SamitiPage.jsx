import "./SamitiPage.css";
import ganesh from "../assets/profile.jpg";
import vivek from "../assets/vivek.jpeg";
import omkar from "../assets/omkar.jpeg";
import mahesh from "../assets/mahendra.jpeg";
import bardan from "../assets/bardan.jpeg";

const SAMITI_MEMBERS = [
  {
    name: "गणेश आचार्य",
    role: "संस्थापक सदस्य",
    phone: "९८४१०३१७९०",
    image: ganesh,
    initial: "ग",
    highlight: true,
  },
  {
    name: "विवेक आचार्य",
    role: "संस्थापक सदस्य",
    phone: "९८६१६१९५४५",
    image: vivek,
    initial: "वि",
    highlight: true,
  },
  {
    name: "ओमकार आचार्य",
    role: "सदस्य",
    phone: "९८६७७४१४४०",
    image: omkar,
    initial: "ओ",
    highlight: false,
  },
  {
    name: "महेश आचार्य",
    role: "सदस्य",
    phone: "९८४९९५६५४०",
    image: mahesh,
    initial: "म",
    highlight: false,
  },
  {
    name: "बरदान आचार्य",
    role: "सदस्य",
    phone: "९८४९९५७३५०",
    image: bardan,
    initial: "ब",
    highlight: false,
  },
];

function MemberCard({ member }) {
  return (
    <div
      className={`member-card card ${member.highlight ? "member-founder" : ""}`}
    >
      {member.highlight && <div className="founder-ribbon">संस्थापक</div>}
      <div className="member-img-wrap">
        {member.image ? (
          <img src={member.image} alt={member.name} />
        ) : (
          <div className="member-img-placeholder">
            <span className="member-initial">{member.initial}</span>
            <span className="placeholder-label">तस्वीर राख्नुहोस्</span>
          </div>
        )}
      </div>
      <div className="member-info">
        <h3>{member.name}</h3>
        <span
          className={`member-role-badge ${member.highlight ? "badge-founder" : "badge-member"}`}
        >
          {member.role}
        </span>
        <div className="member-phone">
          <span>📞</span>
          <a href={`tel:+977${member.phone}`}>{member.phone}</a>
        </div>
      </div>
    </div>
  );
}

export default function SamitiPage() {
  return (
    <div className="samiti-page">
      {/* Page header */}
      <div className="samiti-page-header">
        <h1>समिति सदस्यहरू</h1>
        <p>
          नेपाली कांग्रेस कुश्मी-गाउँ काठमाडौं सम्पर्क समितिका आदरणीय सदस्यहरू
        </p>
      </div>

      <div className="samiti-container">
        {/* Founders */}
        <div className="member-group">
          <h2 className="section-title">संस्थापक सदस्यहरू</h2>
          <p className="section-subtitle">समितिका मूल स्तम्भहरू</p>
          <div className="members-grid founders-grid">
            {SAMITI_MEMBERS.filter((m) => m.highlight).map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>
        </div>

        {/* Regular members */}
        <div className="member-group">
          <h2 className="section-title">सदस्यहरू</h2>
          <p className="section-subtitle">समितिका सक्रिय सदस्यहरू</p>
          <div className="members-grid">
            {SAMITI_MEMBERS.filter((m) => !m.highlight).map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>
        </div>

        {/* Note about pictures */}
        <div className="picture-note">
          <span>📸</span>
          <p>
            सदस्यहरूको तस्वीर राख्न वेबसाइट व्यवस्थापकलाई सम्पर्क गर्नुहोस्।
            सम्पर्क: ९८४१०३१७९०
          </p>
        </div>
      </div>
    </div>
  );
}
