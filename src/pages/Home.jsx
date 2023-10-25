import Nav from '../components/homeNav';
import Hero from '../components/Hero';
import SectionOne from '../components/homeSectionOne';
import SectionTwo from '../components/homeSectionTwo';
import SectionThree from '../components/homeSectionThree';
import Footer from '../components/Footer';


const Home = () => {


    return (
        <div>
            <Nav />
            <Hero />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <Footer />
        </div>
    );
};

export default Home;
