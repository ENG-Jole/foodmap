const Pool = require('pg').Pool
const pool = new Pool({
  user: 'readonly',
  host: 'localhost',
  database: 'foodmap',
  password: 'readonly',
  port: 5432,
})
const getCuisine = (request, response) => {
  pool.query('SELECT * FROM tbl_cuisine ORDER BY id ASC', (error, results) => {
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
module.exports = {
  getCuisine,
  getCuisineById
}
