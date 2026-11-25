import Logo from "./Logo.png";

export default function Header() {
  return (
    <div className="header-wrapper">
      <header className="header">
        <img src={Logo} alt="Logo" className="header-logo" />
        <h1 className="header-title">Mani is here!</h1>
      </header>
    </div>
  );
}