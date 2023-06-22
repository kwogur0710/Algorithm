function solution(t, p) {
    var answer = 0;
    let i = 0;
    let max = t.length - p.length + 1;
    
    for(i = 0; i < max; i++) if(t.slice(i, i + p.length) <= p) answer++;

    return answer;
    
}