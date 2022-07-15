import { useState } from 'react';
import { SideNavbar } from '../../components/sideNavbar/SideNavbar';
import { TopNavbar } from '../../components/topNavbar/TopNavbar';
import home from './home.module.scss';

const Home = () => {
  const [isMode, setIsMode] = useState(false);
  return (
    <section className={home.home}>
      <SideNavbar mode={isMode} setMode={setIsMode} />
      <div className={home.wrapper}>
        <TopNavbar mode={isMode} setMode={setIsMode} />
      </div>
    </section>
  );
};

export default Home;
