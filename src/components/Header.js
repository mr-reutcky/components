import Nav from './Nav';

function Header(props) {
  return (
    <header>
      <div className="container flex space-between">
        <h1>{props.title}</h1>
        <Nav navLinks={props.navLinks}/>
      </div>
    </header>
  );
}

export default Header;