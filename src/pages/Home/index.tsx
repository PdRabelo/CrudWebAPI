import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Lontra } from '../../features/lontras'
import { Wrapper } from './styles'

const Home = () => {
    return (
        <Wrapper>
            <Header />
            <Lontra />
        </Wrapper>
    );
}

export default Home