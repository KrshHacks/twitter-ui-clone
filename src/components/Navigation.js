const Nav = () => {
  return (
    <div className="col-2 h-100 d-flex flex-column">
      <header>
        <img
          src="https://i.imgur.com/VJn8FyR.png"
          alt="Logo"
          className="Logo"
        />
      </header>
      <nav>
        <ul>
          {[
            "Home",
            "Explore",
            "Notifications",
            "Messages",
            "Bookmarks",
            "Lists",
            "Profile",
          ].map((l) => (
            <li>
              <a href="/" key={l}>
                {l}
              </a>
            </li>
          ))}
        </ul>
        <button className="btn btn-primary">Talk!</button>
      </nav>
      <div className="Meta">
        <img src="https://i.imgur.com/wbUfjzdl.png" alt="Praveen Kumar" />
        <p>
          <strong>Rishita Nayak</strong>
          <span>@rishita_at_twitter</span>
        </p>
      </div>
    </div>
  );
};

export default Nav;
