import style from "../"

export default function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.title}>My Application</h1>
      <nav className={style.nav}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};