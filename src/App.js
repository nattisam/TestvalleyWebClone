import Header from './sections/Header';
import MainBanners from './sections/MainBanners';
import MainShortcuts from './sections/MainShortcuts';
import MainCollections from './sections/MainCollections';
import './App.css';

function App() {
  return (
    <main className='app-container'>
      <div className='app'>
        <Header />
        <MainBanners />
        <MainShortcuts />
        <MainCollections />
      </div>
    </main>
  );
}

export default App;
