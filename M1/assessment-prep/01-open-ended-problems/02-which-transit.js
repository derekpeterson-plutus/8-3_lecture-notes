// Setup: You want to know whether the train or your car is a faster commute.
// You alternate transportation methods, recording your commute time in minutes every day.

const carCommuteTimes = [43, 48, 39, 37, 47, 46, 46, 35, 42, 49];
const trainCommuteTimes = [30, 62, 41, 39, 38, 31, 51, 53, 34, 40];

// Challenge: write a program that determines which commute is faster ON AVERAGE.
// How will you know if you've succeeded?
//   -> Use node to execute this file. You should see output that logs out which commute is faster on average

// Hint: write a function that computes the average of an array of numbers.
//   Use this function to find the average commute time for the train and for your car.

function getCarAvgTime(carCommuteTimes) {
    const total = carCommuteTimes.reduce((acc, c) => acc + c, 0);
    return total / carCommuteTimes.length;
  };
  const carTimeAverage = getCarAvgTime(carCommuteTimes);
  console.log(carTimeAverage);

function getTrainAvgTime(trainCommuteTimes) {
    const total = trainCommuteTimes.reduce((acc, c) => acc + c, 0);
    return total / trainCommuteTimes.length;
  };
  const trainTimeAverage = getTrainAvgTime(trainCommuteTimes);
  console.log(trainTimeAverage);

function compareCommuteTimesAverage(carTimeAverage, trainTimeAverage) {
  
    return carTimeAverage > trainTimeAverage ? 'Commuting by train is much faster' : 'Commuting by car is much faster';
}
console.log(compareCommuteTimesAverage(carTimeAverage, trainTimeAverage))
