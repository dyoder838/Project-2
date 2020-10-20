module.exports = function(sequelize, DataTypes) {
    var Parent = sequelize.define("Parent", {
      first_name:{
        type: DataTypes.STRING,
        allowNull:false
      },
      last_name:{
          type: DataTypes.STRING,
          allowNull:false
      },
      email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
      },
      available_days:{
          type: DataTypes.BOOLEAN
      },
      bio: {
          type: DataTypes.TEXT,
          allowNull:true
      },
      // primaryKey:true
    });
    return Parent;
  };
  