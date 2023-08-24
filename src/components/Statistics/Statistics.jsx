import React from 'react';
import styles from './statistics.module.scss'

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function Statistics({className = 'statistics', title, statsObj}) {
  return (
    <div className={`${styles[`${className}`]}`}>
      <h2 className={`${styles[`${className}__title`]}`}>{title}</h2>
      <ul className={`${styles[`${className}__list`]}`}>
        {statsObj.map(item => (
          <li key={item.id} className={`${styles[`${className}__item`]}`} style={{ backgroundColor: getRandomColor() }}>
            <span className={`${styles[`${className}__label`]}`}>{item.label}</span>
            <span className={`${styles[`${className}__percentage`]}`}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </div>
  )
};
