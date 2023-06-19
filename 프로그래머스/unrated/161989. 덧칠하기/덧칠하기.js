function solution(n, m, section) {
    var answer = 0;
    let area = 100001;
    let i = 0;
    for(i = section.length; i >= 0; i--){
        if(section[i] < area){
            area = section[i] - m + 1;
            answer ++;
        };
    };
    
    
    return answer;
}