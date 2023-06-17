import "./page.scss";

export default function Home() {
  return (
    <main className="main">
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <a href="/">
              <img src="/logo.svg" alt="logo" />
            </a>
          </div>
          <div className="header-right">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About me</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <a className="cv" href="#">Download CV</a>
          </div>
        </div>
      </header>
    </main>
  );
}
