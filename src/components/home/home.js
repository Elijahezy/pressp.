import React from 'react';
import * as S from './home.styled';
import { RiArrowLeftSLine } from 'react-icons/ri';
import SurveyCard from '../survey-card/survey-card';

function Home() {
  return (
    <S.Body>
      <S.BreadCrumb>
        <RiArrowLeftSLine />
        Назад
      </S.BreadCrumb>
      <S.Headline>Поделитесь идеей</S.Headline>
      <SurveyCard />
    </S.Body>
  );
}

export default Home;
