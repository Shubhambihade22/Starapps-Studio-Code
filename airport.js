// // Code of Fly me to my destination - It's urgent 

// function minPlanesToReachEnd(fuelArray) {
//     let n = fuelArray.length;
    
//     // If there's only one airport then no planes are needed.
//     if (n === 1) return 0;

//     let planesHired = 0;
//     let maxReach = 0;
//     let currentEnd = 0;

//     for (let i = 0; i < n - 1; i++) {
//         // Update maxReach: the farthest airport we can reach from this point
//         maxReach = Math.max(maxReach, i + fuelArray[i]);

//         // If we reach the currentEnd, it's time to hire a new plane
//         if (i === currentEnd) {
//             planesHired++;
//             currentEnd = maxReach; // Update the new flight range
            
//             // If we can reach or surpass the last airport, return result
//             if (currentEnd >= n - 1) return planesHired;
//         }

//         // If we reach a point where we can't move forward, return -1
//         if (i >= maxReach) return -1;
//     }
    
//     return -1; // If we finish the loop and didn't reach the last airport
// }

// // ✅ Test Cases
// console.log(minPlanesToReachEnd([2, 1, 2, 3, 1])); // Output: 2
// console.log(minPlanesToReachEnd([1, 6, 3, 4, 5, 0, 0, 0, 6])); // Output: 3
// console.log(minPlanesToReachEnd([1, 1, 0, 1])); // Output: -1 (Not possible)
// console.log(minPlanesToReachEnd([5, 2, 3, 1, 1, 1, 1, 0, 4])); // Output: 2
// console.log(minPlanesToReachEnd([1, 2, 3, 4, 5])); // Output: 2
// console.log(minPlanesToReachEnd([0, 1, 2, 3, 4])); // Output: -1 (Stuck at start)


// // Algorithm of above code:

// // Initialize variables:

// // planesHired: Count of planes needed.

// // maxReach: Tracks the farthest airport we can reach.

// // currentEnd: The end of the current flight range.

// // Iterate through airports:

// // Update maxReach to the farthest possible airport.

// // If we reach currentEnd, hire a new plane and update currentEnd.

// // If currentEnd reaches or exceeds the last airport, return planesHired.

// // Handle edge cases:

// // If stuck and can't move forward, return -1 (if not possible).