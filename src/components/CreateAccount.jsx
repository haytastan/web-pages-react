import {css, cx} from '@emotion/css';
import eyeCatchImage3 from '../assets/dinner-party.jpg';
import {Form} from './Form';
const CreateAccount = () => {
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
      <div
        className={cx(
          css`
            max-width: 30rem;
            @media (max-width: 500px) {
              max-width: 100%;
            }
          `,
          'left px-2 w-full'
        )}
      >
        <img
          src={eyeCatchImage3}
          alt={'eyeCatchImage3'}
          className={css`
            width: 450px;
            @media (max-width: 768px) {
              display: none;
            }
            display: block;
          `}
        />
      </div>
      <div className={`right`}>
        <h2 className="text-2xl flex items-center justify-center pb-2">
          Now Create Account!
        </h2>
        <Form />
      </div>
    </div>
  );
};

export {CreateAccount};
