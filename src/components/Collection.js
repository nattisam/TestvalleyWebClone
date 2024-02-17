import '../styles/Collection.css'
import { Slide } from 'react-slideshow-image';

function Collection(props) {
    return (
        <div className="collection">
            <div className='left-collection'>
                <p>{props.title}</p>
            </div>
            <div className='right-collection'>
                {props.items.length >= 5 ? (
                    <Slide
                        easing="ease"
                        duration={3000}
                        transitionDuration={300}
                        indicators={true}
                        arrows={false}
                        autoplay={true}
                        autoplayInterval={3000}
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
                ) : (
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
                )}
            </div>
        </div>
    )
}

export default Collection;
