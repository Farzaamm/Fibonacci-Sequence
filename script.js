// iterative solution
const Fibonacci = (n) => {
    let fibs = []
    for(let i = 0; i < n; i++){
        if(i < 2){
            fibs.push(i)
        }else{
            fibs.push(fibs[i - 1] + fibs[i - 2])
        }
    }
    return fibs
}
// fibs(8) = [0, 1, 1, 2, 3, 5, 8, 13]
console.log(Fibonacci(8))

// recursive solution (learned from Josh Smith)
const fibsRec = (n, sequence = [0, 1]) => {
    if(sequence.length >= n){
        return sequence.slice(0, n)
    }
    
    const newNum = sequence.at(-1) + sequence.at(-2)
    sequence.push(newNum)
    return fibsRec(n, sequence)
    
}