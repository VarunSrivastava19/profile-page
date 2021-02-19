module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users",  {
      userId:{
          field: 'userId',
          type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      }
    },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
        underscored: true
    });
  
    return Users;
  };