// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
//
//     1. Создать строку из названий стран через запятую
//     2. Посчитать общее количнство людей в данном массиве стран.
//     3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.
//     4. Получить массив валют.
//     5. Получить массив городов, отсортированных в алвавитном порядке.
//     6. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.


interface ICountries {
  country: string
  abbreviation: string
  city: string
  currency_name: string
  population: number
}


const countries: Array<ICountries> = [
  {
    country: "United Arab Emirates",
    abbreviation: "AE",
    city: "Abu Dhabi",
    currency_name: "Arab Emirates Dirham",
    population: 9630959
  },
  {
    country: "Poland",
    abbreviation: "PL",
    city: "Warszawa",
    currency_name: "Polish Zloty",
    population: 37974750
  },
  {
    country: "Russian Federation",
    abbreviation: "RU",
    city: "Moscow",
    currency_name: "Russian Ruble",
    population: 144478050
  }
]


function GetAllCountriesInString (countries: Array<ICountries>): string {
  return countries.map((el) => el.country).join(', ')
}


function GetAllThePeopleInCountries(countries: Array<ICountries>): number {
  let sumAllPeople: number = 0
  for(let i of countries) sumAllPeople+= i.population
    return sumAllPeople
}


function SortArrayOfCountries (countries: Array<ICountries>): Array<string> {
  return countries.map((el) => el.country).sort()
}


function GetArrayOfCurrencies (countries: Array<ICountries>): Array<string> {
  return countries.map((el) => el.currency_name)
}


function SortArrayOfCities (countries: Array<ICountries>): Array<string> {
  return countries.map((el) => el.city).sort()
}


function GetAveragePeopleInCountries(countries: Array<ICountries>): number {
  let averagePeople: number = 0
  let count: number = 0
  for(let i of countries) {
    averagePeople+= i.population
    count++
  }
  return Math.round(averagePeople/count)
}


console.log(GetAllCountriesInString(countries))
console.log(GetAllThePeopleInCountries(countries))
console.log(SortArrayOfCountries (countries))
console.log(GetArrayOfCurrencies (countries))
console.log(SortArrayOfCities (countries))
console.log(GetAveragePeopleInCountries(countries))
