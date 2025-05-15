import IconBlockImg from "./IconBlockImg/IconBlockImg";
import IconBlockActive from "./IconBlockActive/IconBlockActive";
import "./IconBlock.css";

function IconBlock() {
  return (
    <div className="icon-block">
      <IconBlockImg />
      <IconBlockActive/>
    </div>
  );
}

export default IconBlock;
