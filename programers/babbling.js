function solution(babbling) {
    let result = 0;
    const canSpeak = ["aya", "ye", "woo", "ma"];
    for(let word of babbling){
     for(let can of canSpeak){
       word = callback(word, can);
     }
     result = word.replace(/-/g, '').length === 0 ? result+1 : result;
    }
    return result;
}

function callback(word, can){
    if(word.includes(can)){
        word = word.replace(can, '-');
    }
    return word;
}
console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));

//다음에는 정규식을 활용해보자