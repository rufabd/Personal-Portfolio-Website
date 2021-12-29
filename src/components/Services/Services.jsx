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
              Having a website is essentially important for any type of
              business, nowadays. I will design and develop your simple-mid
              websites and web applications in a modern and stylish way. I use
              PHP (Laravel framework) and MySQL as the back-end tools, design
              the APIs according to rest principles and use Vue (JavaScript
              framework) for front-end stuff.
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
              Design of the products (software, applications) is as important as
              the functionalities of the product. When the presentation (design)
              of the product is provided in a bad way to the customers, it loses
              its all importance for the customer. I offer you a design for your
              product that will attract your customers from the first sight.
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
              Use of mobile applications is getting more popular day by day and
              it is the most appropriate way to serve your users. I offer design
              and development of your android mobile applications with Java and
              local databases like SQLite and Room.
            </p>
          </div>

          {/* <div className="content"></div> */}
        </div>
        <div className="card">
          <div className="heading">
            <h1>Product Idea Improvement</h1>
          </div>
          {/* <div className="icon"></div> */}
          <div className="content">
            <p>
              A few years ago, I started to generate new or improve the existing
              ideas related to my field (technology, applications, innovative
              startups) and started to list all of them which I still add my
              ideas there and when I share it with someone I generally get very
              positive feedbacks. So, I like to discuss different ideas and add
              my creativity for the improvement of them.
            </p>
          </div>

          {/* <div className="content"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
