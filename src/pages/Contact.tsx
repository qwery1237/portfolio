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
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  & > * {
    background-color: #171717;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
`;

const TextArea = styled.input`
  width: 100%;
  padding: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
`;
export default function Contact() {
  const { register } = useForm();

  return (
    <Wrapper>
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
}
