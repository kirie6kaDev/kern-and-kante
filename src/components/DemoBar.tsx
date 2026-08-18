import { site } from '../data/site'
import './DemoBar.css'

export function DemoBar() {
  return (
    <div className="demo-bar">
      <span>{site.demo.label}</span>
      <a href="/projekte/haus-eiche">{site.demo.linkLabel}</a>
    </div>
  )
}
