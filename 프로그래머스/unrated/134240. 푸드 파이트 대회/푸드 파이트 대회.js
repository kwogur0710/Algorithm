function solution(food) {
    var answer = [];
    let i = 0, j = 0;
    
    for(i = 1; i < food.length; i++)
        for(j = 1; j <= food[i]/2; j++)
            answer.push(i);
    
    answer = [...answer, 0, ...answer.sort((a,b)=>b - a)];
    return answer.join("");
}