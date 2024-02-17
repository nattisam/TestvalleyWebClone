import mainShortcuts from '../json/mainShortcuts.json'
import Shortcut from '../components/Shortcut'
import '../styles/MainShortcuts.css'

function MainShortcuts() {
    return(
        <div className='main-shortcuts-container'>
            <div className='main-shortcuts'>
                {mainShortcuts.map ((shortcut, index) => (
                    <Shortcut
                        key={index}
                        id={shortcut.mainsShortcutId}
                        title={shortcut.title}
                        img={shortcut.imageUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default MainShortcuts;