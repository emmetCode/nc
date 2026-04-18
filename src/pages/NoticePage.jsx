import { useState } from "react";
import "./NoticePage.css";

const INITIAL_NOTICES = [
  {
    id: 1,
    title: "समितिको प्रथम बैठक सम्पन्न",
    type: "सूचना",
    date: "०५ बैशाख २०८३",
    content:
      "नेपाली कांग्रेस कुश्मी-गाउँ काठमाडौं सम्पर्क समितिको प्रथम बैठक सफलतापूर्वक सम्पन्न भएको छ। बैठकमा समितिको कार्यदिशा, योजना र भविष्यका कार्यक्रमहरूबारे छलफल भयो।",
    important: true,
  },
  {
    id: 2,
    title: "स्वागत सन्देश",
    type: "सूचना",
    date: "०५ बैशाख २०८३",
    content:
      "नेपाली कांग्रेस कुश्मी-गाउँ काठमाडौं सम्पर्क समितिको आधिकारिक वेबसाइटमा सबैलाई हार्दिक स्वागत छ। यस मञ्चमार्फत हामी पार्टीका गतिविधि, सूचना र विज्ञप्तिहरू प्रकाशित गर्नेछौं।",
    important: false,
  },
  {
    id: 3,
    title: "संपूर्णलाई आह्वान",
    type: "आह्वान",
    date: "०५ बैशाख २०८३",
    content:
      "नेपाली कांग्रेस सम्बन्धी अदालतले दिएको फैसलाले पार्टीभित्रको धारलाई स्पष्टता दिँदै गगन थापा लगायतको नेतृत्वप्रति विश्वासको आधार थप मजबुत बनाएको छ। यस परिप्रेक्ष्यमा विशेष महाधिवेशनबाट निर्वाचित पार्टी सभापतिलाई पूर्ण रूपमा स्वीकार गर्नु आजको आवश्यकता हो। आन्तरिक मतभेदलाई संवाद र सहमतिमार्फत समाधान गर्दै संगठनलाई एकताबद्ध बनाउनु समयको माग हो। त्यसैले सबै नेता तथा कार्यकर्ताले व्यक्तिगत धारभन्दा माथि उठेर पार्टीको एकता, सुदृढीकरण र जनविश्वास पुनःस्थापनाका लागि हातेमालो गर्दै अघि बढ्न आवश्यक छ।",
    important: true,
  },
];

export default function NoticePage() {
  const [notices, setNotices] = useState(INITIAL_NOTICES);
  const [expandedId, setExpandedId] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("के तपाईं यो सूचना मेट्न चाहनुहुन्छ?")) {
      setNotices(notices.filter((n) => n.id !== id));
    }
  };

  return (
    <div className="notice-page">
      <div className="notice-page-header">
        <h1>सूचना तथा विज्ञप्ति</h1>
        <p>
          नेपाली कांग्रेस कुश्मी-गाउँ काठमाडौं सम्पर्क समितिका आधिकारिक सूचनाहरू
        </p>
      </div>

      <div className="notice-container">
        {/* Notices list */}
        {notices.length === 0 ? (
          <div className="no-notices">
            <span>📋</span>
            <p>अहिले कुनै सूचना छैन।</p>
          </div>
        ) : (
          <div className="notices-list">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className={`notice-card card ${notice.important ? "notice-important" : ""}`}
              >
                <div className="notice-card-top">
                  <div className="notice-meta">
                    <span className={`notice-type-badge type-${notice.type}`}>
                      {notice.type}
                    </span>
                    {notice.important && (
                      <span className="important-badge">⚠️ महत्त्वपूर्ण</span>
                    )}
                    <span className="notice-date">📅 {notice.date}</span>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(notice.id)}
                    title="मेट्नुहोस्"
                  >
                    🗑️
                  </button>
                </div>
                <h3 className="notice-title">{notice.title}</h3>
                <p
                  className={`notice-content ${expandedId === notice.id ? "expanded" : ""}`}
                >
                  {notice.content}
                </p>
                {notice.content.length > 180 && (
                  <button
                    className="read-more-btn"
                    onClick={() =>
                      setExpandedId(expandedId === notice.id ? null : notice.id)
                    }
                  >
                    {expandedId === notice.id
                      ? "कम हेर्नुहोस् ▲"
                      : "थप हेर्नुहोस् ▼"}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
