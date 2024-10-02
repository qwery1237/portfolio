import { motion, useAnimation } from 'framer-motion';
import { forwardRef, useEffect, useRef } from 'react';
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
const Title = styled(motion.div)`
  font-size: 40px;
  font-weight: 600;
`;
const Underline = styled(motion.div)`
  width: 70px;
  border-bottom: 3px solid white;
  margin-top: 8px;
`;
const Form = styled(motion.form)`
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
const titleVariants = {
  initial: { opacity: 0, x: -300 },
  enter: { opacity: 1, x: 0, transition: { type: 'tween', duration: 0.45 } },
};
const underlineVariants = {
  initial: { opacity: 0, x: -200 },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      type: 'tween',
      duration: 0.3,
    },
  },
};
const formVariants = {
  initial: { opacity: 0, scale: 0 },
  enter: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 50, damping: 7 },
  },
};
const Contact = forwardRef<HTMLDivElement>((_, ref) => {
  const { register } = useForm();

  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLButtonElement>(null);
  const titleAnimation = useAnimation();
  const formAnimation = useAnimation();
  useEffect(() => {
    const currentTitleRef = titleRef.current;
    const currentFormRef = formRef.current;
    if (!currentTitleRef || !currentFormRef) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === currentTitleRef) {
            if (entry.intersectionRatio >= 0.1) {
              titleAnimation.start('enter');
              return;
            }
          }
          if (entry.target === currentFormRef) {
            if (entry.intersectionRatio >= 0.1) {
              formAnimation.start('enter');
              return;
            }
          }
        });
      },
      { threshold: [0.1] }
    );
    observer.observe(currentTitleRef);
    observer.observe(currentFormRef);
    return () => {
      observer.unobserve(currentTitleRef);
      observer.unobserve(currentFormRef);
    };
  }, []);
  return (
    <Wrapper ref={ref}>
      <Title
        variants={titleVariants}
        animate={titleAnimation}
        initial='initial'
      >
        CONTACT
      </Title>
      <Underline
        ref={titleRef}
        variants={underlineVariants}
        animate={titleAnimation}
        initial='initial'
      />
      <Form variants={formVariants} animate={formAnimation} initial='initial'>
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

        <SubmitButton ref={formRef} type='submit'>
          Submit
        </SubmitButton>
      </Form>
    </Wrapper>
  );
});
export default Contact;
