import eyeCatchImage1 from '../assets/dinner-for-one-of-wood-fired-pizza-paired-with-cold-beer.jpg';
import {css, cx} from '@emotion/css';

const Today = () => {
  return (
    <div
      className={cx(
        css`
          @media (max-width: 1100px) {
            flex-direction: column;
            > .left {
              order: 2;
            }
            > .right {
              order: 1;
            }
          }
        `,
        `w-full h-full flex justify-center items-center gap-10`
      )}
    >
      <div className="left">
        <img
          src={eyeCatchImage1}
          alt={'eyeCatchImage1'}
          className={css`
            width: 450px;
            @media (max-width: 768px) {
              width: 320px;
            }
            display: block;
          `}
        />
      </div>
      <div className={`right`}>
        <h2 className="text-2xl flex items-center justify-center">
          What's Today Dinner?
        </h2>
        <p className="text-lg flex items-center justify-center">
          Let's bebop search!
        </p>
      </div>
    </div>
  );
};

export {Today};
