import {AnimatePresence} from 'framer-motion';
import {css} from '@emotion/css';
import {Layout} from '../layouts/popup';

const Description = ({tik, text}) => {
  return (
    <div
      className={css`
        width: 100%;
        min-height: 6rem;
        @media (max-width: 768px) {
          min-height: 10rem;
        }
      `}
    >
      {
        <AnimatePresence>
          {tik && (
            <Layout>
              <p className="flex items-center justify-center text-xl p-4">
                {text}
              </p>
            </Layout>
          )}
        </AnimatePresence>
      }
    </div>
  );
};

export {Description};
