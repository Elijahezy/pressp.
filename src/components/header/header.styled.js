import styled from 'styled-components';

export const Header = styled.header`
  display: flex;

  padding: 0 112px;
  height: 72px;
  max-height: 72px;
  background: rgba(255, 255, 255, 0.92);
  align-items: center;
  backdrop-filter: blur(28px);

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Logo = styled.img`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: fit-content;
  height: fit-content;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 152px;
    height: 40px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  height: fit-content;
  margin-left: auto;
  gap: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.3px;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
`;

export const MenuDots = styled.button`
  display: none;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    display: flex;
    background-image: url('/menu_dots.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 16px;
    height: 16px;
    margin: 0 0 0 auto;
  }
`;
