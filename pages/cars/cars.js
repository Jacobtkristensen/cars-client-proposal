import { API_URL } from "../../settings.js"
import {sanitizeStringWithTableRows,handleHttpErrors, makeOptions} from "../../utils.js"
const URL = API_URL + "/cars"

export async function initCars() {
  //const cars = await fetch(URL).then((res)=>handleHttpErrors(res))
  const options = makeOptions("GET",null,true)
  const cars = await fetch(URL, options).then(res => res.json())

  const tableRows = cars.map(car => `
  <tr>
  <td>${car.id}</td>
  <td>${car.brand}</td>
  <td>${car.model}</td>
  <td>${car.pricePrDay}</td>
  <td>${car.bestDiscount}</td>
  </tr>
  `)
  const tableRowsAsStr = tableRows.join("")

  document.getElementById("table-rows").innerHTML = sanitizeStringWithTableRows(tableRowsAsStr)
}