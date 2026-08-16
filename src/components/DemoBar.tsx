import { site } from '../data/site'
import './DemoBar.css'

export function DemoBar() {
  return (
    <div className="demo-bar">
      <span>{site.demo.label}</span>
      <a href="#about">{site.demo.linkLabel}</a>
    </div>
  )
}
