import buttonStyles from './Button.module.css';

export default function Button({ children }) {
  return (
    <div className={`${buttonStyles.button_container}`}>
      <a className={buttonStyles.button} href="/projects">
        {children}
      </a>
    </div>
  );
}
