const Sequelize = require('sequelize');
const path = require('path')

var sequelize = new Sequelize(undefined, undefined, undefined, {
  host: 'localhost',
  dialect: 'sqlite',
  storage: path.join(__dirname, '../database/database.sqlite')
})

// 测试是否能连接到数据库

// sequelize
//   .authenticate()
//   .then(()=>{
//     console.log('success')
//   }).catch(error => {
//     console.log(error)
//   });

// 定义一个note表

var　Note = sequelize.define('note', {
  text: {
    type: Sequelize.STRING
  },
  uid: {
    type: Sequelize.STRING
  }
});

Note.sync()

module.exports = Note;