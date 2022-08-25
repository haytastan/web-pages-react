import {css, cx} from '@emotion/css';

import {FiTwitter} from 'react-icons/fi';
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {ImPinterest2} from 'react-icons/im';
import {RiAccountCircleLine} from 'react-icons/ri';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import {MdOutlineLocalPolice} from 'react-icons/md';
import {GiChestnutLeaf} from 'react-icons/gi';
import {AiOutlineCopyright} from 'react-icons/ai';
import logo from '../assets/logo.png';
import {Link, useNavigate} from 'react-router-dom';

const MenuItem = ({path, menuTitle, icon}) => {
  const navigate = useNavigate();

  return (
    <li
      className={cx(
        css`
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        `,
        'p-2 flex items-center gap-2 hover:bg-gray-100 w-full hover:cursor-pointer border-b-2 border-transparent hover:border-blue-900'
      )}
      onClick={(e) => {
        navigate(path, {
          state: {},
        });
      }}
    >
      {icon()}
      <Link to={path} className="text-lg">
        {menuTitle}
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <footer
      className={cx(
        css``,
        `w-full h-full flex justify-center flex-col items-center gap-2`
      )}
    >
      <Link to={'/'} className={`flex items-center gap-2`}>
        <img src={logo} alt={'logo'} className={`w-10`} />
        <h2 className="text-xl">Make YourSelf</h2>
      </Link>
      <ul
        className={cx(
          'flex items-center gap-2',
          css`
            @media (max-width: 768px) {
              align-items: center;
              flex-direction: column;
            }
          `
        )}
      >
        <MenuItem
          path={'/membership'}
          menuTitle={'MemberShip'}
          icon={() => {
            return <RiAccountCircleLine size={24} />;
          }}
        />
        <MenuItem
          path={'/qa'}
          menuTitle={'QA'}
          icon={() => {
            return <AiOutlineQuestionCircle size={24} />;
          }}
        />
        <MenuItem
          path={'/polycy'}
          menuTitle={'Polycy'}
          icon={() => {
            return <MdOutlineLocalPolice size={24} />;
          }}
        />
        <MenuItem
          path={'/allergen'}
          menuTitle={'Allergen'}
          icon={() => {
            return <GiChestnutLeaf size={24} />;
          }}
        />
      </ul>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2">
          <FiTwitter
            size={24}
            className={'hover:cursor-pointer hover:text-blue-400'}
          />
          <FaFacebookF
            size={24}
            className={'hover:cursor-pointer hover:text-blue-900'}
          />
          <FaInstagram
            size={24}
            className={'hover:cursor-pointer hover:text-pink-500'}
          />
          <ImPinterest2
            size={24}
            className={'hover:cursor-pointer hover:text-red-500'}
          />
        </div>
        <div className="flex items-center">
          <span>@copyright Make YourSelf</span>
        </div>
      </div>
    </footer>
  );
};

export {Footer};
