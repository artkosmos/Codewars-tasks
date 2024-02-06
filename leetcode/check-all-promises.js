/**
 * Написать функцию, которая принимает массив запросов к серверу и возвращает true,
 * если все запросы завершились успешно (имеют статус код 200), и false,
 * если хотя бы один запрос завершился с ошибкой.
 */

async function fetch_1() {
  return Promise.resolve(true);
}
async function fetch_2() {
  return Promise.resolve(true);
}
async function fetch_3() {
  return Promise.reject(true);
}

const promises = [fetch_1(), fetch_2(), fetch_3()];

async function checkAllPromises(promises) {
  try {
    const result = await Promise.all(promises);
    if (result.length) {
      return true;
    }
  } catch {
    return false;
  }
}

checkAllPromises(promises).then((result) => {
  console.log(result);
});