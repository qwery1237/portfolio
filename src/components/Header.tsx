import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { RefObject, useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';
interface IHeaderProps {
  landingRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  projectRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

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
const DropdownNav = styled(motion.div)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
    pointerEvents: 'all' as const,
    color: headerState === 'top' ? '#9E9E7E' : '#444649',
  }),
  hover: (headerState: 'top' | 'scroll') => ({
    pointerEvents: 'all' as const,
    color: headerState === 'top' ? '#ffffff' : '#F76566',
  }),
  current: (headerState: 'top' | 'scroll') => ({
    color: headerState === 'top' ? '#ffffff' : '#F76566',
    pointerEvents: 'none' as const,
  }),
};
const dropDownNavVariant = {
  show: {
    height: '120px',
    padding: '20px 0',
    gap: '20px',
    marginTop: '21.6px',
  },
  hide: { height: 0, padding: 0, marginTop: 0 },
};
export default function Header({
  landingRef,
  aboutRef,
  projectRef,
  contactRef,
}: IHeaderProps) {
  const headerHeight = 71.98;
  const { scrollY } = useScroll();
  const [width, setWidth] = useState(window.innerWidth);
  const [showNav, setShowNav] = useState(false);
  const [headerState, setHeaderState] = useState('top');
  const [currentSection, setCurrentSection] =
    useState<RefObject<HTMLDivElement>>(landingRef);
  const headerAnimation = useAnimation();
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleNav = () => setShowNav((prev) => !prev);
  const scrollToSection = (sectionRef: RefObject<HTMLDivElement>) => {
    if (sectionRef.current === null) return;
    const top =
      sectionRef.current.getBoundingClientRect().top +
      scrollY.get() -
      headerHeight +
      2;
    window.scrollTo({ top, behavior: 'smooth' });
  };
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
  const closeNav = (event: MouseEvent) => {
    if (!headerRef.current) return;

    if (headerRef.current.contains(event.target as Node)) return;

    setShowNav(false);
  };
  const getCurrentPage = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    if (scrollPosition >= pageHeight) {
      setCurrentSection(contactRef);
      return;
    }
    const crrPage = [landingRef, aboutRef, projectRef, contactRef].filter(
      (ref) => {
        if (ref.current === null) return false;
        const { top, bottom } = ref.current.getBoundingClientRect();
        return (
          top <= window.innerHeight - headerHeight &&
          bottom > headerHeight + 0.2
        );
      }
    );

    setCurrentSection(crrPage[0]);
  };
  useMotionValueEvent(scrollY, 'change', (crrY) => {
    getCurrentPage();
    if (crrY === 0 && window.innerWidth >= 1000) {
      setHeaderState('top');
      headerAnimation.start('top');
      return;
    }
    setHeaderState('scroll');
    headerAnimation.start('scroll');
  });
  useEffect(() => {
    if (scrollY.get() === 0 && window.innerWidth >= 1000) {
      setHeaderState('top');
      headerAnimation.start('top');
    } else {
      setHeaderState('scroll');
      headerAnimation.start('scroll');
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  useEffect(() => {
    if (!showNav) return;

    window.addEventListener('click', closeNav);
    return () => window.removeEventListener('click', closeNav);
  }, [showNav]);
  useEffect(() => {
    if (width >= 1000) {
      setShowNav(false);
    }
  }, [width]);
  return (
    <Wrapper ref={headerRef} variants={headerVariant} animate={headerAnimation}>
      <NavWrapper>
        <Title
          custom={headerState}
          variants={hoverVariant}
          whileHover='hover'
          animate={currentSection === landingRef ? 'current' : 'animate'}
          onClick={() => scrollToSection(landingRef)}
        >
          Jin's Portfolio
        </Title>
        {width >= 1000 ? (
          <Nav>
            <NavItem
              custom={headerState}
              variants={hoverVariant}
              whileHover='hover'
              animate={currentSection === aboutRef ? 'current' : 'animate'}
              onClick={() => scrollToSection(aboutRef)}
            >
              About
            </NavItem>
            <NavItem
              custom={headerState}
              variants={hoverVariant}
              whileHover='hover'
              animate={currentSection === projectRef ? 'current' : 'animate'}
              onClick={() => scrollToSection(projectRef)}
            >
              Journey
            </NavItem>
            <NavItem
              custom={headerState}
              variants={hoverVariant}
              whileHover='hover'
              animate={currentSection === contactRef ? 'current' : 'animate'}
              onClick={() => scrollToSection(contactRef)}
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

      {/* {showNav && width < 1000 ? ( */}
      <DropdownNav
        variants={dropDownNavVariant}
        animate={showNav ? 'show' : 'hide'}
        initial='hide'
      >
        <NavItem
          custom={headerState}
          variants={hoverVariant}
          whileHover='hover'
          animate={currentSection === aboutRef ? 'current' : 'animate'}
          onClick={() => scrollToSection(aboutRef)}
        >
          About
        </NavItem>
        <NavItem
          custom={headerState}
          variants={hoverVariant}
          whileHover='hover'
          animate={currentSection === projectRef ? 'current' : 'animate'}
          onClick={() => scrollToSection(projectRef)}
        >
          Journey
        </NavItem>
        <NavItem
          custom={headerState}
          variants={hoverVariant}
          whileHover='hover'
          animate={currentSection === contactRef ? 'current' : 'animate'}
          onClick={() => scrollToSection(contactRef)}
        >
          Contact
        </NavItem>
      </DropdownNav>
      {/* ) : null} */}
    </Wrapper>
  );
}
