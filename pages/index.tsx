import useAnimation from '../components/useAnimation'
import Head from '../components/Head'
import Header from '../components/Header'
import { Container, ImageMain, Description, Footer, LogoFooter } from '../styles/pages'
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
        <Header/>
        <Container>
            <ImageMain priority placeholder="blur" src={ImageMainSource} alt={page.alts.main}/>
            <Form/>
            <Description id='description'>
                {page.components.main.description.map((text, index) => (
                    <div key={index}>
                        <span>{page.components.main.description[index]}</span>
                        {index < page.components.main.description.length-1 && <>
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
                <LogoFooter placeholder="blur" src={LogoCompleteSource} alt={page.alts.complete}/>
            </Footer>
        </Container>
    </>
}

export default Home