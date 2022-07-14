import { useState } from 'react';
import sideNavbar from './sideNavbar.module.scss';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

export const SideNavbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <aside className={sideNavbar.sideNav}>
      <h2 className={sideNavbar.logo}>Logo</h2>
      <div className={sideNavbar.body}>
        <ul>
          <li>
            <DashboardOutlinedIcon className={sideNavbar.icons} />
            <span>Dashboard</span>
          </li>
          <li>
            <PeopleOutlineOutlinedIcon className={sideNavbar.icons} />
            <span>Users</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon className={sideNavbar.icons} />
            <span>Profile</span>
          </li>
          <li>
            <ProductionQuantityLimitsIcon className={sideNavbar.icons} />
            <span>Products</span>
          </li>
          <li>
            <PaymentOutlinedIcon className={sideNavbar.icons} />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className={sideNavbar.icons} />
            <span>Delivery</span>
          </li>
          <li>
            <QueryStatsOutlinedIcon className={sideNavbar.icons} />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className={sideNavbar.icons} />
            <span>Notifications</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className={sideNavbar.icons} />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className={sideNavbar.icons} />
            <span>Settings</span>
          </li>
          <li>
            <LogoutOutlinedIcon className={sideNavbar.icons} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className={sideNavbar.mode}>
        <LightModeOutlinedIcon
          className={sideNavbar.light}
          onClick={() => setIsDarkMode(true)}
        />

        {isDarkMode === false ? (
          <ToggleOnOutlinedIcon className={sideNavbar.modeSwitch} />
        ) : (
          <ToggleOffOutlinedIcon className={sideNavbar.modeSwitch} />
        )}
        <DarkModeOutlinedIcon
          className={sideNavbar.dark}
          onClick={() => setIsDarkMode(false)}
        />
      </div>
    </aside>
  );
};
