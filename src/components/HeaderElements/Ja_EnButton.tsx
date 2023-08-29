import "src/styles/components.css";

const Ja_EnButton = () => {
  return (
    <>
      <div className="hidden flex-row gap-2 text-sm sm:block">
        <span className="menu-text-hover">日本語</span>
        <span> | </span>
        <span className="menu-text-hover">English</span>
      </div>
      <div className="flex flex-row gap-1 text-sm sm:hidden">
        <span className="menu-text-hover">Ja</span>
        <span>/</span>
        <span className="menu-text-hover">En</span>
      </div>
    </>
  );
};

export default Ja_EnButton;
