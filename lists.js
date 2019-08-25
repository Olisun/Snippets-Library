// FROM DEV - Essential JavaScript code for lists


// BASICS
// Create a list

let items = []

// Add element to the front or back

let newLength = items.unshift("abc")
let newLength = items.push("def")

// Pop element off front or back

let start = items.shift()
let end = items.pop()

// Forward iterate over elements

for (const item of items)
  console.log(item)

// Also works

items.forEach(item => console.log(item))

// Get the length of a list

let length = items.length

// Test if empty. May need extra logic for special cases,
// such as null, undefined, or not iterable

if (items.length == 0)
  console.log("list is empty")

// Also works

console.log(items.length == 0 ? "list is empty" : "list is not empty")


// LOCATION BASED OPERATIONS
// Get item at location

let thirdItem = items[2]

// Insert an item at location

items.splice(3, 0, "abc")

// Remove an item from a location

let removedItems = items.splice(2, 1)

// Replace/Assign item at location

items[1] = "def"


// SORTING AND SEARCHING
// Find an item

let index = items.indexOf(item) // -1 if not found

// Find and remove an item
let index = items.indexOf(item)
if (index > -1)
  items.splice(index, 1)

// Find last matching item

let index = items.lastIndexOf(item) // -1 if not found

// Sort by natural order
// in-place sort

items.sort()

// Sort with custom comparator

let items = [
  ['a', 10],
  ['b', 7],
  ['c', 13],
  ['d', 1]
]
items.sort((a, b) => a[1] - b[1])
  // produces [ [ 'd', 1 ], [ 'b', 7 ], [ 'a', 10 ], [ 'c', 13 ] ]


// SEGMENT MANIPULATION
// Split the list at arbitrary location

let left = items.slice(0, 4)
let right = items.slice(4, items.length)

// Multiple splits based on a match

let items = ['a', 'b', 'c', 'd', 'b', 'e']
let splits = groupBy(items, item => item == 'b').filter(group => group.indexOf('b') == -1)
  // produces [['a'], ['c','d'], ['e']]

// groupBy is not built in. Groups items by whether or not they 
// match the `isSeparator` function. The result is an array of arrays

const groupBy = (items, isSeparator) => {
  const groups = []

  let rest = items
  while (rest.length > 0) {
    const { group, leftover } = nextGroup(rest, isSeparator)
    groups.push(group)
    rest = leftover
  }

  return groups
}

const nextGroup = (items, isSeparator) => {
  const foundIndex = items.findIndex(isSeparator(items[0]) != isSeparator(item))
  const endIndex = foundIndex > -1 ? foundIndex : items.length

  return { group: items.slice(0, endIndex), leftover: items.slice(endIndex) }
}

// Clear the list (in place)

items.length = 0

// Remove segment
// delete 2 items starting with the second item (index 1)

let removedItems = items.splice(1, 2)

// Concatenate lists

let combined = items.concat(moreItems)

// Insert list at location

items.splice(index, 0, ...moreItems) //not a good idea for large lists... watch the stack!

//Get a sublist
//sublist starting at position 1 up to, but excluding, position 3

let slice = items.slice(1, 3)


// MORE ITERATION
// Backward

for (const item of items.reverse())
  console.log(item)

// Partial segment iteration

for (const item of items.slice(1, 4))
  console.log(item)

// Skipping elements
// step from element at index 1 to 6 (exclusive) by 2

items.slice(1, 6).filter((item, index) => index % 2 == 0).map(item => console.log(item))


// CREATION
// Create from a static list of items

let items = ['abc', 'def', 'ghi']

// Create a range of numbers
// a list of numbers from 10..20 (exclusive)

let numbers = [...Array(10).keys()].map(n => n + 10)

// Also works

let numbers = []
for (let i = 10; i < 20; i++)
  numbers.push(i)


// DATA MANIPULATION
// Mapping

let numbersTimes10 = numbers.map(n => n * 10)

// Filtering

let evenNumbers = numbers.filter(n => n % 2 == 0)

// Fold / Reduce
// If a default value is not supplied to reduce,
// then reducing an empty list will produce a TypeError at runtime

let total = numbers.reduce((acc, n) => acc + n, 0)

// Joining string representations of items

let joined = items.reduce((left, right) => left + '/' + right, '')

// Zip

let results = zip([
    [1, 2, 3],
    ['a', 'b', 'c'],
    ['x', 'y', 'z']
  ])
  // produces [[1,'a','x'],[2,'b','y'],['3','c','z']]

// zip is not built in

const zip = rows => rows[0].map((val, colIndex) => rows.map(row => row[colIndex]))

// alternative version of zip (takes each array as separate parameter)

let results = zip([1, 2, 3], ['a', 'b', 'c'], ['x', 'y', 'z'])

const zip = (...rows) => rows[0].map((val, colIndex) => rows.map(row => row[colIndex]))

// to alternate items into one list use reduce

zip([0, 2, 4], [1, 3, 5]).reduce((acc, item) => acc.concat(item)) //[0,1,2,3,4,5]


// ADVANCED
// Swap elements at two locations

[items[3], items[5]] = [items[5], items[3]]

// Reserve capacity
// JavaScript arrays do not expose capacity. In fact, 
// they are not arrays in the usual sense, since items 
// are not stored contiguously in memory. 
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
// if you need something closer to the metal

// Replace content in a list in place

replace(mylist, anotherList)

const replace = (target, source) => {
  target.length = 0
  return target.splice(0, 0, ...source) // not a good idea for large lists... watch the stack!
}

// Compare two arrays

JSON.stringify(items1) === JSON.stringify(items2) //simple-minded approach

// Search a sorted list

const foundIndex = findFirst(sortedNumbers, 4)
if (foundIndex !== -1)
  console.log(`Found at ${foundIndex}`)

const findFirst = (sortedItems, target) => {
  const index = bisectLeft(sortedItems, target)
  return index < sortedItems.length && sortedItems[index] === target ? index : -1
}

// bisectLeft is not built in. Performs a binary search 
// for the left-most matching item. If the item isn't found, 
// returns the index where it should go.
// Comparison only works properly if `valueOf` has been implemented.

const bisectLeft = (sortedItems, target) => {
  let start = 0
  let end = sortedItems.length

  while (start < end) {
    let mid = Math.trunc((start + end) / 2)
    if (sortedItems[mid] < target)
      start = mid + 1
    else
      end = mid
  }

  return start
}

// Multiple iterators at the same time

let itemsA = [1, 2, 3]
let itemsB = ['a', 'b', 'c', 'd', 'e', 'f']

let iterA = itemsA[Symbol.iterator]()
let iterB = itemsB[Symbol.iterator]()

while (true) {
  let a = iterA.next()
  let b = iterB.next()

  if (a.done || b.done)
    break

  console.log(a.value + ', ' + b.value)
}


// APPENDIX A: ITERATION
// Backward

for (const item of reverseGenerator(items))
  console.log(item)

const reverseGenerator = function*(items) {
  for (let i = items.length - 1; i >= 0; i--)
    yield items[i]
}

// Partial segment iteration

for (const item of sliceGenerator(items, 1, 4))
  console.log(item)

// Skipping elements
// step from element at index 1 to 6 (exclusive) by 2

for (const item of sliceGenerator(items, 1, 6, 2))
  console.log(item)

const sliceGenerator = function*(items, start = 0, end = items.length, step = 1) {
  for (let i = start; i < end; i += step)
    yield items[i]
}


// APPENDIX B: MUTABILITY
// Some of these examples modify the array in place whereas others return a copy of the array with the desired changes. The following operations change the array in place:

// push, pop, unshift, shift, splice, sort, reverse
// assign new value to array at index, e.g. items[index] = newValue
// reset array to empty, e.g. items.length = 0
// swap, e.g. [items[3], items[5]] = [items[5],items[3]]
// These operations don't modify the original array:

// slice, concat (make shallow copy of original array)
// map, filter, reduce
// map, filter, and reduce could theoretically be used to modify the contents of the original array, but this is a bad practice and should be avoided.