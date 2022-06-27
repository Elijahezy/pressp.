import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  gap: 32px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 64px 48px 32px;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 51, 91, 0.04),
    0px 24px 52px rgba(0, 51, 91, 0.02);
  border-radius: 12px;

  @media (max-width: 768px) {
    padding: 24px 20px 32px;
  }
`;

export const ContentContainer = styled.div`
  display: grid;
  gap: 20px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: ${({ margin }) => margin};
  gap: ${({ gap }) => gap};
`;

export const Headline = styled.h6`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.3px;
  color: rgba(0, 0, 0, 0.87);
  margin: 0 0 0 12px;
`;

export const Ordinal = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #3fa6f6;
`;

export const RadioButton = styled.input`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const RadioButtonLabel = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: rgba(0, 0, 0, 0.6);
  margin: 0 0 0 12px;
  cursor: pointer;
`;

export const LoadContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LoadContentFlexRow = styled(FlexRow)`
  gap: 0;
`;

export const InvisibleUploadInput = styled.input`
  color: transparent;
  position: relative;
  cursor: pointer;
  &::-webkit-file-upload-button {
    visibility: hidden;
    display: none;
  }

  &::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;

    background-image: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  &::after {
    content: 'Добавить изображение';
    display: block;
    width: 100%;
    height: 100%;
    color: #028af3;
    position: absolute;
    top: 0;
    left: 15%;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
  }
`;

export const InvisibleUploadInputLocation = styled(InvisibleUploadInput)`
  &::after {
    content: 'Указать геолокацию';
  }
`;

export const ThemeInput = styled.input`
  padding: 12px 16px;
  width: 388px;
  height: ${({ height }) => height || '48px'};
  background: rgba(2, 138, 243, 0.06);
  border-radius: 8px;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: rgba(0, 0, 0, 0.4);
  flex-grow: 1;
  word-wrap: break-word;

  @media (max-width: 768px) {
    width: 320px;
  }
`;

export const ThemeTextArea = styled.textarea`
  padding: 12px 16px;
  width: 388px;
  height: 96px;
  background: rgba(2, 138, 243, 0.06);
  border-radius: 8px;
  border: none;
  outline: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: rgba(0, 0, 0, 0.4);
  flex-grow: 1;
  word-wrap: break-word;
  resize: none;

  @media (max-width: 768px) {
    width: 320px;
  }
`;

export const Policy = styled.a`
  color: #028af3;
  text-decoration: underline;
  margin: 0 0 0 5px;
`;

export const SubmitButton = styled.button`
  padding: 12px 32px;
  gap: 4px;
  width: 176px;
  height: 56px;
  background: rgba(2, 138, 243, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.02);
  box-shadow: 0px 2px 4px rgba(2, 73, 129, 0.04);
  border-radius: 28px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #028af3;
  cursor: pointer;
  outline: none;
  justify-self: center;
  margin: 16px 0 100px 0;

  @media (max-width: 768px) {
    width: 325px;
    height: 52px;
    padding: 12px 20px;
  }
`;
