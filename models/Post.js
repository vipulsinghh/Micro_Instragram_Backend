const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const User = require('./User');

const Post = sequelize.define(
    'Post',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: { type: DataTypes.TEXT, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: false },
        images: { type: DataTypes.JSON },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users', // table name
                key: 'id',
            },
        },
    },
    {
        tableName: 'posts',
        timestamps: false,
    }
);

// Define associations
User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

module.exports = Post;
