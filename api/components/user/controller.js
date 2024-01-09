
const TABLE = 'user';



module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/dummy');
  }
  function list() {
    return store.list(TABLE);
  }

  function get(id) {
    return store.get(TABLE, id);
  }

  function upsert(id, data) {
    return store.upsert(TABLE, id, data);
  }

  function remove(id) {
    return store.remove(TABLE, id);
  }

  return { 
    list,
    get,
    upsert,
    remove
  }
}

