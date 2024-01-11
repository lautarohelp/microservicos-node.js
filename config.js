module.exports = {
  remoteDB: process.env.REMOTE_DB || false,
  api: {
    port: process.env.API_PORT || 3000,
  },
  post: {
    port: process.env.POST_PORT || 3002,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'notasecret!',
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASS || 'lauti4321',
    database: process.env.MYSQL_DB || 'db_node_usuarios',
  },
  mysqlService: {
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3001,
  },
  cacheService: {
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3003,
  },
  redis: {
    
  host: process.env.REDIS_HOST || 'redis-16602.c1.asia-northeast1-1.gce.cloud.redislabs.com',
  port: process.env.REDIS_PORT || 16602,
  password: process.env.REDIS_PASS ||'7ubY079vqXzjU4oKmFIcjCHEiQqQ5K2L',
  }
}

