import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, type }) {
  const base = `inline-block text-sm
    rounded-full bg-teal-600 font-semibold 
    uppercase tracking-wide text-stone-800
    transition-colors duration-300 hover:bg-teal-500
    disabled:cursor-not-allowed`;

  const styles = {
    primary: base + ` px-4 py-3 sm:px-6 sm:py-4`,
    small: base + ` py-2 px-4 md:px-5 md:py-2.5 text-xs`,
    secondary: `inline-block text-sm rounded-full border-2 border-stone-300 font-semibold 
    uppercase tracking-wide text-stone-400
    transition-colors duration-300 hover:bg-stone-300
    hover:text-stone-800
    disabled:cursor-not-allowed px-4 py-2.5 sm:px-6 sm:py-3.5`,
  };

  if (to) {
    return (
      <Link to="/order/new" className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
