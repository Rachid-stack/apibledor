module.exports = (sequelize, Sequelize) => {
    const Livraison = sequelize.define("el_livraison", {
        nom_c: {
            type: Sequelize.STRING
        },
        prenom_c: {
            type: Sequelize.STRING
        },
        del: {
            type: Sequelize.INTEGER
        },
        telephone1: {
            type: Sequelize.INTEGER
        },
        date_commande: {
            type: Sequelize.STRING
        },
        is_livrer: {
            type: Sequelize.INTEGER
        },
        is_annuler: {
            type: Sequelize.INTEGER
        },
        date_recup: {
            type: Sequelize.DATE,
            allowNull: true
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
        id_modep: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        tel2: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        avance: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        reste_a_payer: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        jour_recup: {
            type: Sequelize.STRING,
            allowNull: true
        },
        heure_recup: {
            type: Sequelize.STRING,
            allowNull: true
        },

    });
    return Livraison;
};