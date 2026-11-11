import iconeMenu from "../assets/img/icone-menu.png";

function BotaoMenu({ onMenuClick }) {
  return (
    <button
      className="menu-btn"
      onClick={onMenuClick}
    >
      <img src={iconeMenu} alt="Menu" />
    </button>
  );
}

export default BotaoMenu;