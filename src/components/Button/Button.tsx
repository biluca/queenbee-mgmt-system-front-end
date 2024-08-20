import './style.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
  }

export function Button({ children, className, ...rest }: ButtonProps) {
    return (
      <button
        {...rest}
        className='Button'
      >
        {children}
      </button>
    );
  }