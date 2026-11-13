export default function Header({ activeTab, setActiveTab }) {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/leaf.png" alt="FoodSaver" width="32" />
        <span>FoodSaver</span>
      </div>
      <nav className="nav">
        <button
          className={activeTab === "recipes" ? "active" : ""}
          onClick={() => setActiveTab("recipes")}
        >
          Recipes
        </button>
        <button
          className={activeTab === "tips" ? "active" : ""}
          onClick={() => setActiveTab("tips")}
        >
          Storage Tips
        </button>
        <button
          className={activeTab === "register" ? "active" : ""}
          onClick={() => setActiveTab("register")}
        >
          Register
        </button>
      </nav>
    </header>
  );
}
