import "./IconBlock.css";
import IconBlockImg from "./IconBlockImg/IconBlockImg";
import IconBlockActive from "./IconBlockActive/IconBlockActive";

function IconBlock() {
  return (
    <div className="icon-block">
      <IconBlockImg />
      <IconBlockActive />
    </div>
  );
}

export default IconBlock;
