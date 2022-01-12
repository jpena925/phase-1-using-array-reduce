const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// Code your solution her

let totalBatteries = 
    batteryBatches.reduce(function(total, element){
        return total += element
    }, 0)