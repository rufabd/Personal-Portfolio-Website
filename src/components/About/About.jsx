import "./about.css";
import Award from "../../Images/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.unsplash.com/photo-1638482856830-16b0e15fcf2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&w=1000&q=80"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I built my life on one idea: Today’s dreams are future’s realities
          when you work hard enough.
        </p>
        <p className="a-desc">
          Hello, I am Rufat Abdullayev – 20 years old and final year bachelor
          student in faculty of Informatics at Kaunas University of Technology.
        </p>
        <br />
        <p className="a-desc">
          I love developing softwares, especially the feeling that I have when I
          see the result of coding for hours and days. I feel so lucky that I
          live in such an innovative and technologic century.
        </p>
        <br />
        <p className="a-desc">
          It is not my purpose of life to have a stable job that I will work
          till my 60s. It is not my lifestyle. I love to develop, make
          innovative the atmospheres that I am in and work with people who are
          excited about their job. I don’t like to do the job for financial
          interests, I do something good and it makes me money. I like when the
          things I do are beneficial to the company, people and humanity.
        </p>
        <br />
        <p className="a-desc">
          My main purpose for next 5-6 years is to reach a level that I will be
          able to absolutely cover my financial needs and focus on realizing my
          biggest dreams that will never end. I don’t see myself as only
          developer, but also investor, writer, CEO, businessman and so on. And
          of course, I am not only beneficial as a programmer in the atmosphere
          that I am, but also as the person in the fields that I have mentioned
          before.
        </p>
        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
