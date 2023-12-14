var timeLimit = function(fn, t) {

  return async function(...args) {
    const limitPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject('Time Limit Exceeded')
      }, t);
    })
    const fnExecutionPromise = fn(...args)
    return Promise.race([limitPromise, fnExecutionPromise])
  }
};


const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).then(console.log).catch(console.log) // "Time Limit Exceeded" at t=100ms
