import useAnimation from '../components/useAnimation'
import GTMTag from '../components/GTMTag'
import Head from '../components/Head'
import Header from '../components/Header'
import { Container, ContainerImageMain, ImageMain, TitleImageMain, SubtitleImageMain, Footer, LogoFooter } from '../styles/pages'
import ImageMainSource from '../public/img/Image Main.png'
import page from '../services/page'
import Form from '../components/Form'
import Description from '../components/Description'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Register from '../components/Register'
import LogoCompleteSource from '../public/img/Logo Complete.png'

function Home() {
    useAnimation()

    return <>
        <GTMTag/>
        <Head/>
        <Header/>
        <Container>
            <ContainerImageMain>
                <TitleImageMain>{page.components.main.image.title}</TitleImageMain>
                <SubtitleImageMain>{page.components.main.image.subtitle}</SubtitleImageMain>
                <ImageMain priority placeholder="blur" src={ImageMainSource} alt={page.alts.main}/>
            </ContainerImageMain>
            <Form/>
            <Description/>
            <Gallery/>
            <About/>
            <Register/>
            <Footer>
                <LogoFooter placeholder="blur" src={LogoCompleteSource} alt={page.alts.logo}/>
            </Footer>
        </Container>
    </>
}

export default Home