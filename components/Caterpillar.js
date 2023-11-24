export default function Caterpillar({ text, className, bgColor }) {
  const chars = text.split('');
  return (
    <div className={`flex ${className}`}>
      {chars.map((c, i) => (
        <div key={i} className={`flex ${bgColor || 'bg-[#4472c4]'} ${i === 0 ? 'rounded-s-lg' : ''} ${i === chars.length - 1 ? 'rounded-e-lg' : ''} border-top border-bottom border-2 border-brand bg-primary text-background -ml-[2px] pb-[0.1rem] px-2 transition duration-300 ease-in-out hover:-translate-y-1`}>
          <span>{c}</span>
        </div>
      ))}
    </div>
  );
}
