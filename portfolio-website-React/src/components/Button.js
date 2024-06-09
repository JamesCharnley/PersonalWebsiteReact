import buttonStyles from './Button.module.css';

export default function Button({ children, href }) {
  return (
    <div className={`${buttonStyles.button_container}`}>
      <a className={buttonStyles.button} href={href}>
        {children}
      </a>
    </div>
  );
}
