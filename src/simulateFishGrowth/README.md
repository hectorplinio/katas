# Kata 9: simulateFishGrowth

## Exercise Statement

Given an array that represents the days remaining for each lanternfish to create a new fish, simulate the growth of the school of fish over a given number of days. A fish creates a new fish every 7 days, and a newly born fish takes 9 days for its first cycle.

### Input

1. An array of numbers representing the days remaining for each lanternfish to create a new fish.
2. An integer representing the total number of days to simulate.

### Example

```typescript
const initialObject: Array<number> = [3, 4, 3, 1, 2];
```

### Output

An array of numbers representing the days remaining for each lanternfish after simulating the given number of days.

### Solution

The function simulateFishGrowth takes an array of numbers and an integer as input and returns an array of numbers after simulating the growth of the school of fish over the specified number of days. The function uses a loop to iterate over each day and the reduce method to update the fish timers.

### Code

```typescript
export const simulateFishGrowth = (
  inputParams: Array<number> = initialObject,
  totalDays: number = 80,
): Array<number> => {
  let fishTimers = [...inputParams];

  for (let day = 0; day < totalDays; day++) {
    fishTimers = fishTimers.reduce((acc, timer) => {
      if (timer === 0) {
        acc.push(6, 8);
      } else {
        acc.push(timer - 1);
      }
      return acc;
    }, [] as Array<number>);
  }

  return fishTimers;
};
```

### Explanation

The function simulateFishGrowth performs the following steps:

- Parameters: It takes two parameters:
  - inputParams (optional) which defaults to initialObject.
  - totalDays which is an integer representing the total number of days to simulate.
- Daily Loop: It uses a for loop to iterate over each day up to totalDays.
  - Reduce Method: Within each day, it uses the reduce method on the fishTimers array.
    - If timer is 0, it resets the timer of the current fish to 6 and adds a new fish with a timer of 8.
    - If timer is not 0, it decrements it by 1.
  - The accumulator (acc) is initialized as an empty array each day and is filled with the updated fish timers.
- Return: It returns the accumulated array of fish timers after totalDays.
