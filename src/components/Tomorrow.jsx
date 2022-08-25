import {css, cx} from '@emotion/css';
import eyeCatchImage2 from '../assets/fine-food-dining-in-style.jpg';

const Tomorrow = () => {
  return (
    <div
      className={cx(
        css`
          @media (max-width: 1100px) {
            flex-direction: column;
            > .left {
              order: 1;
            }
            > .right {
              order: 2;
            }
          }
        `,
        `w-full h-full flex justify-center items-center gap-10`
      )}
    >
      <div className="left">
        <h2 className="text-2xl flex items-center justify-center">
          What's Tomorrow Dinner?
        </h2>
        <p className="text-lg flex items-center justify-center">
          Let's bebop search!
        </p>
      </div>
      <div className={`right`}>
        <img
          src={eyeCatchImage2}
          alt={'eyeCatchImage2'}
          className={css`
            width: 250px;
            @media (max-width: 768px) {
              width: 180px;
            }
            display: block;
          `}
        />
      </div>
    </div>
  );
};

export {Tomorrow};
