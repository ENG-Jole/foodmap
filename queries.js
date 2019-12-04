const Pool = require('pg').Pool
const querystring = require('querystring');
const pool = new Pool({
  user: 'readonly',
  host: 'localhost',
  database: 'foodmap',
  password: 'readonly',
  port: 5432,
})
const getCuisine = (request, response) => {
  pool.query('SELECT * FROM tbl_cuisine ORDER BY name ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getCuisineById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM tbl_cuisine WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getLaBreak = (request, response) => {
  pool.query('SELECT * FROM tbl_labreak ORDER BY name ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getLaBreakById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM tbl_labreak WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getLaBreakByNeigh = (request, response) => {
  const neigh = querystring.parse(request.params.neigh)
  console.log(neigh)

  pool.query('SELECT * FROM tbl_labreak WHERE (neighborhood1 = $1 OR neighborhood2 = $1 OR neighborhood3 = $1 OR neighborhood4 = $1 OR neighborhood5 = $1 OR neighborhood6 = $1)', [neigh], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })

}
module.exports = {
  getCuisine,
  getCuisineById,
  getLaBreak,
  getLaBreakById,
  getLaBreakByNeigh
}
