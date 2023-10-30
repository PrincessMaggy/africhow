import Nav from '../components/homeNav';
import Hero from '../components/Hero';
import SectionOne from '../components/homeSectionOne';
import SectionTwo from '../components/homeSectionTwo';
import SectionThree from '../components/homeSectionThree';
import Footer from '../components/Footer';
import { useAuth } from '../components/auth/AuthContext';
import NewNavbar from '../components/NewNav/NewNavBar';


const Home = () => {
    const { loggedIn } = useAuth();
    console.log(loggedIn)

    return (
        <div>
            {loggedIn ? (<NewNavbar />) : (<Nav />)}
            <Hero />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <Footer />
        </div>
    );
};

export default Home;
