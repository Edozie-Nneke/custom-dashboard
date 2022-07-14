import { SideNavbar } from '../../components/sideNavbar/SideNavbar';
import { TopNavbar } from '../../components/topNavbar/TopNavbar';
import home from './home.module.scss';

const Home = () => {
  return (
    <section className={home.home}>
      <SideNavbar />
      <div className={home.wrapper}>Wrapper</div>
    </section>
  );
};

export default Home;
