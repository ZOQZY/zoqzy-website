import logoMark from '../assets/logo.png'

export default function Logo({ height = 28 }) {
  return (
    <img
      src={logoMark}
      alt=""
      aria-hidden="true"
      style={{ height, width: 'auto', display: 'block' }}
    />
  )
}
