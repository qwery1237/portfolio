import { motion, useAnimation } from 'framer-motion';
import { forwardRef, useEffect, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface IFormData {
  name: string;
  email: string;
  message: string;
}
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
const FormWrapper = styled.div``;
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
  const { register, handleSubmit } = useForm<IFormData>();

  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLButtonElement>(null);
  const titleAnimation = useAnimation();
  const formAnimation = useAnimation();

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !userId) {
      toast.error(
        'Email configuration is missing. Please check your environment variables.'
      );
      return;
    }
    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        userId
      )
      .then(() => {
        toast('Email sent successfully!');
      })
      .catch(() => {
        toast('Failed to send email. Please try again later.');
      });
  };
  useEffect(() => {
    const currentWrapperRef = (ref as React.RefObject<HTMLDivElement>).current;
    const currentTitleRef = titleRef.current;
    const currentFormRef = formRef.current;
    if (!currentTitleRef || !currentFormRef || !currentWrapperRef) return;
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
          if (entry.target === currentWrapperRef && !entry.isIntersecting) {
            titleAnimation.start('initial');
            formAnimation.start('initial');
            return;
          }
        });
      },
      { threshold: [0.1] }
    );
    observer.observe(currentWrapperRef);
    observer.observe(currentTitleRef);
    observer.observe(currentFormRef);
    return () => {
      observer.unobserve(currentWrapperRef);
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
        variants={underlineVariants}
        animate={titleAnimation}
        initial='initial'
      />
      <FormWrapper ref={titleRef}>
        <Form
          variants={formVariants}
          animate={formAnimation}
          initial='initial'
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            {...register('name', { required: true })}
            placeholder='Enter your name'
          />

          <Input
            type='email'
            {...register('email', { required: true })}
            placeholder='Enter your email'
          />

          <TextArea
            {...register('message', { required: true })}
            placeholder='Enter your message'
          />

          <SubmitButton ref={formRef} type='submit'>
            Submit
          </SubmitButton>
        </Form>
      </FormWrapper>
      <ToastContainer />
    </Wrapper>
  );
});
export default Contact;
