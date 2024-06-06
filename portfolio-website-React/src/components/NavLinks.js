import navLinksStyles from './NavLinks.module.css';

export default function NavLinks({ links, color }) {
  return (
    <nav className={navLinksStyles.nav_links}>
      <ul>
        {links.map((l) => (
          <li key={l.href}>
            <a style={{ color: color }} href={l.href}>
              {l.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
