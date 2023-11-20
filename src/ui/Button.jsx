import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
function Button({ children, disabled, to, type, onClick }) {
  const base =
    'text-sm transition-colors-300 focus:inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 ring-offset-2 duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 disabled:cursor-not-allowed';
  const styles = {
    primary: base + ' md:px-6 md:py-4 px-4 py-3',
    secondary:
      'text-sm transition-colors-300 focus:inline-block rounded-full font-semibold uppercase tracking-wide text-stone-400 ring-offset-2 duration-300 hover:bg-stone-800 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:text-stone-800 disabled:cursor-not-allowed md:px-6 md:py-3 px-4 py-3.5 border-2 border-stone-300',
    small: base + ' md:px-5 md:py-2.5 px-4 py-2 text-xs',
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
