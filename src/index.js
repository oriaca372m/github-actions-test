import { sum } from './sum'

const textNode = document.createTextNode(`${sum(1, 3)}`)
const p = document.createElement('p')
p.appendChild(textNode)
document.body.appendChild(p)
