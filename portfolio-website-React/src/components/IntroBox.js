
import './IntroBox.css';
export function IntroBox() {
  return (
    <div className="box">
      <div className="title-box">
        <header className="name">
          <h1 className="typed-out">James Charnley</h1>
        </header>
        <header className="profession">
          <h2 className="typed-out2">Programmer</h2>
        </header>
        <nav>
          <ul>
          <li>
            <a href="https://github.com/JamesCharnley">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/james-charnley-6b3486193/">LinkedIn</a>
          </li>
          <li>
            <a href="https://jamescharnley.itch.io/">Itch.io</a>
          </li>
          </ul>
        </nav>
      </div>
      <div className='button-container'>
        <a className='button'>Projects</a>
      </div>
    </div>
  );
}
