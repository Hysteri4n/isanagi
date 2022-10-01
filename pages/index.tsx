import type { NextPage } from 'next';
import NavBar from '../components/basic/NavBar';
import Store from '../components/store/Store';

const Home: NextPage = () => {
  return (
    <main>
      <NavBar />
      <Store />
    </main>
  );
};

export default Home;
