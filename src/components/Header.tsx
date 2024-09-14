import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  z-index: 2;
  box-shadow: none;
  padding: 21.6px 40px;
`;
const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Nav = styled.div`
  display: flex;
  gap: 24px;
  text-transform: uppercase;
`;
const NavItem = styled(motion.div)`
  font-weight: 700;
  cursor: pointer;
`;
const Title = styled(NavItem)`
  font-size: 24px;
`;
const DropdownNav = styled.div`
  margin-top: 21.6px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const MenuTrigger = styled(motion.button)`
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.red};
  }
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
    color: headerState === 'top' ? '#ffffff' : '#F76566',
  }),
};

export default function Header() {
  const { scrollY } = useScroll();
  const [width, setWidth] = useState(window.innerWidth);
  const [showNav, setShowNav] = useState(false);
  const [headerState, setHeaderState] = useState('top');
  const headerAnimation = useAnimation();
  const toggleNav = () => setShowNav((prev) => !prev);
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
          <MenuTrigger
            custom={headerState}
            variants={hoverVariant}
            whileHover='hover'
            animate='animate'
            onClick={toggleNav}
          >
            <GiHamburgerMenu />
          </MenuTrigger>
        )}
      </NavWrapper>
      {showNav ? (
        <DropdownNav>
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
        </DropdownNav>
      ) : null}
    </Wrapper>
  );
}
