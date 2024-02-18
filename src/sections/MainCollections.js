import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import '../styles/MainBanners.css';
import mainCollectoins from '../json/mainCollections.json'
import '../styles/MainCollections.css'
import Collection from '../components/Collection';

function MainCollections() {
  
const filteredData = mainCollectoins.items.filter(item => {
  return item.type === "SINGLE" && item.viewType === "TILE";
});

const rand = Math.random() * (3000);
  
  return (
    <div className='main-collections-container'>
      <div className='main-collections'>
        {filteredData.map(item => (
          <Collection
            key={item.id}
            title={item.title}
            items={item.items}
            autoplay={rand}
          />
        ))}
      </div>
    </div>
  );
}

export default MainCollections;