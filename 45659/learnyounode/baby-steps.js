'use strict'

let sum = 0;

for(let i = 2; i < process.argv.length; i++)
{
	sum += +process.argv[i] //usar o + como prefixo para forçar a conversão de string para inteiro
}

console.log(sum)

/*
Solução dada

	let result = 0

    for (let i = 2; i < process.argv.length; i++) {
      result += Number(process.argv[i])
    }

    console.log(result)

*/