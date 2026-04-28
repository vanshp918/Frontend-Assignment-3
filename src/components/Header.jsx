function Header({ date }) {
  return (
    <header className="header">
      <div>
        <h1>Welcome back, Ritik 👋</h1>
        <p>{date}</p>
      </div>
      <div className="user-profile">
        <span>Ritik</span>
        <div className="avatar">Ri</div>
      </div>
    </header>
  );
}

export default Header;