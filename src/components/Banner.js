import '../styles/Banner.css';

function Banner(props) {
    return(
        <div className="banner-container">
            <img
                src={props.img}
                alt='banner img'
            />
        </div>
    )
}

export default Banner;