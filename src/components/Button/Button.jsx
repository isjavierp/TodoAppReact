import './Button.css'

export const Button = ({ label, handleClick, className }) => {
    return (
      <button onClick={handleClick} className={className}>
        {label}
      </button>
    );
  };