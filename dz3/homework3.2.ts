// 1. Создать строку из имен пользователей через запятую
// 2. Посчитать общее количество машин у пользователей
// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие образования
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие животных
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с
// названиями марок автомобилей через запятую


interface IUsers {
  name: string
  phone: string
  email: string
  animals?: Array<string>
  cars?: Array<string>
  hasChildren: boolean
  hasEducation: boolean
}


const users: Array<IUsers> = [
  {
    name: "Harry Felton",
    phone: "(09) 897 33 33",
    email: "felton@gmail.com",
    animals: ["cat"],
    cars: ["bmw"],
    hasChildren: false,
    hasEducation: true
  },
  {
    name: "May Sender",
    phone: "(09) 117 33 33",
    email: "sender22@gmail.com",
    hasChildren: true,
    hasEducation: true
  },
  {
    name: "Henry Ford",
    phone: "(09) 999 93 23",
    email: "ford0@gmail.com",
    cars: ["bmw", "audi"],
    hasChildren: true,
    hasEducation: false
  }
]


function GetAllNamesInString (users: Array<IUsers>): string {
  return users.map((el) => el.name).join(', ')
}


function GetAllTheCars(users: Array<IUsers>): number {
  let sum: number = 0
  for(let i of users) {
    if(i.cars) sum+= i.cars.length
  }
  return sum
}


function FilterPeopleHasEducation (users: Array<IUsers>): Array<IUsers> {
  return users.filter(el => el.hasEducation === true)
}


function FilterPeopleHasAnimals (users: Array<IUsers>): Array<IUsers> {
  return users.filter(el => el.animals)
}


function GetAllTheCarInString (users: Array<IUsers>): string {
  let stringAllCars: string = ''
  users.forEach((el) => {
    if(el.cars) stringAllCars += el.cars + ','
  }) 
  return stringAllCars.substring(0, stringAllCars.length-1)
}


console.log(GetAllNamesInString(users))
console.log(GetAllTheCars(users))
console.log(FilterPeopleHasEducation(users))
console.log(FilterPeopleHasAnimals(users))
console.log(GetAllTheCarInString(users))
