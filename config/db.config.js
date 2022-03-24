Configuration API
module.exports = {
    HOST : "hybrid3673.ca.ns.planethoster.net",
    USER: "lebledor_lebledor",
    PASSWORD: "bonjour_2023",
    DB: "lebledor_bledor",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };