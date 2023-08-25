import { Invoice } from "./classes/Invoice"

const invOne = new Invoice('Anthony', 'worked on Bluelight website', 120)
const invTwo = new Invoice('Allename', 'worked on Popu website', 250)
console.log(invOne, invTwo)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
  console.log(inv.client, inv.amount, inv.format())
})




const form = document.querySelector('.new-item-form') as HTMLFormElement

//inputs
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount= document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  console.log(
    type.value,
    toFrom.value,
    details.value,
    amount.valueAsNumber
  )
})