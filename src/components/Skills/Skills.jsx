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
            <span>HTML</span>
          </div>
          <div className="progress-line html">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>CSS</span>
          </div>
          <div className="progress-line css">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>jQuery</span>
          </div>
          <div className="progress-line jquery">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>Python</span>
          </div>
          <div className="progress-line python">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>MySQL</span>
          </div>
          <div className="progress-line mysql">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
