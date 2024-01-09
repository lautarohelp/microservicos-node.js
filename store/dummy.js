const db = {
  'user': [
    { id: '1', name: 'Carlos' },
  ]
};

async function list(table) {
  return db[table]
}

async function get(table, id) {
  let col = await list(table);
  return col.filter(item => item.id === id)[0] || null;
}

async function upsert(table, id, name) {
  let newUser = {
    id: id,
    name: name
  }
  db[table].push(newUser);
}

async function remove(table, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
}