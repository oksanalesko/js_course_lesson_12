"use strict"
if (confirm("Почати тестування?")) {
	// Введення даних, позначення величин

   let names = ["Olena", "Andrii", "Iryna", "Olga", "Bohdan", "Mariia", "Oleksandr", "Nataliia", "Taras", "Sofiia", "Dmytro"]
   console.log(`Початковий масив імен: ${names}`)

	// Обчислення результатів

   // Упорядковуємо масив методом включення

   function insertSort(arr) {
      for (let set = 1; set < arr.length; set++) {
         let current = arr[set]
         let index = set - 1
         while (index >= 0 && arr[index] > current) {
            arr[index + 1] = arr[index]
            index = index - 1
         }
         arr[index + 1] = current
      }
   }

   insertSort(names)
   console.log(`Впорядкований масив імен: ${names}`)

   // Виконуємо бінарний пошук імені «Olga»

   function binarySearch(arr, searchEl) {
      let start = 0
      let end = arr.length - 1
      while (start <= end) {
         const middle = Math.floor((start + end) / 2)
         if (arr[middle] === searchEl) return `знаходиться за індексом ${middle}`
         if (arr[middle] < searchEl) start = middle + 1
         if (arr[middle] > searchEl) end = middle - 1
      }
      return `не знайдено`
   }

	// Виведення результатів

	document.write(`<div class="container">`)
	document.write(`<p>Ім'я «Olga» ${binarySearch(names, 'Olga')}</p>`)
	document.write(`</div>`)
}
