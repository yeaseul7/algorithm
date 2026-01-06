/**
 * 2024 카카오 인턴십 코딩테스트 1번 가장많이 받은 선물
 * https://school.programmers.co.kr/learn/courses/30/lessons/258712
 * 
 */

function solution(friends, gifts) {
    const sendMap = new Map();

    // 1. 초기화
    friends.forEach(name => {
        sendMap.set(name, {
            sendList: new Map(),
            receiveList: new Map(),
            giftFactor: 0,
            receiveCount: 0
        });
    });

    // 2. 기록 채우기
    for (const human of gifts) {
        const [sender, receiver] = human.split(' ');
        const senderData = sendMap.get(sender);
        const receiverData = sendMap.get(receiver);

        senderData.sendList.set(receiver, (senderData.sendList.get(receiver) || 0) + 1);
        receiverData.receiveList.set(sender, (receiverData.receiveList.get(sender) || 0) + 1);
    }

    // [중요 수정] Step 1: 모든 친구의 '선물 지수'를 먼저 확정 짓습니다.
    sendMap.forEach((value) => {
        let sendFactor = 0;
        let receiveFactor = 0;

        value.sendList.forEach((count) => { sendFactor += count; });
        value.receiveList.forEach((count) => { receiveFactor += count; });

        value.giftFactor = sendFactor - receiveFactor;
    });

    // [중요 수정] Step 2: 확정된 점수를 바탕으로 비교합니다.
    sendMap.forEach((value, parentKey) => {
        friends.forEach(friend => {
            if (friend === parentKey) return; // 나 자신 제외

            const giveCount = value.sendList.get(friend) || 0;
            const receiveCount = value.receiveList.get(friend) || 0;

            if (giveCount > receiveCount) {
                value.receiveCount++;
            } else if (giveCount === receiveCount) {
                const friendGiftFactor = sendMap.get(friend).giftFactor; // 이제 안심하고 가져올 수 있음
                if (value.giftFactor > friendGiftFactor) {
                    value.receiveCount++;
                }
            }
        });
    });

    return Math.max(...Array.from(sendMap.values()).map(v => v.receiveCount));
}
console.log(solution(["muzi", "ryan", "frodo", "neo"], ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]));


// solution1로 작성했을때 런타임 에러가 발생하는데 
// alue.exchangeFriends.forEach(friend => {
//     if(value.giftFactor > sendMap.get(friend).giftFactor){
//         value.receiveCount = value.receiveCount + 1;
//     }
// })
// 이부분에서 런타임 에러가 발생한다 