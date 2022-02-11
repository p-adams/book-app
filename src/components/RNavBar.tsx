function RNavbar(props: NavOptions) {
  return (
    <nav className="r-navbar-wrapper">
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          listStyle: "none",
        }}
      >
        {props.navElements.map(({ label, link: { href } }) => {
          return (
            <li key={label}>
              <a href={href}>{label}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default RNavbar;
