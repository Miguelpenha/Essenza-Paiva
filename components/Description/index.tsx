import { Container } from './style'
import page from '../../services/page'

function Description() {
    return (
        <Container id="description">
            {page.components.main.description.map((text, index) => (
                <div key={index}>
                    <span>{text}</span>
                    {index < page.components.main.description.length-1 && <>
                        <br/>
                        <br/>
                        <br/>
                    </>}
                </div>
            ))}
        </Container>
    )
}

export default Description