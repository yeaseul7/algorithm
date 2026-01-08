//다음에 올 숫자

function solution(common) {
    let result = 0;
    const commonLength = common.length;
    const sum = common.reduce((acc, curr) => acc + curr, 0);
    //등차수열 합 공식
    const isDiff = (commonLength/2)*(common[0]+common[commonLength-1]) === sum 
    if(isDiff){
        let d = common[1]-common[0];
        result = common[commonLength-1]+d;
    }else{
        let r = common[1]/common[0];
        result = common[commonLength-1]*r;
    }
    return result;
}
// console.log(solution([-1, -2, -3, -4]));

console.log(solution([-1, 2, -2, 4, -4]));
