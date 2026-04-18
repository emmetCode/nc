import "./SambodhanSection.css";
import gagan from "../assets/gaganthp11.png";

export default function SambodhanSection() {
  return (
    <section className="sambodhan-section">
      <div className="sambodhan-container">
        <div className="sambodhan-image-col">
          <div className="sambodhan-img-frame">
            <img
              src={gagan}
              alt="गगन थापा"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="sambodhan-img-fallback" style={{ display: "none" }}>
              <span>ग</span>
            </div>
          </div>
          <div className="sambodhan-person-info">
            <h3>गगन कुमार थापा</h3>
            <p>सभापति, नेपाली कांग्रेस</p>
            <div className="sambodhan-badge">सभापतिको सन्देश</div>
          </div>
        </div>

        <div className="sambodhan-text-col">
          <div className="sambodhan-quote-mark">"</div>
          <h2 className="sambodhan-heading">आदरणीय साथी तथा शुभेच्छुकहरू,</h2>
          <div className="sambodhan-body">
            <p>
              नेपाली कांग्रेस — जुन दलले यस देशमा लोकतन्त्रको बीउ रोप्यो, जुन
              दलले नेपाली जनताको मुक्तिका निम्ति अनगिन्ती संघर्ष गर्‍यो — त्यो
              दलका रूपमा हामी आज पनि जनताको सेवामा प्रतिबद्ध छौं।
            </p>
            <p>
              बदल्यौ कांग्रेस बदल्छौ देश यही संकल्पका साथ नयाँ यात्रा प्रारम्भ
              गर्दैछौ हामी । हाम्रो केवल एक ध्येय छ— देशको समुन्नति ।
            </p>
            <p className="sambodhan-closing">जय नेपाल! जय लोकतन्त्र!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
