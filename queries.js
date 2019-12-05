const Pool = require('pg').Pool
const querystring = require('querystring');
const pool = new Pool({
  user: 'readonly',
  host: 'localhost',
  database: 'foodmap',
  password: 'readonly',
  port: 5432,
})
//GENERAL
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
const getLaNeigh = (request, response) => {
  pool.query('SELECT * FROM tbl_laneigh ORDER BY name ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getPdxNeigh = (request, response) => {
  pool.query('SELECT * FROM tbl_pdxneigh ORDER BY name ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
//LA BREAKFAST
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
  const neigh = String(request.params.neigh)

  pool.query('SELECT * FROM tbl_labreak WHERE (neighborhood1 = $1 OR neighborhood2 = $1 OR neighborhood3 = $1 OR neighborhood4 = $1 OR neighborhood5 = $1 OR neighborhood6 = $1)', [neigh], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getLaBreakbyCuisine = (request, response) => {
  const cuisine = String(request.params.cuisine)

  pool.query('SELECT * FROM tbl_labreak WHERE cuisine = $1', [cuisine], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getLaBreakbyNeighCuisine = (request, response) => {
  const neigh = String(request.params.neigh)
  const cuisine = String(request.params.cuisine)

  pool.query('SELECT * FROM tbl_labreak WHERE (neighborhood1 = $1 OR neighborhood2 = $1 OR neighborhood3 = $1 OR neighborhood4 = $1 OR neighborhood5 = $1 OR neighborhood6 = $1) AND cuisine = $2', [neigh, cuisine], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getLaBreakbyPrice = (request, response) => {
  const price = String(request.params.price)

  pool.query('SELECT * FROM tbl_labreak WHERE pricerange = $1', [price], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getLaBreakByNeighPrice = (request, response) => {
  const neigh = String(request.params.neigh)
  const price = String(request.params.price)

  pool.query('SELECT * FROM tbl_labreak WHERE (neighborhood1 = $1 OR neighborhood2 = $1 OR neighborhood3 = $1 OR neighborhood4 = $1 OR neighborhood5 = $1 OR neighborhood6 = $1) AND pricerange = $2', [neigh, price], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getLaBreakByCuisinePrice = (request, response) => {
  const cuisine = String(request.params.cuisine)
  const price = String(request.params.price)

  pool.query('SELECT * FROM tbl_labreak WHERE cuisine = $1 AND pricerange = $2', [cuisine, price], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getLaBreakByNeighCuisinePrice = (request, response) => {
  const neigh = String(request.params.neigh)
  const cuisine = String(request.params.neigh)
  const price = String(request.params.price)

  pool.query('SELECT * FROM tbl_labreak WHERE (neighborhood1 = $1 OR neighborhood2 = $1 OR neighborhood3 = $1 OR neighborhood4 = $1 OR neighborhood5 = $1 OR neighborhood6 = $1) AND cuisine = $2 AND pricerange = $3', [neigh, cuisine, price], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
module.exports = {
  getCuisine,
  getCuisineById,
  getLaNeigh,
  getPdxNeigh,
  getLaBreak,
  getLaBreakById,
  getLaBreakByNeigh,
  getLaBreakbyCuisine,
  getLaBreakbyNeighCuisine,
  getLaBreakbyPrice,
  getLaBreakByNeighPrice,
  getLaBreakByCuisinePrice,
  getLaBreakByNeighCuisinePrice
}
