function solution(k, m, score) {
    var answer = 0;
    let i = 0;
    let sort = score.sort((a,b) => b-a);
    
    for(i = 0; i < Math.floor(sort.length/m); i++)
        answer += sort.slice(i * m, i * m + m)[m - 1] * m;
    
    return answer;
    
}