const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('microinstragram','root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize
    .authenticate()
    .then(() => console.log('Connected to MySQL'))
    .catch((err) => {
        console.error('Database connection failed:', err);
        process.exit(1);
    });

module.exports = sequelize;
