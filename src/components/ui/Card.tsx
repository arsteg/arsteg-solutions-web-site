const Card = ({ children, className }) => (
  <div className={`rounded-lg border p-6 shadow-sm bg-white ${className}`}>
    {children}
  </div>
);

export default Card;
