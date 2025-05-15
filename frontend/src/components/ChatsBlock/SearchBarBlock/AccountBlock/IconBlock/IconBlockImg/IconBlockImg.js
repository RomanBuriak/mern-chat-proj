import "./IconBlockImg.css";
import Profile_img from "../../../../../../imgs/profile_img.png";

function IconBlockImg() {
  return (
    <img
      src={Profile_img}
      loading="lazy"
      className="icon-block-img"
      alt="profile_img"
    />
  );
}

export default IconBlockImg;
