import * as S from './header.styled';

function Header() {
  return (
    <S.Header>
      <S.Logo src='/logo.svg' />
      <S.Nav>
        <S.NavItem>О Находке</S.NavItem>
        <S.NavItem>Пройдите опрос</S.NavItem>
        <S.NavItem>Проекты Находки</S.NavItem>
        <S.NavItem>Обсуждения</S.NavItem>
        <S.NavItem>Новости</S.NavItem>
      </S.Nav>
      <S.MenuDots />
    </S.Header>
  );
}

export default Header;
