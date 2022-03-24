module.exports = (sequelize, Sequelize) => {
    const LivraisonProd = sequelize.define("el_produit_livraison", {
        id_prods: {
            type: Sequelize.INTEGER
        },
        prix_prod: {
            type: Sequelize.INTEGER
        },
        quantite: {
            type: Sequelize.INTEGER
        },
        id_livraison: {
            type: Sequelize.INTEGER
        },
        prix_total: {
            type: Sequelize.INTEGER
        },
        is_livrer: {
            type: Sequelize.INTEGER
        },
        del: {
            type: Sequelize.INTEGER
        },
        is_annuler: {
            type: Sequelize.STRING
        },
        create_date: {
            type: Sequelize.DATE,
            allowNull: true
        },
        update_date: {
            type: Sequelize.DATE,
            allowNull: true

        },
        update_by: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
    });
    return LivraisonProd;
};