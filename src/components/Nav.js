function Nav(props) {
  return (
    <div className="flex">
      <nav>
        <ul className="flex">
          {props.navLinks.map(navLink => (
            <li key={navLink.index} className="nav-item">
              <a href={navLink.url}>{navLink.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;