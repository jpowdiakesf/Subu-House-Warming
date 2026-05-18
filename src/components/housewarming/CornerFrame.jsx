export default function CornerFrame({ children, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      {/* Top-left corner */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30" />
      {/* Top-right corner */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30" />
      {/* Bottom-left corner */}
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30" />
      {/* Bottom-right corner */}
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30" />
      {children}
    </div>
  );
}