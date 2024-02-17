import '../styles/Shortcut.css';

function Shortcut(props) {
    return(
        <div className="shortcut-container">
            <img
                src={props.img}
                alt='shortcut img'
            />
            <p>{props.title}</p>
        </div>
    )
}

export default Shortcut;