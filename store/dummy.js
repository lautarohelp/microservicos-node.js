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

async function upsert(tabla, data) {
  if (!db[tabla]) {
      db[tabla] = [];
  }

  db[tabla].push(data);

  console.log(db);
}

async function remove(table, id) {
  db[table].splice(Number(id) - 1, 1)
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
}