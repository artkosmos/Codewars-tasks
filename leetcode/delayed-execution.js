function cancellableTimeout(fn, args, t) {
  const delayedExecution = setTimeout(() => fn(...args), t);

  return () => {
    clearTimeout(delayedExecution);
  };
}

var cancellableInterval = function (fn, args, t) {
  fn(...args)
  const timerId = setInterval(() => fn(...args), t)

  return () => clearInterval(timerId)
};