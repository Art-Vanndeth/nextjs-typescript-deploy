import {Carousel} from "flowbite-react";

const CarouselComponent = () => {
    return (
        <>
            <section className="h-[100vh]">
                <Carousel>
                <img 
                        src="https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/2fdbd7ab-f378-4c63-8b21-c944ad2633fd/header_t-shirts2.jpg"
                        alt="..."/>
                    <img className="w-[60%] h-[100%]"
                        src="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C71RR1WsplNL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png"
                        alt="..."/>
                    <img className="w-[60%] h-[100%]"
                        src="https://m.media-amazon.com/images/I/B1F9XqluwtS._CLa%7C2140%2C2000%7C71NQts%2BOO3L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679_.png"
                        alt="..."/>
                </Carousel>
            </section>
        </>
    )
}
export default CarouselComponent;