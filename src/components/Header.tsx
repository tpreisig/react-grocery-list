const Header = ({ title }: { title: string }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Grocery List",
};

export default Header;
