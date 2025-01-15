

function fibs(n){
    let arr = []
    for (let i = 0; i <= n; i++) {
        if (i < 2){
            arr.push(i);
        }else{
            arr.push(arr[i-1] + arr[i-2]);
        }
    }
    return arr;
}

// function fibsRec(n){
//     let arr = []
//     if (n < 2){
//         arr.push(n)
//         return arr;
//     }else{
//         const right = fibsRec(n-2);
//         const left = fibsRec(n-1);
//         const sumRight = right.reduce((prev, current)=>{ return prev + current});
//         const sumLeft = left.reduce((prev, current)=>{ return prev + current});
//         arr.push(...left, sumRight + sumLeft);
//         return  arr;
//     }
// }

function fibsRec(num) {
    if (num === 0) {
        return [0];
    } else if (num === 1) {
        return [0, 1];
    } else {
        const sequence = fibsRec(num - 1);                                                  // build sequence until previous element
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);       // use last two element to calculate (and push) new element
        return sequence;
    }
}

console.log(fibs(4));
console.log(fibsRec(4));