import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';
import { IconLoader } from '@components/icons';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    opacity: ${props => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #B {
        opacity: 0;
      }
    }
  }
`;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      // 1. E top bar swipes across
      .add({
        targets: '#e-top',
        scaleX: [0, 1],
        opacity: [0, 1],
        duration: 400,
        easing: 'easeInOutQuart',
        transformOrigin: 'left center',
      })
      // 2. H left vertical appears
      .add({
        targets: '#h-left',
        scaleY: [0, 1],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeInOutQuart',
        offset: '+=100', // starts 100ms after previous
        transformOrigin: 'top center',
      })
      // 3. H right vertical appears, staggered just after left
      .add({
        targets: '#h-shared', // was #h-right
        scaleY: [0, 1],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeInOutQuart',
        offset: '+=100',
        transformOrigin: 'top center',
      })
      // 4. E middle bar and H crossbar appear as verticals finish
      .add({
        targets: ['#e-middle', '#h-horizontal'],
        scaleX: [0, 1],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeInOutQuart',
        offset: '-=100', // overlaps with previous
        transformOrigin: 'left center',
      })
      // 5. A left diagonal
      .add({
        targets: '#a-left',
        scaleY: [0, 1],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeInOutQuart',
        offset: '+=100',
        transformOrigin: 'bottom center',
      })
      // 6. A right diagonal
      .add({
        targets: '#a-right',
        scaleY: [0, 1],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeInOutQuart',
        offset: '+=100',
        transformOrigin: 'bottom center',
      })
      // 7. A crossbar and E bottom bar together
      .add({
        targets: ['#a-cross', '#e-bottom'],
        scaleX: [0, 1],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeInOutQuart',
        offset: '+=100',
        transformOrigin: 'left center',
      })
      // 8. Fade out the whole logo
      .add({
        targets: '#logo',
        opacity: 0,
        scale: 0.1,
        duration: 300,
        easing: 'easeInOutQuart',
        delay: 500,
      })
      .add({
        targets: '.loader',
        opacity: 0,
        zIndex: -1,
        duration: 200,
        easing: 'easeInOutQuart',
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <div className="logo-wrapper">
        <IconLoader />
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
