const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const User = sequelize.define(
    'User',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, allowNull: false },
        mobileNumber: { type: DataTypes.BIGINT, unique: true, allowNull: false },
        address: { type: DataTypes.TEXT },
        postCount: { type: DataTypes.INTEGER, defaultValue: 0 },
    },
    {
        tableName: 'users',
        timestamps: false,
    }
);

module.exports = User;
