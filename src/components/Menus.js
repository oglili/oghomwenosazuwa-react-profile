import React, { useState } from 'react';
import Menu from './Menu';
import { items } from '../data';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function Menus() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [isActive, setIsActive] = useState(null);

  const filterItems = (category) => {
    setIsActive(category);
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2 id='portafoglio'>portafoglio</h2>
          <div className='underline'></div>
        </div>
        <div className='btn-container'>
          {categories.map((category, index) => {
            return (
              <button
                type='button'
                className={`filter-btn ${isActive === category && 'active'}`}
                key={index}
                onClick={(e) => filterItems(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default Menus;
