import { forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  color: white;
  background-color: #212121;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
`;
const Underline = styled.div`
  width: 70px;
  border-bottom: 3px solid white;
  margin-top: 8px;
`;
const Form = styled.form`
  margin-top: 80px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: end;
  & > * {
    background-color: #171717;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
`;

const TextArea = styled.textarea`
  border: none;
  width: 500px;
  height: 150px;
  max-width: 100vw;
  min-width: 350px;
  min-height: 100px;
  padding: 10px;
  color: white;
  &:focus {
    border: none;
    outline: none;
  }
  @media (max-width: 500px) {
    width: 80vw;
    min-width: 80vw;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 80px;
  background-color: transparent;
  border: solid 2px white;
  width: 150px;
  text-transform: uppercase;
  margin-top: 2px;
  transition: background-color 0.5s, border-color 0.5s;
  &:hover {
    border-color: ${(props) => props.theme.red};
    background-color: ${(props) => props.theme.red};
  }
`;
const Contact = forwardRef<HTMLDivElement>((_, ref) => {
  const { register } = useForm();

  return (
    <Wrapper ref={ref}>
      <Title>CONTACT</Title>
      <Underline />
      <Form>
        <Input
          {...register('name', { required: true })}
          placeholder='Enter your name'
          required
        />

        <Input
          type='email'
          {...register('email', { required: true })}
          placeholder='Enter your email'
          required
        />

        <TextArea
          {...register('message', { required: true })}
          placeholder='Enter your message'
          required
        />

        <SubmitButton type='submit'>Submit</SubmitButton>
      </Form>
    </Wrapper>
  );
});
export default Contact;
