import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <span>Sale</span>
            <span>Sale</span>
          </NavLink>
          <NavLink href="/new">
            <span>New&nbsp;Releases</span>
            <span>New&nbsp;Releases</span>
          </NavLink>
          <NavLink href="/men">
            <span>Men</span>
            <span>Men</span>
          </NavLink>
          <NavLink href="/women">
            <span>Women</span>
            <span>Women</span>
          </NavLink>
          <NavLink href="/kids">
            <span>Kids</span>
            <span>Kids</span>
          </NavLink>
          <NavLink href="/collections">
            <span>Collections</span>
            <span>Collections</span>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  --font-size: 1.125rem;

  font-size: var(--font-size);
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  position: relative;
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }

  span {
    transition: transform 250ms ease-in, opacity 250ms;
    display: block;
  }

  span:nth-of-type(2) {
    position: absolute;
    top: 1.125rem;
    opacity: 0;
    font-weight: 600;
  }

  :hover {
    span {
      transition: transform 250ms, opacity 200ms;
    }
    span:nth-of-type(1) {
      transform: translateY(calc(-1 * var(--font-size)));
      opacity: 0;
    }
    span:nth-of-type(2) {
      transform: translateY(calc(-1 * var(--font-size)));
      opacity: 1;
    }
  }
`;

export default Header;
