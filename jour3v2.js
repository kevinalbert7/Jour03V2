// 01 Nombre pairs

var min = 11
var max = 47
var sum = 0

for(var i = 11; i < 47; i++){
    var even = i % 2 === 0
    if(even){
        console.log(i)
        sum = sum + i
    }
}

console.log(sum)

// 02 Puissance et racine carrée
console.log("------------------ 02-------------------")

var min = 109
var max = 588
var sum = 0

for(var i = 109; i < 588; i++){
    var odd = i % 2 === 1
    if(odd){
        console.log(i)
        sum = sum + i
    }
}
console.log(sum)

// 03 Puissance et racine carrée
console.log("------------------ 03-------------------")

var numbers = [1, 2, 3, 4, 5]
var squares = []
var roots = []

for( var i = 0; i < numbers.length; i++){
    console.log(i)
    var puissance = numbers[i] * numbers[i]
    squares.push(puissance) 
}
console.log(squares)

for(var i = 0; i < squares.length; i++){
    console.log(i)
    var racine = Math.sqrt(squares[i])
    console.log("résultat de : ", racine)
    roots.push(racine)
}
console.log(roots)


// 04 Table de multiplication v1
console.log("------------------ 04-------------------")

max = 30

for(var i = 0 ; i <= max; i++){
    var multiple = i % 3 == 0
    if(multiple){
        console.log(i)
    }
}

// 5  Table de multiplication v2
console.log("------------------ 05-------------------")

// for( var i = 0; i < 11; i++){
//     console.log(i)
//     for(var j = 0; j < 11; j++){
//         var total = " "
//     }
// }


// 6  Factorielle v1
// console.log("------------------ 06-------------------")

// var numbers = [1,2,3,4,5,6,7]
// var i = 0

// for(var i = 0; i < 7; i++){
//     var sum = sum * (i + 1)
//     console.log(sum)
// }

// 8 Somme des carrés
console.log("------------------ 08-------------------")

var number = 5
var i = 0
var sumdescarrés = 0
console.log("nombres dans le tableau : ", number.length)

for( var i = 5; i <= 10; i++){
    var carré = i * i
    
    sumdescarrés = sumdescarrés + carré
    console.log("résultat de la somme : ", sumdescarrés)
}

// 9 Comptons
console.log("------------------ 09-------------------")

var i = 100

for(var i = 100; i <= 1000; i++){
    var modulo = 1000 % 7 === 0
    if(1000 % 7 === 0){
    console.log("résultat du modulo : ", modulo)
    }
}

