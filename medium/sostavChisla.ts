/**
 * Написать функцию sostavChisla(massivChisel: number[], chislo: number),
 которая бы находила все возможные комбинации чисел из massivChisel,
 сумма которых равна chislo. При этом:
 1) massivChisel содержит, только уникальные положительные числа (> 0)
 2) в комбинации не должно быть повторений чисел
 3) все комбинации должны быть уникальными

 Для проверки работоспособности функции запустить runTests()

 @param massivChisel: number[]
 @param chislo: number[]
 @return Array<Array<number>>
 */
function sostavChisla(massivChisel: number[], chislo: number) {
  const result: number[][] = [];

  const sumAllNumbers = massivChisel.reduce((startNumber, nextNumber) => {
    return startNumber + nextNumber
  })

  if (sumAllNumbers < chislo) {
    return result
  }

  const arr = massivChisel.filter(number => number <= chislo).sort((a,b) => a - b);
  const length = arr.length;

  console.log(arr)

  for (let i = 0; i < length; i++) {
    const localResult = [arr[i]];
    let localSum = arr[i]

    console.log('localResult start', localResult)
    for (let j = i+1; j < length; j++) {
      if (i === length - 1) {
        return
      }
      console.log('i => ', i)
     localResult.push(arr[j]);
     console.log('localResult in j loop', localResult)

     const sum = localSum + arr[j];
     console.log('localSum =', localSum)
      console.log('arr[j] =', arr[j] )
     console.log('sum => ', sum)

     if (sum === chislo) {
       result.push(localResult)

       continue
     }

     if (sum > chislo) {
       console.log('sum > chislo (5)')
       console.log('j = ', j)
       localResult.pop();
       localResult.pop();

       localSum = arr[i]
       j -= 1

       continue
     }

      localSum += arr[j];
     console.log('sum < chislo, идем дальше j++')
    }
  }


  return result;
}


// console.log(sostavChisla([1, 2, 3, 4, 5, 6, 7, 8], 8)) //  [[1, 3, 4], [1, 2, 5], [3, 5], [2, 6], [1, 7], [8]]
console.log(sostavChisla([1,2,3,4], 5)) //  [[2, 3], [4, 1]]
// console.log(sostavChisla([8, 2, 3, 4, 6, 7, 1], 99)) // []


/*
*  {
      chislo: 5,
      massivChisel: [8, 2, 3, 4, 6, 7, 1],
      result: [[2, 3], [4, 1]]
* */