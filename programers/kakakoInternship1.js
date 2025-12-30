/**
 * 2024 카카오 인턴십 코딩테스트 1번 가장많이 받은 선물
 * https://school.programmers.co.kr/learn/courses/30/lessons/258712
 * 
 */

function solution(friends, gifts) {
    const sendMap = {};
    for(const human of gifts) {
        const receiver = human.split(' ')[1];
        const sender = human.split(' ')[0];
        if(!sendMap[sender]){
            sendMap[sender] = {};
        }
        if(!sendMap[sender][receiver]){
            sendMap[sender][receiver] = 0;
        }
        sendMap[sender][receiver]++;
    }
    for(const friend of friends) {
       let receiveCount = 0;
       for(const [sender, receive] of Object.entries(sendMap)) {
        if(receive[friend]) {
            receiveCount += receive[friend];
        }
       }
       console.log(friend, receiveCount);
    }
}
console.log(solution(["muzi", "ryan", "frodo", "neo"], ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]));