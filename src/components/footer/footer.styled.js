import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: #f3f7fa;
  display: grid;
`;

export const FooterContainer = styled.div`
  display: grid;
  padding: 64px 112px 100px 112px;
  background-color: #f3f7fa;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 30px 20px 64px 20px;
    gap: 40px;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  @media (max-width: 768px) {
    width: 320px;
    height: 84px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0 32px 0 144px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const NavItem = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.3px;
  color: rgba(0, 0, 0, 0.6);
  text-decoration: none;
  width: 280px;
  cursor: pointer;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ gap }) => gap || '0px'};
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap || '0px'};
`;

export const MailIcon = styled.img``;

export const MailText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  letter-spacing: 0.5px;
  color: #028af3;
  cursor: pointer;
`;

export const Policy = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  letter-spacing: 0.5px;
  color: rgba(0, 0, 0, 0.4);
  text-align: left;
  cursor: pointer;
`;

export const Hr = styled.hr`
  width: 1216px;
  height: 2px;
  background-color: rgba(179, 197, 210, 0.3);
  color: rgba(179, 197, 210, 0.3);
  border: none;
  margin: 0;
  justify-self: center;
  padding: 0 112px;

  @media (max-width: 768px) {
    width: 320px;
    padding: 0 20px;
  }
`;
