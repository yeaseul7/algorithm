//연속된 수의 합
function solution(num, total) {
    const sumBothEnds = total*2/num;
    console.log(sumBothEnds, 'sumBothEnds');
    const strat = (sumBothEnds-2)/2;
    console.log(strat, 'strat');
    let result = [];
    for(let i = 0; i < num; i++){
        console.log(strat+i, 'strat+i');
        result.push(strat+i);
    }
    return result;
}
// console.log(solution(3, 12));
// console.log(solution(5, 15));
console.log(solution(4, 14));
// console.log(solution(5, 5));
// console.log(solution(5, 15));
// console.log(solution(5, 15));