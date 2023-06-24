function solution(babbling) {
    var answer = 0;
    let i = 0;
    let list = ["aya", "ye", "woo", "ma"];

    for(i = 0; i < babbling.length; i++) {
        let filter = babbling[i];
        let continuity = false;
        list.map(item => {
            if(babbling[i].includes(item.repeat(2))) continuity = true;
        });
        filter = filter.replaceAll(/aya|ye|woo|ma/g, "");
        if(filter==='' && !continuity) answer++;
    };
    
    return answer;
}
