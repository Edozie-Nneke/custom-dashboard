import topNavbar from './topNavbar.module.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import avatar from '../../assets/avatar.jpg';

export const TopNavbar = ({ mode, setMode }) => {
  return (
    <nav className={topNavbar.topNav}>
      <div className={topNavbar.wrapper}>
        <div className={topNavbar.leftside}>
          <input type='text' placeholder='Search...' />
          <SearchOutlinedIcon className={topNavbar.search} />
        </div>

        <div className={topNavbar.rightside}>
          <div className={topNavbar.icons_avatar}>
            <div className={topNavbar.modes}>
              {mode === false ? (
                <LightModeOutlinedIcon onClick={() => setMode(true)} />
              ) : (
                <DarkModeOutlinedIcon onClick={() => setMode(false)} />
              )}
            </div>
            <div className={topNavbar.notification}>
              <NotificationsActiveOutlinedIcon />
              <span>5</span>
            </div>

            <div className={topNavbar.avatar}>
              <img src={avatar} alt='' />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
