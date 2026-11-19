function overload(function_with_n_parameters, function_with_m_parameters) {
  return (...args) => {
    if (args.length === function_with_n_parameters.length) {
      return function_with_n_parameters(...args);
    } else if (args.length === function_with_m_parameters.length) {
      return function_with_m_parameters(...args);
    }
  };
}

const createVector = overload(
  function (a, b) {
    return { x: a, y: b };
  },
  function (length) {
    return { x: length / 1.414, y: length / 1.414 };
  },
);

console.log(createVector(3, 4)); // => { x: 3,  y: 4 }
console.log(createVector(7.07)); // => { x: 5,  y: 5 }
