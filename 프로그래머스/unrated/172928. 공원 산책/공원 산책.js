function solution(park, routes) {
    var answer = [];
    const obstacle = (direction, distance) => {
        let i = 0;
        let [y, x] = answer;
        let location = direction === 'x' ? x : y;
        
        if(direction === 'y' && (y + distance < 0 || park.length - 1 < y + distance)) return location;
        else if(direction === 'x' && (x + distance < 0 || park[0].length - 1 < x + distance))  return location;

        if(distance >= 0){
            for(i = location + 1; i <= location + distance; i++){
                if(direction === 'y' && park[i][x] === 'X') 
                    return location;
                else if (direction === 'x' && park[y][i] === 'X') 
                    return location;
            }
        }else{
            for(i = location - 1; i >= location + distance; i--){
                if(direction === 'y' && park[i][x] === 'X')
                    return location;
                else if (direction === 'x' && park[y][i] === 'X') 
                    return location;
            }
        }
        console.log('통과')
        return location + distance;
    }
    
    park.map((item, index) => {
        let locationX = item.indexOf('S');
        if(locationX !== -1) answer = [index, locationX];
    });
    
    routes.map(item =>{
        let [direction, distance] = item.split(" ")
        distance = parseInt(distance);
        switch(direction){
            case 'N' : answer[0] = obstacle('y', -distance); break;
            case 'S' : answer[0] = obstacle('y',  distance); break;
            case 'W' : answer[1] = obstacle('x', -distance); break;
            case 'E' : answer[1] = obstacle('x',  distance); break;
        }
    })
    
    
    return answer;
}