function Footer(props) {
  return (
    <>
      <footer>
        <div className="footer-content">
          <p>&copy; {props.copyright}</p>
          <ul className="footer-links">
            {props.links.map(link => (
              <li key={link.index}>
                <a href={link.url} target="_blank">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer;