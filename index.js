// 1. Создать строку из названий предметов написаных через запятую
// 2. Посчитать общее количество студентов и учителей на всех предметах
// 3. Получить среднее количество студентов на всех предметах
// 4. Создать массив из объектов предметов
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
// 6. Написать функцию, которая будет возвращать сумму всех чисел во всех массивах


// Пример сумма [[1,2], [3,2], [5, 6, 2], [4]] должна вернуть 25

const matrix = [[1,2], [3,2], [5, 6, 2], [4]]

const subjects = {
  mathematics: {
      students: 200,
      teachers: 6
  },
  biology: {
      students: 120,
      teachers: 6
  },
  geography: {
      students: 60,
      teachers: 2
  },
  chemistry: {
      students: 100,
      teachers: 3
  }
}


function keys(subjects) {
  return Object.keys(subjects).join(', ')
}

function sum(subjects) {
  let allStudents = 0;
  let allTeachers = 0;
  for(i = 0; i < Object.keys(subjects).length; i++) {
    allStudents += Object.values(subjects)[i].students;
    allTeachers += Object.values(subjects)[i].teachers;
  }
  let all = allStudents + allTeachers
  return 'students: ' + allStudents + ', ' + 'teachers: ' + allTeachers + ', ' + 'total: ' + all
}

function averageOfStudents(subjects) {
  let allStudents = 0;
  for(i = 0; i < Object.keys(subjects).length; i++) {
    allStudents += Object.values(subjects)[i].students;
  }
  return allStudents/Object.keys(subjects).length
}

function arrayOfSubjects(subjects) {
  let arr = []
  for(i in subjects) arr.push(subjects[i])
  return arr
}

function arrayOfName(subjects) {
  let mainArr = Object.entries(subjects);
  mainArr.sort((a, b) => b[1].teachers -  a[1].teachers)
  let arr = []
  for(i of mainArr) arr.push(i[0])
  return arr
}

function sumOfNumbers(matrix) {
  return matrix.flat(Infinity).reduce((a, b) => a + b)
}

console.log(keys(subjects))
console.log(sum(subjects))
console.log(averageOfStudents(subjects))
console.log(arrayOfSubjects(subjects)) 
console.log(arrayOfName(subjects))
console.log(sumOfNumbers(matrix))

