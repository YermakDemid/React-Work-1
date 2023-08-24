import React from 'react';
import styles from './cart.module.scss';

export default function Cart({
                               className = 'profile',
                               name,
                               tag,
                               location,
                               followers,
                               views,
                               likes
                             }) {
  return (
    <div key={name} className={`${styles[className]}`}>
      <div className={`${styles[`${className}__description`]}`}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          className={`${styles[`${className}__avatar`]}`}
        />
        <p className={`${styles[`${className}__name`]}`}>{name}</p>
        <p className={`${styles[`${className}__tag`]}`}>{tag}</p>
        <p className={`${styles[`${className}__location`]}`}>{location}</p>
      </div>
      <ul className={`${styles[`${className}__stats`]}`}>
        <li className={`${styles[`${className}__item`]}`}>
          <span className={`${styles[`${className}__label`]}`}>Followers</span>
          <span className={`${styles[`${className}__quantity`]}`}>{followers}</span>
        </li>
        <li className={`${styles[`${className}__item`]}`}>
          <span className={`${styles[`${className}__label`]}`}>Views</span>
          <span className={`${styles[`${className}__quantity`]}`}>{views}</span>
        </li>
        <li className={`${styles[`${className}__item`]}`}>
          <span className={`${styles[`${className}__label`]}`}>Likes</span>
          <span className={`${styles[`${className}__quantity`]}`}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
