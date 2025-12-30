/**
 * [PCCP 기출문제] 1번 / 붕대 감기
 * https://school.programmers.co.kr/learn/courses/30/lessons/250137
 * 
 * 자료구조를 요구하는 문제 X
 */

function solution(bandage, health, attacks) {
  const maxHealth = health;
  //가독성을 위해 구조분해 할당
  const [castTime, hps, bonusHeal] = bandage;
  let sequence = 0;
  
  //구조 최적화 
  const attackMap = {};
  for(const [at, dmg] of attacks) {
    attackMap[at] = dmg;
  }
  //! 배열 순회는 초가 길어질수록 비효율적이다. (filter보다 Map 혹은 Object 사용하는게 좋다.)

  let lastAttackTime = attacks[attacks.length - 1][0];

  //0초에는 아무일도 없는게 정상이므로 1부터 시작
  for(let time = 1; time <= lastAttackTime; time++){
    if(attackMap[time]){
      sequence = 0;
      health -= attackMap[time];
      if(health <= 0){
        return -1;
      }
    } else {
      sequence++;
      health += hps;

      if(sequence === castTime) {
        health += bonusHeal;
        sequence = 0; 
      }
      if(health > maxHealth){
        health = maxHealth;
      }
    }
  }
  return health;
}
console.log(solution(	[5, 1, 5], 30, [[2, 10], [9, 15], [10, 5], [11, 5]]));

