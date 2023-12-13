import useAnimation from '../components/useAnimation'
import Head from '../components/Head'
import Header from '../components/Header'
import { Container, ContainerImageMain, ImageMain, TitleImageMain, SubtitleImageMain, Description, Footer, LogoFooter } from '../styles/pages'
import ImageMainSource from '../public/img/Image Main.png'
import page from '../services/page'
import Form from '../components/Form'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Register from '../components/Register'
import LogoCompleteSource from '../public/img/Logo Complete.png'

function Home() {
    useAnimation()

    return <>
        <Head/>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MN5MC8HS"
        height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header/>
        <Container>
            <ContainerImageMain>
                <TitleImageMain>Morar à beira-mar é só o começo.</TitleImageMain>
                <SubtitleImageMain>Exclusividade, conforto e segurança.</SubtitleImageMain>
                <ImageMain priority placeholder="blur" src={ImageMainSource} alt={page.alts.main}/>
            </ContainerImageMain>
            <Form/>
            <Description id="description">
                {page.components.main.description.map((text, index) => (
                    <div key={index}>
                        <span>{page.components.main.description[index]}</span>
                        {index < page.components.main.description.length-1 && <>
                            <br/>
                            <br/>
                            <br/>
                        </>}
                    </div>
                ))}
            </Description>
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