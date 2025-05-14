function IconBlock() {
  return (
    <div className="icon-block">
      <img
        src="../imgs/profile_img.png"
        loading="lazy"
        className="icon-block-img"
        alt="profile_img"
      />
      <img
        src="../imgs/Check.png"
        className="icon-block-active"
        alt="icon-block-active"
      />
    </div>
  );
}

export default IconBlock;
