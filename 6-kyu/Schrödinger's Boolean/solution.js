/*
Can a value be both true and false?

Define omniBool so that it returns true for the following:

omniBool == true && omniBool == false
*/

const omnibool = {
  value : false,
  valueOf: () => {
    this.value = !this.value;
    return this.value
  }
};