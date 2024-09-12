import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 72px;
  position: fixed;
  z-index: 2;
  box-shadow: none;
`;
const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Nav = styled.div`
  display: flex;
  text-transform: uppercase;
`;
const NavItem = styled(motion.div)`
  font-weight: 700;
  cursor: pointer;
`;
const Title = styled(NavItem)`
  font-size: 24px;
`;
const headerVariant = {
  top: {
    backgroundColor: 'rgba(255,255,255,0)',
    boxShadow: 'none',
  },
  scroll: {
    backgroundColor: 'rgba(255,255,255,1)',
    boxShadow: '0 1px .3rem hsla(0, 0%, 80%, .8)',
  },
};
const hoverVariant = {
  animate: (headerState: 'top' | 'scroll') => ({
    color: headerState === 'top' ? '#9E9E7E' : '#444649',
  }),
  hover: (headerState: 'top' | 'scroll') => ({
    color: headerState === 'top' ? '#ffffff' : '#800020',
  }),
};

export default function Header() {
  const { scrollY } = useScroll();
  const [width, setWidth] = useState(window.innerWidth);
  const [headerState, setHeaderState] = useState('top');
  const headerAnimation = useAnimation();
  const onResize = () => {
    const crrWidth = window.innerWidth;
    setWidth(crrWidth);
    const crrY = scrollY.get();
    if (crrY !== 0) return;
    if (crrWidth >= 1000) {
      setHeaderState('top');
      headerAnimation.start('top');
      return;
    }
    setHeaderState('scroll');
    headerAnimation.start('scroll');
  };
  useMotionValueEvent(scrollY, 'change', (crrY) => {
    if (crrY === 0 && window.innerWidth >= 1000) {
      setHeaderState('top');
      headerAnimation.start('top');
      return;
    }
    setHeaderState('scroll');
    headerAnimation.start('scroll');
  });
  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);
  return (
    <Wrapper variants={headerVariant} animate={headerAnimation} initial='top'>
      <NavWrapper>
        <Title
          custom={headerState}
          variants={hoverVariant}
          whileHover='hover'
          animate='animate'
        >
          Jin's Portfolio
        </Title>
        {width >= 1000 ? (
          <Nav>
            <NavItem
              custom={headerState}
              variants={hoverVariant}
              whileHover='hover'
              animate='animate'
            >
              About
            </NavItem>
            <NavItem
              custom={headerState}
              variants={hoverVariant}
              whileHover='hover'
              animate='animate'
            >
              Journey
            </NavItem>
            <NavItem
              custom={headerState}
              variants={hoverVariant}
              whileHover='hover'
              animate='animate'
            >
              Contact
            </NavItem>
          </Nav>
        ) : (
          <div>menu</div>
        )}
      </NavWrapper>
    </Wrapper>
  );
}
