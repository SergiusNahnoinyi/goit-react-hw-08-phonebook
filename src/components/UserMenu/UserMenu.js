import s from './UserMenu.module.css';

export default function UserMenu() {
  return (
    <div className={s.container}>
      <img
        className={s.avatar}
        src="https://raw.githubusercontent.com/SergiusNahnoinyi/goit-react-hw-05-movies/main/public/logo192.png"
        title="User avatar"
        alt="Avatar"
        width={32}
      />
      <span className={s.name}>Добро пожаловать, User</span>
      <button type="button" title="Log out" aria-label="Log out">
        Logout
      </button>
    </div>
  );
}
