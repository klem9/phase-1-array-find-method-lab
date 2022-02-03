function superbowlWin(result){
    const ifWin = result.find(finderFunction)
    return ifWin ? ifWin.year : undefined
}

function finderFunction (result){
    return (result.result === "W")

}

