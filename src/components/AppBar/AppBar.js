import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={s.header}>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
}
