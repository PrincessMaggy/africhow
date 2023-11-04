import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SectionOne from '../components/homeSectionOne';
import SectionTwo from '../components/homeSectionTwo';
import SectionThree from '../components/homeSectionThree';



const Home = () => {

    return (
        <div>
            <Layout>
                <Hero />
                <SectionOne />
                <SectionTwo />
                <SectionThree />S
            </Layout>
        </div>
    );
};

export default Home;
