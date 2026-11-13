export default function Header({ activePage, setActivePage }) {
  return (
    <header className="site-header">
      <a
        href="#main"
        className="logo-link"
        onClick={(e) => {
          e.preventDefault();
          setActivePage("main");
        }}
      >
        <img src="/images/leaf.png" alt="FoodSaver logo" />
        <span>FoodSaver</span>
      </a>
      <nav>
        <a
          href="#reg"
          className={activePage === "reg" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            setActivePage("reg");
          }}
        >
          Register
        </a>
        <a
          href="#main"
          className={activePage === "main" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            setActivePage("main");
          }}
        >
          Main
        </a>
        <a
          href="#recipes"
          className={activePage === "recipes" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            setActivePage("recipes");
          }}
        >
          Recipes
        </a>
      </nav>
    </header>
  );
}
