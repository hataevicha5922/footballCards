module.exports = (sequelize, DataType) => {
  const Users = sequelize.define('Users', {
    firstName: {
      type: DataType.STRING,
      allowNull: false,
    },
    secondName: {
      type: DataType.STRING,
      allowNull: false,
    },
    age: {
      type: DataType.INTEGER,
      allowNull: false,
    },
  });
  return Users;
};
