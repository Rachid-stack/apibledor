module.exports = {
    HOST : "oregon-postgres.render.com",
    USER: "bledor",
    PASSWORD: "9TRNm33DzYdxsjeHLnYbGAkzobJ61RaB",
    DB: "bledordb_pdso",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
