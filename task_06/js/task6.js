"use strict"
if (confirm("Почати тестування?")) {
	// Введення даних, позначення величин

   let names = ["Teo", "Andrii", "Ishtvan", "Olga", "Bohdan", "Mariia", "Lee", "Oliviia", "Oleksandr", "Gabriella", "Taras", "Sofiia", "Dmytro"]
   console.log(`Початковий масив імен: ${names}`)

	// Обчислення результатів

   // Упорядковуємо масив методом включення

   function insertSort(arr) {
      for (let set = 1; set < arr.length; set++) {
         let current = arr[set]
         let index = set - 1
         while (index >= 0 && arr[index].length > current.length) {
            arr[index + 1] = arr[index]
            index = index - 1
         }
         arr[index + 1] = current
      }
   }

   insertSort(names)
   console.log(`Впорядкований масив імен: ${names}`)

   // Виконуємо бінарний пошук імені «Olga»

   function binarySearch(arr, searchElLength) {
      let start = 0
      let end = arr.length - 1
      while (start <= end) {
         const middle = Math.floor((start + end) / 2)
         if (arr[middle].length === searchElLength) return `знаходиться за індексом ${middle}`
         if (arr[middle].length < searchElLength) start = middle + 1
         if (arr[middle].length > searchElLength) end = middle - 1
      }
      return `не знайдено`
   }

	// Виведення результатів

	document.write(`<div class="container">`)
	document.write(`<p>Ім'я з довжиною 5 символів ${binarySearch(names, 5)}</p>`)
	document.write(`</div>`)
}