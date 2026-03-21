export default function PlaceholderImage({ label, className = '', tone = 'default' }) {
  return (
    <div className={`placeholder-image placeholder-image--${tone} ${className}`.trim()}>
      <span>{label}</span>
    </div>
  );
}
