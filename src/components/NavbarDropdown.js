import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarDropdown (props) {
  return props.navbar?.dropdowns?.length
    ? <NavDropdown
      title={props.navbar.title}
      id={`${props.navbar.title}-dropdown`}
      drop={props.drop}
    >
      {props.navbar.dropdowns.map((navbar) => <NavbarDropdown navbar={navbar} drop="right" key={navbar.title} />)}
    </NavDropdown>
    : <NavDropdown.Item href={`/${props.navbar.title}`}>
      {props.navbar.title}
    </NavDropdown.Item>;
};

export default NavbarDropdown;
