const getMean = (nums) => {
    if(nums.length === 0) return 0;
    return nums.reduce(function (acc, cur) {
    return acc + cur;
  }) / nums.length
};

const getMedian = (nums) => {
    nums.sort((a, b) => a - b);

  let middleIndex = Math.floor(nums.length / 2);
  let median;

  if (nums.length % 2 === 0) {
    median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
  } else {
    median = nums[middleIndex];
  }
  return median;
};

const createFrequencyCounter = (arr) =>{
    return arr.reduce(function(acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
      }, {});
}

const getMode = (arr) => {
    let freqCounter = createFrequencyCounter(arr);

    let count = 0;
    let mostFrequent;

    for (let key in freqCounter) {
        if (freqCounter[key] > count) {
        mostFrequent = key;
        count = freqCounter[key];
        }
    }

    return +mostFrequent;
};

function convertAndValidateNumsArray(numsAsStrings) {
    let result = [];
  
    for (let i = 0; i < numsAsStrings.length; i++) {
      let valToNumber = Number(numsAsStrings[i]);
  
      if (Number.isNaN(valToNumber)) {
        return new Error(
          `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
        );
      }
  
      result.push(valToNumber);
    }
    return result;
  }


const checkNums = (nums) => {
    let newArr = Array.from(nums);
    console.log(newArr);
    let notNums = [];

    for (let num in nums) {
        if (typeof num !== 'integer') {
            notNums.push(num);
        };
    } console.log(notNums);

    if (notNums) {
        return false;
    }
}

module.exports = { getMean, getMedian, createFrequencyCounter, getMode, convertAndValidateNumsArray, checkNums };