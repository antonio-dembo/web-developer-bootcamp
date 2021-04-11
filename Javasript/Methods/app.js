const myMath = {
    PI: 3.1415,
    square: function (number){
        return number ** 2;
    },
    cube: function (number){
        return number ** 3;
    }
    
}

// exercise
const square = {
    area: function (sideLength){
        return sideLength * sideLength;
    },
    perimeter: function (sideLength){
        return sideLength * 4;
    }
}

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'Scottish fold',
    meow (){
        console.log(`${this.name} says MIOWWWW!!!`);
    }
}

// saves the receference to meaw2
// when  nothing in the left of a method the THIS keyword referes back to 
// th Window object.
const meow2 = cat.meow;



const hen = 
{
    name: 'Helen',
    eggCount: 0,
    layAnEgg () {
        this.eggCount++;
        return 'EGG';
    }
}

consoele.log(hen.name);
consoele.log(hen.eggCount);
consoele.log(hen.layAnEgg());
consoele.log(hen.layAnEgg());
consoele.log(hen.eggCount());

