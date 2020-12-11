import React from 'react'
import faker from 'faker';
import "./Home.css";
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-CA_ENG_PVD6150._CB416179696_.jpg"
                alt=""
            />
            
            <div className="home__row">
                <Product 
                    id={faker.random.uuid()}
                    title={faker.commerce.productName()}
                    price={faker.commerce.price()}
                    rating={faker.random.number(5)}
                    image={faker.image.image()} 
                />
                <Product 
                    id={faker.random.uuid()}
                    title={faker.commerce.productName()}
                    price={faker.commerce.price()}
                    rating={faker.random.number(5)}
                    image={faker.image.image()} 
                />
            </div> 
            <div className="home__row">
                <Product 
                    id={faker.random.uuid()}
                    title={faker.commerce.productName()}
                    price={faker.commerce.price()}
                    rating={faker.random.number(5)}
                    image={faker.image.image()} 
                />
                <Product 
                    id={faker.random.uuid()}
                    title={faker.commerce.productName()}
                    price={faker.commerce.price()}
                    rating={faker.random.number(5)}
                    image={faker.image.image()} 
                />
                <Product 
                    id={faker.random.uuid()}
                    title={faker.commerce.productName()}
                    price={faker.commerce.price()}
                    rating={faker.random.number(5)}
                    image={faker.image.image()} 
                />
            </div> 
            <div className="home__row">
                <Product 
                    id={faker.random.uuid()}
                    title={faker.commerce.productName()}
                    price={faker.commerce.price()}
                    rating={faker.random.number(5,1)}
                    image={faker.image.image()} 
                />
            </div> 
        </div>
    )
}

export default Home
