import "./Services.css";
import Back from "../../Images/back-end.jpg";
import Design from "../../Images/ui-design.jpg";
import Android from "../../Images/android-developer.jpg";

const Services = () => {
  return (
    <div className="all">
      <div className="title-part">
        <h1 className="title">What can I do for you?</h1>
      </div>
      <div className="container">
        <div className="card">
          <div className="heading">
            <h1>Web Development</h1>
          </div>
          {/* <div className="icon"></div> */}
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio
              ex reiciendis cum deserunt fugiat animi, esse consequuntur,
              obcaecati maxime ipsa?
            </p>
          </div>

          {/* <div className="content"></div> */}
        </div>
        <div className="card">
          <div className="heading">
            <h1>UX/UI Design</h1>
          </div>
          {/* <div className="icon"></div> */}
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio
              ex reiciendis cum deserunt fugiat animi, esse consequuntur,
              obcaecati maxime ipsa?
            </p>
          </div>

          {/* <div className="content"></div> */}
        </div>
        <div className="card">
          <div className="heading">
            <h1>Android Development</h1>
          </div>
          {/* <div className="icon"></div> */}
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio
              ex reiciendis cum deserunt fugiat animi, esse consequuntur,
              obcaecati maxime ipsa?
            </p>
          </div>

          {/* <div className="content"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
