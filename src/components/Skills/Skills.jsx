import "./Skills.css";

const Skills = () => {
  return (
    <div className="main">
      <div className="skills-title-part">
        <h1 className="titlee">-My Skills-</h1>
      </div>
      <div className="skills-bar">
        {/* <h2 className="title">My Skills</h2> */}

        <div className="bar">
          <div className="info">
            <span>PHP (Laravel)</span>
          </div>
          <div className="progress-line php">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>Java</span>
          </div>
          <div className="progress-line java">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>HTML & CSS</span>
          </div>
          <div className="progress-line html-css">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>JavaScript (Vue)</span>
          </div>
          <div className="progress-line javaScript">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>C#</span>
          </div>
          <div className="progress-line cSharp">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>Rest API</span>
          </div>
          <div className="progress-line rest">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>SQL</span>
          </div>
          <div className="progress-line sql">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>Shopify</span>
          </div>
          <div className="progress-line shopify">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>Adobe XD</span>
          </div>
          <div className="progress-line adobeXd">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>Adobe Photoshop</span>
          </div>
          <div className="progress-line adobePhoto">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
