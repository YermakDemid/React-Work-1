import React from 'react';
import styles from './section.module.scss'

export default function Section({children, className = 'section'}) {
  return (
    <section className={`${styles[`${className}`]}`}>
      <div className={`${styles[`${className}__container`]}`}>
        {children}
      </div>
    </section>
  )
};
