import _ from 'lodash';
let round = (num: number, dp: number) => {
  return _.round(num, dp);
};

let round2 = (num: number, dp: number) => {
  return num.toFixed(dp);
};

export = {
  round: round,
  round2: round2,
};
