export default function Footer({ setActivePage }) {
  return (
    <footer className="podval1">
      <div className="podval2">
        <p>&copy; 2026 FoodSaver. All rights reserved.</p>
        <ul className="podval3">
          <li>
            <a
              href="#main"
              onClick={(e) => {
                e.preventDefault();
                setActivePage("main");
              }}
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#recipes"
              onClick={(e) => {
                e.preventDefault();
                setActivePage("recipes");
              }}
            >
              Recipes
            </a>
          </li>
          <li>
            <a
              href="#reg"
              onClick={(e) => {
                e.preventDefault();
                setActivePage("reg");
              }}
            >
              Register
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}