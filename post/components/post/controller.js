
const { nanoid } = require('nanoid')
const auth = require('../../../auth');



const TABLE = 'post';

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

  async function upsert(body) {
    const post = {
        text: body.text,
        user: body.user,
    }

    if (body.id) {
        post.id = body.id;
    } else {
        post.id = nanoid();
    }

    if (body.user) {
        await auth.upsert({
            id: post.id,
            user: post.user,
            text: body.text,
        })
    }

    return store.upsert(TABLE, post);
}

  return {
    list,
    upsert,
    get
  }
}