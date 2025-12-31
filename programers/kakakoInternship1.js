/**
 * 2024 카카오 인턴십 코딩테스트 1번 가장많이 받은 선물
 * https://school.programmers.co.kr/learn/courses/30/lessons/258712
 * 
 */

function solution(friends, gifts) {
    const sendMap = new Map();
    for(const human of gifts) {
        const receiver = human.split(' ')[1];
        const sender = human.split(' ')[0];
        
        if(!sendMap.has(sender)){
            sendMap.set(sender, {sendList:new Map(), receiveList:new Map(), giftFactor:0});
        }
        if(!sendMap.has(receiver)){
            sendMap.set(receiver, {sendList:new Map(), receiveList:new Map(), giftFactor:0});
        }
        sendMap.get(sender).sendList.set(receiver, (sendMap.get(sender).sendList.get(receiver) || 0) + 1);
        sendMap.get(receiver).receiveList.set(sender, (sendMap.get(receiver).receiveList.get(sender) || 0) + 1);
    }
    sendMap.forEach((value, parentKey) => {
        let sendFactor = 0;
        let receiveFactor = 0;
        value.sendList.forEach((value, key) => {
            sendFactor += value;
        });
        value.receiveList.forEach((value, key) => {
            receiveFactor += value;
        });
        value.giftFactor = sendFactor - receiveFactor;
    });
    return sendMap;
}
console.log(solution(["muzi", "ryan", "frodo", "neo"], ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]));