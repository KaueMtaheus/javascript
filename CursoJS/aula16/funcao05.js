//RECURSIVIDADE 
function fatorial(n) {
    if (n == 1){
        return 1
    }else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

/*

5! = 5 x 4 x 3 x 2 x 1     <-- cinco fatorial é a mesma coisa q 
5! = 5 x 3!            <-- fatorial de um numero pode ser baseado no fatorial de outro 

ex : n! = n x (n-1)!    <-- de uma forma generica  fatorial de n é sempre n-1 fatorial 
1! = 1                 <-- fatorial de 1 é 1 matematicamente 

*/