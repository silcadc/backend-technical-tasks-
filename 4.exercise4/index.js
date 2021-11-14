const sequelize = require('./conexion');

let query = async () => {
    await sequelize.query(
        `select * from product
        order by description, status`,
        {
            type: sequelize.QueryTypes.SELECT
        }
    )
    .then(function (users) {
        console.log(users)
    })
    .catch(error => console.log(error))
};
query();