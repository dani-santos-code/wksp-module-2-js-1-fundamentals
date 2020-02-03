// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q8
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

let pattern = "";
for (let i = 1; i <= 7; i++) {
  pattern = pattern + "#";
  console.log(pattern);
}
