import {useState} from 'react' ;
import {graphicMobile} from '../data/graphic' ;

const GraphicMobile = () => {
    // eslint-disable-next-line
    const [cards, setCards] = useState(graphicMobile);

    return (
        <>
            <section>
                {cards.map(({id, image, title, text}) => (
                    <article key={id}>
                        <img src={image} alt={title} />
                        <div>
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </div>
                    </article>
                ))}
            </section>
        </>
    )
}

export default GraphicMobile
