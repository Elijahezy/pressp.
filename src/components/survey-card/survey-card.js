import React from 'react';
import * as S from './survey-card.styled';

const CARD_2_DATA = [
  'До 18',
  '19-25',
  '26-35',
  '36-45',
  '46-55',
  '56-65',
  'Больше 66',
];

const CARD_3_DATA = [
  'О проблеме и ее решении',
  'О идее города',
  'Об уникальных интересных местах Находки',
];

function SurveyCard() {
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const formData = new FormData(form);

    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    data.location = 'Находка';

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        alert(JSON.stringify(res));
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });

    console.log(data);
  };

  return (
    <S.Form onSubmit={(e) => handleFormSubmit(e)}>
      <S.Card>
        <S.FlexRow margin='0 0 32px 0'>
          <S.Ordinal>1</S.Ordinal>
          <S.Headline>Расскажите кем вы приходитесь городу</S.Headline>
        </S.FlexRow>
        <S.FlexRow margin='0 0 20px 0'>
          <S.RadioButton
            type='radio'
            id='local'
            name='located'
            value='local'
            required
          />
          <S.RadioButtonLabel htmlFor='local'>
            Местный житель
          </S.RadioButtonLabel>
        </S.FlexRow>
        <S.FlexRow>
          <S.RadioButton
            type='radio'
            id='guest'
            name='located'
            value='guest'
            required
          />
          <S.RadioButtonLabel htmlFor='guest'>Гость города</S.RadioButtonLabel>
        </S.FlexRow>
      </S.Card>
      <S.Card>
        <S.FlexRow margin='0 0 32px 0'>
          <S.Ordinal>2</S.Ordinal>
          <S.Headline>Ваш возраст</S.Headline>
        </S.FlexRow>
        <S.ContentContainer>
          {CARD_2_DATA.map((item, index) => (
            <S.FlexRow key={index}>
              <S.RadioButton
                type='radio'
                id={item}
                name='age'
                value={item}
                required
              />
              <S.RadioButtonLabel htmlFor={item}>{item}</S.RadioButtonLabel>
            </S.FlexRow>
          ))}
        </S.ContentContainer>
      </S.Card>
      <S.Card>
        <S.FlexRow margin='0 0 32px 0'>
          <S.Ordinal>3</S.Ordinal>
          <S.Headline>Вы хотите рассказать</S.Headline>
        </S.FlexRow>
        <S.ContentContainer>
          {CARD_3_DATA.map((item, index) => (
            <S.FlexRow key={index}>
              <S.RadioButton
                type='radio'
                id={item}
                name='story'
                value={item}
                required
              />
              <S.RadioButtonLabel htmlFor={item}>{item}</S.RadioButtonLabel>
            </S.FlexRow>
          ))}
        </S.ContentContainer>
      </S.Card>
      <S.Card>
        <S.FlexRow margin='0 0 32px 0'>
          <S.Ordinal>4</S.Ordinal>
          <S.Headline>Загрузите картинку и укажите место на карте</S.Headline>
        </S.FlexRow>
        <S.LoadContentContainer>
          <S.LoadContentFlexRow>
            <S.InvisibleUploadInputLocation
              type='file'
              name='location'
              id='location'
              icon='/location.svg'
              label='Указать геолокацию'
            />
          </S.LoadContentFlexRow>
          <S.LoadContentFlexRow>
            <S.InvisibleUploadInput
              type='file'
              name='file'
              required
              id='file'
              icon='/img.svg'
              label='Добавить изображение'
            />
          </S.LoadContentFlexRow>
        </S.LoadContentContainer>
      </S.Card>
      <S.Card>
        <S.FlexRow margin='0 0 32px 0'>
          <S.Ordinal>5</S.Ordinal>
          <S.Headline>Укажите тему и расскажите идею</S.Headline>
        </S.FlexRow>
        <S.ContentContainer>
          <S.ThemeInput placeholder='Тема' type='text' name='theme' required />
          <S.ThemeTextArea
            placeholder='Идея'
            type='text'
            name='idea'
            required
          />
          <S.FlexRow>
            <S.RadioButton
              type='checkbox'
              id='policy'
              name='isPolicyAgreed'
              value='true'
              required
            />
            <S.RadioButtonLabel htmlFor='policy'>
              Я согласен с
              <S.Policy>политикой обработки персональных данных</S.Policy>
            </S.RadioButtonLabel>
          </S.FlexRow>
        </S.ContentContainer>
      </S.Card>
      <S.SubmitButton type='submit'>Отправить</S.SubmitButton>
    </S.Form>
  );
}

export default SurveyCard;
