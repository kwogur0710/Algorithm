function solution(s) {
    const list = s.split(' ').map(Number).sort((a,b) => a - b);
    return list[0] + " " + list[list.length - 1]
}