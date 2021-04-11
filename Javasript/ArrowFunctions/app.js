function cleanNames (strings)
{
    const trimmedStrings = strings.map((str) => {
        return str.trim();
    })
    return trimmedStrings;
}

const names = cleanNames(
    [" timothee", "   darth_hater", "sassyfrassy   ", " elton John   "]
);

names.forEach(element => {
    console.log(element);
});

// movies object
const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

const titles = movies.map( (movie) => {
    return movie.title.toUpperCase();
})

// This just defines the function, it is executed automatically.
// movies.forEach( function (movie) {
//     console.log(`${movie.title} - ${movie.score}/100`);
// })

// const numbers = [1,2,3,4,5,6,7,8,9,10,11];

// numbers.forEach( function (el) {
//     if( el % 2 === 0)
//     {
//         console.log(el);
//     }
    
// });

// for( let el of numbers)
// {
//     console.log(el);
// }