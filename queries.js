const Pool = require("pg").Pool; //node module for Postgressql
const querystring = require("querystring");
const pool = new Pool({
  user: "readonly", // user with only SELECT grants on all public tables
  host: "localhost", // need to change in prod
  database: "foodmap",
  password: "readonly",
  port: 5432
});

//GENERAL
const getCuisine = (request, response) => {
  pool.query(
    "SELECT * FROM tbl_cuisine ORDER BY name ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getCuisineById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    "SELECT * FROM tbl_cuisine WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getLaNeigh = (request, response) => {
  pool.query(
    "SELECT * FROM tbl_laneigh ORDER BY name ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getPdxNeigh = (request, response) => {
  pool.query(
    "SELECT * FROM tbl_pdxneigh ORDER BY name ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

//LA BREAKFAST
const getLaBreak = (request, response) => {
  pool.query(
    "SELECT * FROM tbl_labreak ORDER BY name ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getLaBreakById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    "SELECT * FROM tbl_labreak WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getLaBreakVisited = (request, response) => {
  pool.query(
    "SELECT * FROM tbl_labreak WHERE havevisited = TRUE ORDER BY name ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getLaBreakByNeigh = (request, response) => {
  const neigh = String(request.params.neigh);

  pool.query(
    "SELECT * FROM tbl_labreak WHERE (neighborhood1 = $1 OR neighborhood2 = $1 OR neighborhood3 = $1 OR neighborhood4 = $1 OR neighborhood5 = $1 OR neighborhood6 = $1)",
    [neigh],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getLaBreakByCuisine = (request, response) => {
  const cuisine = String(request.params.cuisine);

  pool.query(
    "SELECT * FROM tbl_labreak WHERE cuisine = $1",
    [cuisine],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getLaBreakByNeighCuisine = (request, response) => {
  const neigh = String(request.params.neigh);
  const cuisine = String(request.params.cuisine);

  pool.query(
    "SELECT * FROM tbl_labreak WHERE (neighborhood1 = $1 OR neighborhood2 = $1 OR neighborhood3 = $1 OR neighborhood4 = $1 OR neighborhood5 = $1 OR neighborhood6 = $1) AND cuisine = $2",
    [neigh, cuisine],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getLaBreakByPrice = (request, response) => {
  const price = String(request.params.price);

  pool.query(
    "SELECT * FROM tbl_labreak WHERE pricerange = $1",
    [price],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getLaBreakByNeighPrice = (request, response) => {
  const neigh = String(request.params.neigh);
  const price = String(request.params.price);

  pool.query(
    "SELECT * FROM tbl_labreak WHERE (neighborhood1 = $1 OR neighborhood2 = $1 OR neighborhood3 = $1 OR neighborhood4 = $1 OR neighborhood5 = $1 OR neighborhood6 = $1) AND pricerange = $2",
    [neigh, price],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getLaBreakByCuisinePrice = (request, response) => {
  const cuisine = String(request.params.cuisine);
  const price = String(request.params.price);

  pool.query(
    "SELECT * FROM tbl_labreak WHERE cuisine = $1 AND pricerange = $2",
    [cuisine, price],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getLaBreakByNeighCuisinePrice = (request, response) => {
  const neigh = String(request.params.neigh);
  const cuisine = String(request.params.cuisine);
  const price = String(request.params.price);

  pool.query(
    "SELECT * FROM tbl_labreak WHERE (neighborhood1 = $1 OR neighborhood2 = $1 OR neighborhood3 = $1 OR neighborhood4 = $1 OR neighborhood5 = $1 OR neighborhood6 = $1) AND cuisine = $2 AND pricerange = $3",
    [neigh, cuisine, price],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

//LA Lunch
const getLaLunch = (request, response) => {
  pool.query(
    "SELECT * FROM tbl_lalunch ORDER BY name ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getLaLunchById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    "SELECT * FROM tbl_lalunch WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getLaLunchVisited = (request, response) => {
  pool.query(
    "SELECT * FROM tbl_lalunch WHERE havevisited = TRUE ORDER BY name ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getLaLunchByNeigh = (request, response) => {
  const neigh = String(request.params.neigh);

  pool.query(
    "SELECT * FROM tbl_lalunch WHERE (neighborhood1 = $1 OR neighborhood2 = $1 OR neighborhood3 = $1 OR neighborhood4 = $1 OR neighborhood5 = $1 OR neighborhood6 = $1)",
    [neigh],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getLaLunchByCuisine = (request, response) => {
  const cuisine = String(request.params.cuisine);

  pool.query(
    "SELECT * FROM tbl_lalunch WHERE cuisine = $1",
    [cuisine],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getLaLunchByNeighCuisine = (request, response) => {
  const neigh = String(request.params.neigh);
  const cuisine = String(request.params.cuisine);

  pool.query(
    "SELECT * FROM tbl_lalunch WHERE (neighborhood1 = $1 OR neighborhood2 = $1 OR neighborhood3 = $1 OR neighborhood4 = $1 OR neighborhood5 = $1 OR neighborhood6 = $1) AND cuisine = $2",
    [neigh, cuisine],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getLaLunchByPrice = (request, response) => {
  const price = String(request.params.price);

  pool.query(
    "SELECT * FROM tbl_lalunch WHERE pricerange = $1",
    [price],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getLaLunchByNeighPrice = (request, response) => {
  const neigh = String(request.params.neigh);
  const price = String(request.params.price);

  pool.query(
    "SELECT * FROM tbl_lalunch WHERE (neighborhood1 = $1 OR neighborhood2 = $1 OR neighborhood3 = $1 OR neighborhood4 = $1 OR neighborhood5 = $1 OR neighborhood6 = $1) AND pricerange = $2",
    [neigh, price],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getLaLunchByCuisinePrice = (request, response) => {
  const cuisine = String(request.params.cuisine);
  const price = String(request.params.price);

  pool.query(
    "SELECT * FROM tbl_lalunch WHERE cuisine = $1 AND pricerange = $2",
    [cuisine, price],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getLaLunchByNeighCuisinePrice = (request, response) => {
  const neigh = String(request.params.neigh);
  const cuisine = String(request.params.cuisine);
  const price = String(request.params.price);

  pool.query(
    "SELECT * FROM tbl_lalunch WHERE (neighborhood1 = $1 OR neighborhood2 = $1 OR neighborhood3 = $1 OR neighborhood4 = $1 OR neighborhood5 = $1 OR neighborhood6 = $1) AND cuisine = $2 AND pricerange = $3",
    [neigh, cuisine, price],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

//LA Dinner
const getLaDinner = (request, response) => {
  pool.query(
    "SELECT * FROM tbl_ladinner ORDER BY name ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

//LA Coffee/Tea
const getLaCoffee = (request, response) => {
  pool.query(
    "SELECT * FROM tbl_lacoffee ORDER BY name ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

//LA Bars
const getLaBars = (request, response) => {
  pool.query(
    "SELECT * FROM tbl_labars ORDER BY name ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

//PDX Breakfast
const getPdxBreak = (request, response) => {
  pool.query(
    "SELECT * FROM tbl_pdxbreak ORDER BY name ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getPdxBreakCuisine = (request, response) => {
  pool.query(
    "SELECT cuisine FROM tbl_pdxbreak GROUP BY cuisine ORDER BY cuisine ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

//PDX Lunch
const getPdxLunch = (request, response) => {
  pool.query(
    "SELECT * FROM tbl_pdxlunch ORDER BY name ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

//PDX Dinner
const getPdxDinner = (request, response) => {
  pool.query(
    "SELECT * FROM tbl_pdxdinner ORDER BY name ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

//PDX Coffee
const getPdxCoffee = (request, response) => {
  pool.query(
    "SELECT * FROM tbl_pdxcoffee ORDER BY name ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

//PDX Bars
const getPdxBars = (request, response) => {
  pool.query(
    "SELECT * FROM tbl_pdxbars ORDER BY name ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
module.exports = {
  getCuisine,
  getCuisineById,
  getLaNeigh,
  getPdxNeigh,
  getLaBreak,
  getLaBreakVisited,
  getLaBreakById,
  getLaBreakByNeigh,
  getLaBreakByCuisine,
  getLaBreakByNeighCuisine,
  getLaBreakByPrice,
  getLaBreakByNeighPrice,
  getLaBreakByCuisinePrice,
  getLaBreakByNeighCuisinePrice,
  getLaLunch,
  getLaLunchById,
  getLaLunchVisited,
  getLaLunchByNeigh,
  getLaLunchByCuisine,
  getLaLunchByNeighCuisine,
  getLaLunchByPrice,
  getLaLunchByNeighPrice,
  getLaLunchByCuisinePrice,
  getLaLunchByNeighCuisinePrice,
  getLaDinner,
  getLaCoffee,
  getLaBars,
  getPdxBreak,
  getPdxLunch,
  getPdxDinner,
  getPdxCoffee,
  getPdxBars
};
