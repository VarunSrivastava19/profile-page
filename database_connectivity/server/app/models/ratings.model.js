module.exports = (sequelize, Sequelize) => {
    const ratings = sequelize.define("ratings",  {
      userId:{
        type:Sequelize.INTEGER,
        field: 'userId',
        references: {
            model: 'users',
            key: 'userId'
        }
      },
      restId:{
        type:Sequelize.INTEGER,
        field: 'restId',
        references: {
            model: 'restaurant',
            key: 'restId'
        }
      },
      ratings:{
        type:Sequelize.INTEGER,
        field:'rating',
      }
    },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
        underscored: true
    });
  
    return ratings;
  };