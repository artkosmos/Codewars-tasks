const TimeLimitedCache = function () {
  this._cash = new Map()
  this._timer = new Map()
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const isKey = this._cash.has(key)
  if (isKey) {
    clearTimeout(this._timer.get(key))
  }

  this._cash.set(key, value)

  const timer = setTimeout(() => {
    this._cash.delete(key)
  }, duration)

  this._timer.set(key, timer)

  return isKey
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this._cash.has(key)) {
    return this._cash.get(key)
  }
  return -1
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this._cash.size
};


const timeLimitedCache = new TimeLimitedCache()

