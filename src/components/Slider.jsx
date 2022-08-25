import {css, cx} from '@emotion/css';
import {useEffect, useCallback, useMemo, useRef, useState} from 'react';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Description} from './Description';
import data from '../data/dump';
import {Title} from './Title';
import {Bebop} from './Bebop';

import data1 from '../data/dump1';
import data2 from '../data/dump2';
import data3 from '../data/dump3';
import data4 from '../data/dump4';

const Slider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [tik, setTik] = useState(true);
  return (
    <div
      className={css`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        height: 100%;
      `}
    >
      <div
        className={css`
          width: 100%;
          height: 100%;
        `}
      >
        <Title tik={tik} text={data[activeSlideIndex].title} />
        <Description tik={tik} text={data[activeSlideIndex].description} />
        <Splide
          onMove={(e) => {
            setTik(false);
            // console.log(`move`);
          }}
          onMoved={(e) => {
            setTik(true);
            // console.log(`moved`);
          }}
          onVisible={(e) => {
            // console.log(`visible`);
            setActiveSlideIndex(e.index);
          }}
          className={css`
            width: 100%;
            height: 100%;
          `}
          options={{
            rewind: true,
            perPage: 1,
            // speed: 500,
            autoplay: true,
            drag: false,
            arrows: false,
          }}
          aria-label="Bebop Example"
        >
          <SplideSlide>
            <Bebop
              gutter="1rem"
              doAnimate={tik}
              data={data1}
              className={css`
                max-height: 32rem;
                @media (max-width: 768px) {
                  max-height: 24rem;
                }
              `}
            />
          </SplideSlide>
          <SplideSlide>
            <Bebop
              gutter="1rem"
              maxHeight="60rem"
              doAnimate={tik}
              data={data2}
              className={css`
                max-height: 32rem;
                @media (max-width: 768px) {
                  max-height: 24rem;
                }
              `}
            />
          </SplideSlide>
          <SplideSlide>
            <Bebop
              gutter="1rem"
              maxHeight="70rem"
              doAnimate={tik}
              data={data3}
              className={css`
                max-height: 32rem;
                @media (max-width: 768px) {
                  max-height: 24rem;
                }
              `}
            />
          </SplideSlide>
          <SplideSlide>
            <Bebop
              gutter="1rem"
              maxHeight="50rem"
              doAnimate={tik}
              data={data4}
              className={css`
                max-height: 32rem;
                @media (max-width: 768px) {
                  max-height: 24rem;
                }
              `}
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export {Slider};
