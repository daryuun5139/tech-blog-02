import "src/styles/components.css";

const Ja_EnButton = () => {
  return (
    <div className="flex flex-row gap-2 text-sm">
      <span className="menu-text-hover">日本語</span>
      <span>|</span>
      <span className="menu-text-hover">English</span>
    </div>
  );
};

export default Ja_EnButton;
