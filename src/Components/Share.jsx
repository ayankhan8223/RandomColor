import "./Share.css";
import bookmark from "../assets/bookmark.svg";
const fbRedirect = () => {
  window.open(
    "https://www.facebook.com/sharer/sharer.php?u=https://www.seohorizon.com/rgb-to-hex/",
    "_blank"
  );
};

const twitterRedirect = () => {
  window.open(
    "https://twitter.com/intent/tweet?url=https://www.seohorizon.com/rgb-to-hex/",
    "_black"
  );
};

const linkedinRedirect = () => {
  window.open(
    "https://www.linkedin.com/sharing/share-offsite/?url=https://www.seohorizon.com/rgb-to-hex/",
    "_blank"
  );
};

const Share = () => {
  return (
    <div className="share-container">
      <div className="bookmark">
        <h3>PRESS CTRL / CMD + D TO BOOKMARK</h3>
        <img alt="Bookmark" src={bookmark} />
      </div>

      <div className="sharecontainer-line"></div>

      <div className="share-links">
        <h3>SHARE ON</h3>
        <div className="share-buttons">
          <i
            onClick={fbRedirect}
            style={{ fontSize: "40px" }}
            className="fab fa-facebook-square"
          ></i>
          <i
            onClick={twitterRedirect}
            style={{ fontSize: "40px" }}
            className="fab fa-twitter-square"
          ></i>
          <i
            onClick={linkedinRedirect}
            style={{ fontSize: "40px" }}
            className="fab fa-linkedin"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Share;
