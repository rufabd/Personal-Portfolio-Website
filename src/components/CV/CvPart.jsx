import "./CvPart.css";
import CVFile from "../../FileCv/Rufat_Abdullayev_CV.pdf";

const CvPart = () => {
  return (
    <div className="container">
      <div className="heading-part">
        <h1 className="heading">Download My CV for more Information</h1>
      </div>
      <div className="button-part">
        <form>
          <a href={CVFile} download="">
            <input type="button" value="Download" />
          </a>
        </form>
      </div>
    </div>
  );
};

export default CvPart;
