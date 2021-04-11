function isSnackEyes (firstDice , secondDice)
{
    const result = ( firstDice == 1 && secondDice == 1 ) ? "Snake Eyes!" : "Not Snake Eyes!" ;
    console.log(result);
}

isSnackEyes(1,1);
isSnackEyes(1,5);
isSnackEyes(4,5);
isSnackEyes(2,2);