import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h3>नेपाली कांग्रेस</h3>
          <p>कुश्मी-गाउँ काठमाडौं सम्पर्क समिति</p>
          <p className="footer-motto">
            लोकतन्त्र, समाजवाद र राष्ट्रियताको लागि प्रतिबद्ध
          </p>
        </div>
        <div className="footer-col">
          <h3>सम्पर्क</h3>
          <p>📞 ९८४१०३१७९०</p>
          <p>📍 काठमाडौं</p>
        </div>
        <div className="footer-col">
          <h3>द्रुत लिंक</h3>
          <p>
            🌐{" "}
            <a
              href="https://nepalicongress.org"
              target="_blank"
              rel="noreferrer"
            >
              nepalicongress.org
            </a>
          </p>
          <p>केन्द्रीय कार्यालय, सानेपा, काठमाडौं</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © २०८३ नेपाली कांग्रेस कुश्मी-गाउँ काठमाडौं सम्पर्क समिति। सर्वाधिकार
          सुरक्षित।
        </p>
      </div>
    </footer>
  );
}
