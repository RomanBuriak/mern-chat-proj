import IconBlock from "./IconBlock/IconBlock";
import AccountBlockLogBtn from "./AccountBlockLogBtn/AccountBlockLogBtn";
import "./AccountBlock.css";

function AccountBlock() {
  return (
    <div className="account-block">
      <IconBlock />
      <AccountBlockLogBtn />
    </div>
  );
}

export default AccountBlock;
