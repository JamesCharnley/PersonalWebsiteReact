import navStyles from './NavBar.module.css';
export function NavBar(){
  return (
    <div className={navStyles.sticky_navbar}>
      <div className={navStyles.tabs}>
      <a className={navStyles.nav_content} href="/">
        Home
      </a>
      <a
        className={navStyles.nav_content}
        href="https://github.com/JamesCharnley"
      >
        GitHub
      </a>
      <a
        className={navStyles.nav_content}
        href="https://www.linkedin.com/in/james-charnley-nz"
      >
        LinkedIn
      </a>
      <a
        className={navStyles.nav_content}
        href="https://jamescharnley.itch.io/"
      >
        Itch.io
      </a>
      </div>
    </div>
  );
}