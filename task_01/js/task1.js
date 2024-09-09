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
	
	function bubbleSort(arr) {
		let changed
		do {
			changed = false
			for (let i = 1; i < arr.length; i++) {
				checkCount++
				if (arr[i - 1] > arr[i]) {
					let temp = arr[i - 1]
					arr[i - 1] = arr[i]
					arr[i] = temp
					changed = true
					swapCount++
					showArray(arr)
				}
			}
		} while (changed);
	}

	function showArray(arr) {
		document.write(`<p>${arr}</p>`)
	}

	bubbleSort(array)
	console.log(array)

	// крок 2. Виведення результатів
   

	document.write(`<div class="container">`)
	document.write(`<p>Кількість порівнянь: ${checkCount}</p><br>`)
	document.write(`<p>Кількість обмінів: ${swapCount}</p><br>`)
	document.write(`</div>`)
}
