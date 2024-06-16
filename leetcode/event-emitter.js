/*
Design an EventEmitter class. This interface is similar (but with some differences) to the one found in
Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.

Your EventEmitter class should have the following two methods:

subscribe - This method takes in two arguments: the name of an event as a string and a callback function.
This callback function will later be called when the event is emitted.
An event should be able to have multiple listeners for the same event.
When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed.
An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical.
The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe.
When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.
emit - This method takes in two arguments: the name of an event as a string and an optional array of
arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event,
return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.
*/

class EventEmitter {
  #subscribes

  constructor() {
    this.#subscribes = []
  }

  /**
   * @param {string} event
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(event, callback) {
    const id = Symbol();
    const eventObj = {id, event, callback}
    this.#subscribes.push(eventObj)

    return {
      unsubscribe: () => {
        this.#subscribes = this.#subscribes.filter(sub => sub.id !== id);
        return undefined;
      }
    }
  }

  /**
   * @param {string} event
   * @param {Array} [args]
   * @return {Object}
   */
  emit(event, args = []) {
    const result = []

    this.#subscribes.forEach(item => {
      if (event === item.event) {
        result.push(item.callback(...args))
      }
    })

    return result
  }
}

const emitter = new EventEmitter();
const event1 = emitter.subscribe('onClick', () => 99);
const event2 = emitter.subscribe('onClick', () => 98);
const event3 = emitter.subscribe('onClick', () => 99);
emitter.emit('onClick');
event2.unsubscribe()
emitter.emit('onClick');
event1.unsubscribe()
emitter.emit('onClick');
event3.unsubscribe()
emitter.emit('onClick');
emitter.emit('onClick');