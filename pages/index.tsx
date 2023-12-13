import useAnimation from '../components/useAnimation'
import Script from 'next/script'
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
        {/* Google Tag Manager */}
        <Script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`}}/>
        {/* End Google Tag Manager */}
        {/* Google Tag Manager (noscript) */}
        <noscript>
            <iframe
                width="0"
                height="0"
                style={{display: 'none', visibility: 'hidden'}}
                src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Head/>
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