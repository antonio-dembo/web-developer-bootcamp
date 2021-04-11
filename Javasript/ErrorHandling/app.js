
//try {
//     help.toUpperCase();
// } catch (error) {
//     console.log("ERROR!!!!");
// }

// console.log("AFTER!!");

function yell (msg)
{
    try{
        console.log(msg.toUpperCase().repeat(3))
    } catch(error){
        console.log("Pass a string next time!!!");
    }
        
    
    
}