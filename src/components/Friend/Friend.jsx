import React from 'react';
import styles from './friend.module.scss'

export default function Friend({className = 'friend-list', friends}) {
  return (
    <ul className={`${styles[`${className}`]}`}>
      {friends.map(item => (
        <li key={item.id} className={`${styles[`${className}__item`]}`}>
          <span className={`${styles[`${className}__status`]} ${item.isOnline
            ? `${styles[`${className}__status--green`]}`
            : `${styles[`${className}__status--red`]}`}`}></span>
          <img className={`${styles[`${className}__avatar`]}`} src={item.avatar} alt="User avatar" width="48"/>
          <p className={`${styles[`${className}__name`]}`}>{item.name}</p>
        </li>
      ))}
    </ul>
  )
};
