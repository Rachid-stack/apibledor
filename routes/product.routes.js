module.exports = app => {
    const products = require("../controllers/product.controller.js");
    var router = require("express").Router();
    //Create a new Product
    router.post("/livraison", products.createLivraison);
    router.post("/livraisonProd", products.createLivraisonProd);
    //Retrieve all Product
    router.get("/ListProduitPatisserie", products.findAllProductPatisserie);
    router.get("/ListProduitGlacier", products.findAllProductGlacier);
    router.get("/ListProduitFastFoodPizzas", products.findAllProductFastFoodPizzas);
    router.get("/ListProduitFastFoodBerger", products.findAllProductFastFoodBergers);
    router.get("/ListProduitFastFoodSandWish", products.findAllProductFastFoodSandwish);
    router.get("/ListProduitFastFoodCuisine", products.findAllProductFastFoodCuisine);
    router.get("/ListProduitVernoiserie", products.findAllProductViennoiserie);
    router.get("/ListProduitBoissonChaude", products.findAllProductBoissonChaux);
    router.get("/ListProduitEauxKmg", products.findAllProductEauKmg);
    router.get("/ListProduitBoissonFraiche", products.findAllProductBoissonFr);
    router.get("/ListProduitSalade", products.findAllProductSalade);
    router.get("/ListProduitCharcuterie", products.findAllProductProduitFrais);
    router.get("/ListProduitPain", products.findAllProductPain);
    router.get("/ListProduitPainSpeciale", products.findAllProductPainSpeciale);
    app.use('/api', router);
};