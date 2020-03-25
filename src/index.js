import { sum } from './sum'

const textNode = document.createTextNode(`${sum(1, 2)}`)
const p = document.createElement('p')
p.appendChild(textNode)
document.body.appendChild(p)
