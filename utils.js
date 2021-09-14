export const pipe = (x, ...fs) => {
  return fs.reduce((x, f) => f(x), x);
};

const jsonStringifyPretty = (x) => JSON.stringify(x, null, 2);

export const prettyPrint = (x) => {
  pipe(x, jsonStringifyPretty, console.log);
};
