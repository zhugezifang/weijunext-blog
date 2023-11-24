import { useState } from 'react'

export default function Caterpillar({ text, className }) {
  const [selected, setSelected] = useState(null)

  const chars = text.split('')
  return (
    <div className={`flex ${className}`} onMouseLeave={() => { setSelected(null) }}>
      {chars.map((c, i) => (
        <div key={i} className={`flex bg-[#4472c4] ${i === 0 ? 'rounded-s-lg' : ''} ${i === chars.length - 1 ? 'rounded-e-lg' : ''} border-top border-bottom border-2 border-brand bg-primary text-background -ml-[2px] pb-[0.1rem] px-2 transition-transform ${selected === i ? '-translate-y-1' : ''}`} onMouseEnter={() => { setSelected(i) }}>
          <span>{c}</span>
        </div>
      ))}
    </div>
  )
}
