import React, { useState, useEffect } from 'react';
import '../styles/Collection.css';
import { Slide } from 'react-slideshow-image';

function Collection(props) {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 1000);
        };

        handleResize(); // Call it initially
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMobileView) {
        return (
            <div className="collection">
                <div className='left-collection'>
                    <p>{props.title}</p>
                </div>
                <div className='right-collection'>
                    <div className="static-collection">
                        {props.items.map((product, index) => (
                            <div key={index} className="collection-product">
                                <div className='product-img-container'>
                                    <img key={product.uuid} src={product.publication.media[0].uri} alt="Media" />
                                </div>
                                <p className='title'>{product.publication.title}</p>
                                <p className='price'>
                                    {product.publication.discounts.length === 0
                                        ? product.publication.priceInfo.price
                                        : (
                                            <>
                                                <p className="discount-rate">{product.publication.priceInfo.discountRate}%</p>
                                                {product.publication.priceInfo.discountPrice}
                                            </>
                                        )
                                    }
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="collection">
                <div className='left-collection'>
                    <p>{props.title}</p>
                </div>
                <div className='right-collection'>
                    {props.items.length < 5 ? (
                        <div className="static-collection">
                            {props.items.map((product, index) => (
                                <div key={index} className="collection-product">
                                    <div className='product-img-container'>
                                        <img key={product.uuid} src={product.publication.media[0].uri} alt="Media" />
                                    </div>
                                    <p className='title'>{product.publication.title}</p>
                                    <p className='price'>
                                        {product.publication.discounts.length === 0
                                            ? product.publication.priceInfo.price
                                            : (
                                                <>
                                                    <p className="discount-rate">{product.publication.priceInfo.discountRate}%</p>
                                                    {product.publication.priceInfo.discountPrice}
                                                </>
                                            )
                                        }
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <Slide
                            easing="ease"
                            duration={3000}
                            transitionDuration={300}
                            indicators={true}
                            arrows={false}
                            autoplay={true}
                            autoplayInterval={props.autoplay}
                            infinite={true}
                            slidesToShow={4}
                        >
                            {props.items.map((product, index) => (
                                <div key={index} className="collection-product">
                                    <div className='product-img-container'>
                                        <img key={product.uuid} src={product.publication.media[0].uri} alt="Media" />
                                    </div>
                                    <p className='title'>{product.publication.title}</p>
                                    <p className='price'>
                                        {product.publication.discounts.length === 0
                                            ? product.publication.priceInfo.price
                                            : (
                                                <>
                                                    <p className="discount-rate">{product.publication.priceInfo.discountRate}%</p>
                                                    {product.publication.priceInfo.discountPrice}
                                                </>
                                            )
                                        }
                                    </p>
                                </div>
                            ))}
                        </Slide>
                    )}
                </div>
            </div>
        );
    }
}

export default Collection;
