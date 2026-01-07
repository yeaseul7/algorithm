//2차원 배열
function addElement(answer, num, index) {
    if (answer.length === num) return answer;
    for (let i = 0; i < num; i++) {
      if(index === i){
        answer.push(1);
      }else{
        answer.push(0);
      }
    }
    
    return answer;
  }
  
  function solution(n) {
    let answer = [];
  
    //1차원 배열
    for (let i = 0; i < n; i++) {
      answer.push(addElement([], n, i));
    }
    return answer;
  }
  console.log(solution(3));