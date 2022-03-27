import logo from '../logo.svg';
import s from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={s.container}>
      <img className={s.logo} src={logo} alt="logo" />
      <h2 className={s.title}>Phonebook React App</h2>
    </div>
  );
}
