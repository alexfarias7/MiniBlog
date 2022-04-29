import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.15) 0px -2px 10px 0px;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 2em;
`;
export const Brand = styled(NavLink)`
  font-size: 1.2em;
  & span {
    font-weight: 900;
    text-transform: uppercase;
  }
`;

export const NavActive = styled(NavLink)`
  &.active {
    background-color: #000;
    color: #fff;
  }
`;

export const LinksLists = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;

  & li {
    margin: 1em 0;
  }

  & li a {
    padding: 0.4em 0.6em;
  }
`;

export const Active = styled.li`
  background-color: #000;
  color: #fff;
`;
