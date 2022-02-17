import Hero from '../components/Hero/Hero';
import Layout from '../layout/Layout';
import Projects from '../components/Projects/Project';
import Technologies from '../components/Technologies/Technologies';
import TimeLine from '../components/TimeLine/TimeLine';
import Acompalisments from '../components/Accompalishment/Acompolishment';
export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Technologies />
      <TimeLine />
      <Acompalisments />
    </Layout>
  );
}
