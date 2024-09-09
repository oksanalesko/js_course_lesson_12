"use strict"
if (confirm("Почати тестування?")) {
   // Крок 0. Введення даних, позначення величин

   let checkCount = 0
   let swapCount = 0

   function createArr(number) {
		let arr = []
		for (let i = 0; i < number; i++) {
			arr.push(Math.floor(Math.random() * 201 - 100))
		}
		return arr
	}
	let array = createArr(30)
	// console.log(array)
   
   // Крок 1. Обчислення результатів

   function cocktailSort(arr) {
      let leftIndex = 0
      let rightIndex = arr.length - 1

      while (leftIndex < rightIndex) {
         let changed = false
         for (let index = leftIndex; index <= rightIndex; index++) {
            checkCount++
            if (arr[index - 1] > arr[index]) {
               let temp = arr[index - 1]
               arr[index - 1] = arr[index]
               arr[index] = temp
               changed = true
               swapCount++
               showArray(arr)
            }
         }
         rightIndex--
         changed = false
         for (let index = rightIndex; index > leftIndex; index--) {
            checkCount++
            if (arr[index - 1] > arr[index]) {
               let temp = arr[index - 1]
               arr[index - 1] = arr[index]
               arr[index] = temp
               changed = true
               swapCount++
               showArray(arr)
            }
         }
         leftIndex++
         if (changed === false) break
      }
   }

   cocktailSort(array)
   console.log(array)

   function showArray(arr) {
		document.write(`<p>${arr}</p>`)
	}

   // крок 2. Виведення результатів

   document.write(`<div class="container">`)
	document.write(`<p>Кількість порівнянь: ${checkCount}</p><br>`)
	document.write(`<p>Кількість обмінів: ${swapCount}</p><br>`)
	document.write(`</div>`)
}