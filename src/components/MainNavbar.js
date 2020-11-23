import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AppRoute } from "../const";
import { LinkContainer } from "react-router-bootstrap";
import NavbarDropdown from "./NavbarDropdown";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { getRole } from "../reducer/login/selectors";
import { Operation } from "../reducer/login/login";

const NAVBARS = [
  {
    title: 'leader',
    dropdowns: [
      {
        title: 'leader-1',
        dropdowns: [
          {title: 'leader-1-1'},
          {title: 'leader-1-2'},
          {title: 'leader-1-3'}
        ]
      },
      {
        title: 'leader-2',
        dropdowns: [
          {title: 'leader-2-1'},
          {title: 'leader-2-2'},
          {title: 'leader-2-3'}
        ]
      },
      {
        title: 'leader-3',
        dropdowns: [
          {title: 'leader-3-1'},
          {title: 'leader-3-2'},
          {title: 'leader-3-3'}
        ]
      },
    ]
  },
  {
    title: 'buxgalter',
    dropdowns: [
      {
        title: 'buxgalter-1',
        dropdowns: [
          {title: 'buxgalter-1-1'},
          {title: 'buxgalter-1-2'},
          {title: 'buxgalter-1-3'}
        ]
      },
      {
        title: 'buxgalter-2',
        dropdowns: [
          {title: 'buxgalter-2-1'},
          {title: 'buxgalter-2-2'},
          {title: 'buxgalter-2-3'}
        ]
      },
      {
        title: 'buxgalter-3',
        dropdowns: [
          {title: 'buxgalter-3-1'},
          {title: 'buxgalter-3-2'},
          {title: 'buxgalter-3-3'}
        ]
      },
    ]
  },
  {
    title: 'worker',
    dropdowns: [
      {
        title: 'worker-1',
        dropdowns: [
          {title: 'worker-1-1'},
          {title: 'worker-1-2'},
          {title: 'worker-1-3'}
        ]
      },
      {
        title: 'worker-2',
        dropdowns: [
          {title: 'worker-2-1'},
          {title: 'worker-2-2'},
          {title: 'worker-2-3'}
        ]
      },
      {
        title: 'worker-3',
        dropdowns: [
          {title: 'worker-3-1'},
          {title: 'worker-3-2'},
          {title: 'worker-3-3'}
        ]
      },
    ]
  }
];

function MainNavbar() {
  const dispatch = useDispatch();
  const role = useSelector(getRole);
  console.log(role);

  return (
    <Navbar bg="light" expand="lg">
      <NavbarBrand href={AppRoute.ROOT}>Home</NavbarBrand>
      <NavbarToggle aria-controls="basic-navbar-nav" />
      <NavbarCollapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {NAVBARS.map((navbar) => <NavbarDropdown navbar={navbar} key={navbar.title} />)}
        </Nav>
        {role
          ? <Button
            variant="outline-danger"
            onClick={() => dispatch(Operation.logout())}
            >Logout</Button>
          : < LinkContainer to={AppRoute.LOGIN}>
            <Button variant="outline-success">Login</Button>
          </LinkContainer>}
      </NavbarCollapse>
    </Navbar>
  );
}

export default MainNavbar;
