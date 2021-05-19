const express = require('express');
const app = express();
const ExpressError = require("./expressError")

const { getMean, getMedian, getMode, convertAndValidateNumsArray, checkNums } = require("./helpers")



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routes for /mean, /median, and /mode
app.get('/', (req, res, next) => {
  
});

app.get("/mean", (req, res, next) => {
  if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  }

  let numsAsStrings = req.query.nums.split(',');
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "mean",
    result: getMean(nums)
  }

  return res.send(result);
});

app.get("/median", (req, res, next) => {
  if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  }

  let numsAsStrings = req.query.nums.split(',');
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "median",
    result: getMedian(nums)
  }

  return res.send(result);
});

app.get("/mode", (req, res, next) => {
  if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  }

  let numsAsStrings = req.query.nums.split(',');
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "mode",
    result: getMode(nums)
  }

  return res.send(result);
});


app.use(function (req, res, next) {
  const err = new ExpressError("Not Found",404);

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message
  });
});

// server launch for app.js
app.listen(3000, () => console.log('Example app is hopefully listening on port 3000.'));