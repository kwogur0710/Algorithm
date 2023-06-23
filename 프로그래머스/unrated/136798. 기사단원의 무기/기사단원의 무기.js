function solution(number, limit, power) {
    let i = 0, attack = 0;
    var answer = 0;
    
    for(i = 1; i <= number; i++){
        attack = 1;
        for(j = 1; j <= i / 2; j++) {
            if(i % j === 0) attack++;
        }
        answer += attack <= limit ? attack : power;
    }
    return answer;
}