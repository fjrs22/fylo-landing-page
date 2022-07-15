import productiveImg from "../assets/images/illustration-stay-productive.png";
import { BiRightArrowCircle } from "react-icons/bi";
export default function Productive() {
  return (
    <section className="productive">
      <div className="productive-container container">
        <div className="productive-image">
          <img src={productiveImg} alt="productive image" />
        </div>
        <div className="productive-text">
          <h1 className="productive-header">
            Stay productive,
            <br /> wherever you are.
          </h1>
          <p className="productive-description">
            Never let location be ann issue when accessing your files.Fylo has
            you covered for all your file storage needs.
          </p>
          <p className="productive-description">
            Securely share files and folders with friends, family, and
            colleagues for live collaboration. No email attachments required.
          </p>
          <button className="button-see">
            See how Fylo works <BiRightArrowCircle />{" "}
          </button>
        </div>
      </div>
    </section>
  );
}
