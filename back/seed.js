const Promise = require('bluebird')
const connection = require('./db')

const insertPromise = query => new Promise((s, f) => {
  connection.query(query, (err, results) => {
    if(err) return f(err)
    s(results)
  })
})

const buildQuery = (table, obj) => {
  const keys = Object.keys(obj)
  const values = Object.values(obj)
  .map(col => typeof col === 'number' ? col : `'${col.replace(/'/g, "\\'")}'`)
  const query = `INSERT INTO ${table} (${keys.join()}) VALUES(${values.join()})`
  return query
}

const buildAndInsert = (table, obj) =>
  insertPromise(buildQuery(table, obj))

const entites = require('./entites.json')

Promise.map(entites, e => buildAndInsert('Entite', e))
.then(results => {
  console.log(`${results.length} créées`)
  process.exit()
})
