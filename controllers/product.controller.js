const db = require("../models");
const { QueryTypes } = require('sequelize');
const { json } = require("body-parser");
const Livraison = db.livraison;
const LivraisonProd = db.livraisonProd;
const Op = db.Sequelize.Op;
const sequelize = db.sequelize;
// Create and Save a new Tutorial
exports.createLivraisonProd = (req, res) => {
    // console.log(Livraison);
    let date_ob = Date();
    const livraisonProd = {
            id_prods: req.body.id_prods,
            prix_prod: req.body.prix_prod,
            quantite: req.body.quantite,
            id_livraison: req.body.id_livraison,
            prix_total: req.body.prix_total,
            del: 0,
            is_livrer: 0,
            is_annuler: 0,
            create_date: date_ob,
            update_date: req.body.update_date,
            update_by: req.body.update_by,
        }
        // Save Tutorial in the database
    LivraisonProd.create(livraisonProd)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the livraison."
            });
        });
};
exports.createLivraison = (req, res) => {
    let date_ob = Date();
    const livraison = {
        nom_c: req.body.nom_c,
        date_commande: date_ob,
        prenom_c: req.body.prenom_c,
        del: 0,
        is_livrer: 0,
        is_annuler: 0,
        telephone1: req.body.telephone,
        date_recup: req.body.date_recup,
        create_date: date_ob,
        update_date: req.body.update_date,
        update_by: req.body.update_by,
        id_modep: req.body.id_modep,
        tel2: req.body.tel2,
        avance: req.body.avance,
        reste_a_payer: req.body.reste_a_payer,
        jour_recup: req.body.jour_recup,
        heure_recup: req.body.heure_recup,
    }
    Livraison.create(livraison)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the livraison."
            });
        });
};
exports.findAllProductPatisserie = (req, res) => {
    sequelize.query("SELECT * FROM cs_menu_patisserie_view WHERE del=0").then(results => {
        res.status(200).json(results[0]);
    })
}
exports.findAllProductBoissonChaux = (req, res) => {
    sequelize.query("SELECT * FROM cs_menu_bchaude_view WHERE del=0").then(results => {

        res.status(200).json(results[0]);
    })
}
exports.findAllProductEauKmg = (req, res) => {
    sequelize.query("SELECT * FROM cs_menu_eau_view WHERE del=0").then(results => {

        res.status(200).json(results[0]);
    })
}
exports.findAllProductBoissonFr = (req, res) => {
    sequelize.query("SELECT * FROM cs_menu_bfraiches_view WHERE del=0").then(results => {
        res.status(200).json(results[0]);
    })
}
exports.findAllProductFastFoodPizzas = (req, res) => {
    sequelize.query("SELECT * FROM cs_menu_pizza_view WHERE del=0").then(results => {

        res.status(200).json(results[0]);
    })
}
exports.findAllProductPain = (req, res) => {
    sequelize.query("SELECT * FROM cs_menu_pains_view WHERE del=0").then(results => {

        res.status(200).json(results[0]);
    })
}
exports.findAllProductPainSpeciale = (req, res) => {
    sequelize.query("SELECT * FROM cs_menu_pains_sp_view WHERE del=0").then(results => {
        res.status(200).json(results[0]);
        console.log(res);
    })
}
exports.findAllProductFastFoodBergers = (req, res) => {
    sequelize.query("SELECT * FROM cs_menu_burger_view WHERE del=0").then(results => {

        res.status(200).json(results[0]);
    })
}
exports.findAllProductFastFoodSandwish = (req, res) => {
    sequelize.query("SELECT * FROM cs_menu_sandwich_view WHERE del=0").then(results => {

        res.status(200).json(results[0]);
    })
}
exports.findAllProductFastFoodCuisine = (req, res) => {
    sequelize.query("SELECT * FROM cs_menu_cuisine_view WHERE del=0").then(results => {

        res.status(200).json(results[0]);
    })
}
exports.findAllProductGlacier = (req, res) => {
    sequelize.query("SELECT * FROM cs_menu_glace_view WHERE del=0").then(results => {

        res.status(200).json(results[0]);
    })
}
exports.findAllProductProduitFrais = (req, res) => {
    sequelize.query("SELECT * FROM cs_menu_produits_frais_view WHERE del=0").then(results => {

        res.status(200).json(results[0]);
    })
}

exports.findAllProductViennoiserie = (req, res) => {
    sequelize.query("SELECT * FROM cs_menu_viennoiserie_view WHERE del=0").then(results => {

        res.status(200).json(results[0]);
    })
}
exports.findAllProductSalade = (req, res) => {
    sequelize.query("SELECT * FROM cs_menu_salade_view WHERE del=0").then(results => {

        res.status(200).json(results[0]);
    })
}