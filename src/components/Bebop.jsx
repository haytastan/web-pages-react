import {motion, useAnimationControls} from 'framer-motion';
import {css, cx} from '@emotion/css';
import {createRef, useEffect, useMemo} from 'react';
import gsap, {Power3} from 'gsap';

const containerMotionConfig = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      staggerChildren: 0.15,
    },
  },
};

const itemMotionConfig = {
  hidden: {opacity: 0, y: 60},
  show: {opacity: 1, y: 0},
};

const Bebop = ({gutter = `1rem`, doAnimate, data, className}) => {
  const tl = useMemo(() => {
    return gsap.timeline({paused: false});
  }, []);

  const itemsDomRef = useMemo(() => {
    return data.map((item) => {
      return createRef();
    });
  }, [data]);

  const controls = useAnimationControls();

  useEffect(() => {
    const itemDomList = itemsDomRef.map((itemDomRef) => {
      return itemDomRef.current;
    });
    // console.log(`doAnimate`, doAnimate);
  }, [doAnimate]);
  return (
    <motion.div
      // initial="hidden"
      // variants={containerMotionConfig}
      // animate={controls}
      className={cx(
        css`
          width: 100%;
          max-height: 40rem;
          overflow: hidden;
          padding: ${gutter};
          column-count: 7;
          column-gap: ${gutter};
          @media (max-width: 1400px) {
            column-count: 6;
            column-gap: ${gutter};
          }
          @media (max-width: 1200px) {
            column-count: 5;
            column-gap: ${gutter};
          }
          @media (max-width: 900px) {
            column-count: 4;
            column-gap: ${gutter};
          }
          @media (max-width: 768px) {
            column-count: 3;
            column-gap: ${gutter};
          }
          @media (max-width: 500px) {
            column-count: 2;
            column-gap: ${gutter};
          }
          div {
            padding-bottom: ${gutter};
            img {
              display: block;
              max-width: 100%;
              max-height: 100%;
              width: 100%;
            }
          }
        `,
        className
      )}
    >
      {data.map((item, index) => {
        return (
          <motion.div
            key={index}
            // variants={itemMotionConfig}
            ref={itemsDomRef[index]}
          >
            <img src={item.url} alt={''} />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export {Bebop};
