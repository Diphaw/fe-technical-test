export default function Card({ children, className, ...props }) {
  return <div 
  className={`block rounded-xl ${className}`}
  {...props}
  >{children}</div>;
}
