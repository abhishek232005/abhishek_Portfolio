import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> 1 years experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer</h4>
                <h5>Freelance / Personal Project</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
               Developed full-stack web applications using React.js,
              Node.js, Express.js, and MongoDB. Built authentication
              systems, REST APIs, admin dashboards, and responsive UI.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SEO Specialist</h4>
                <h5>SEO & Digital Marketing Projects</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
               Worked on On-Page SEO, Off-Page SEO, keyword research,
              meta tags optimization, backlinks, and website performance
              improvement using Google Search Console and Analytics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>React.js Projec</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Created responsive user interfaces using React.js and
              Tailwind CSS. Developed portfolio websites, eCommerce UI,
              and modern frontend components with clean design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
