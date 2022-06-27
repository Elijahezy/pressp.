import React from 'react';
import * as S from './footer.styled';

function Footer() {
  return (
    <>
      <S.Footer>
        <S.Hr />
        <S.FooterContainer>
          <S.Logo src='/footer_logo.svg' alt='Nakhodka 2030' />
          <S.Nav>
            <S.NavItem href='#'>О Находке</S.NavItem>
            <S.NavItem href='#'>Пройдите опрос</S.NavItem>
            <S.NavItem href='#'>План комплексного развития</S.NavItem>
            <S.NavItem href='#'>Обсуждения</S.NavItem>
            <S.NavItem href='#'>Новости</S.NavItem>
          </S.Nav>
          <S.FlexColumn>
            <S.FlexRow gap='16px'>
              <S.MailIcon src='/mail.svg' alt='Mail' />
              <S.MailText>call@my-nakhodka.ru</S.MailText>
            </S.FlexRow>
            <S.Policy>Политика обработки персональных данных</S.Policy>
          </S.FlexColumn>
        </S.FooterContainer>
      </S.Footer>
    </>
  );
}

export default Footer;
