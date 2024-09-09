"use strict"
if (confirm("Почати тестування?")) {
   // Введення даних, позначення величин

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

   // Обчислення результатів

   function insertSort(arr) {
      for (let set = 1; set < arr.length; set++) {
         let current = arr[set]
         let index = set - 1
         while (index >= 0 && arr[index] > current) {
            checkCount++
            arr[index + 1] = arr[index]
            index = index - 1
            swapCount++
            showArray(arr)
         }
         arr[index + 1] = current
         checkCount++
      }
   }

   insertSort(array)
   console.log(array)

   function showArray(arr) {
		document.write(`<p>${arr}</p>`)
	}

   // Виведення результатів

   document.write(`<div class="container">`)
	document.write(`<p>Кількість порівнянь: ${checkCount}</p><br>`)
	document.write(`<p>Кількість обмінів: ${swapCount}</p><br>`)
	document.write(`</div>`)
}
