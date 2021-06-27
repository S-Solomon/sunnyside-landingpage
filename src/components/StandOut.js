import StandoutMobile from '../images/mobile/image-stand-out.jpg' ;
import StandoutDesktop from '../images/desktop/image-stand-out.jpg' ;

const StandOut = () => {
    return (
        <>
            <section>
                <div>
                    <picture>
                        <source media="(min-width: 768px)" srcSet={StandoutDesktop} />
                        <img src={StandoutMobile} alt="" />
                    </picture>
                </div>

                <div className="px-5 text-center">
                    <h2 className="text-2xl my-5">Stand out to the right audience</h2>
                    <p className="mb-5">
                        Using a collaborative formula of designers, researchers, photographers, videographers,
                        and copywriters, we'll build and extend your brand in digital places.
                    </p>
                    <button className="btn-standout">Learn More</button>
                </div>
            </section>
        </>
    )
}

export default StandOut