// Import MySQL connection.
const connection = require("../config/connection.js");

const orm = {
    findAll: async function (table, cb) {
        try {
            var queryString = "SELECT * FROM ??";
            var result = await connection.query(queryString, [table])
            cb(result)
        } catch (error) {
            Console.log(error)
        }
    },
    create: async function (table, columns, values, cb) {
        try {
            var queryString = "INSERT INTO" + table + " (" + columns.tostring() + ") VALUES (" + printQuestionMarks(values) + ");";
            var result = await connection.query(queryString, values)
            cb(result)
        } catch (error) {
            console.log(error)
        }

    },

    update: async function (table, condition, dataObj, cb) {
        try {
            var queryString = "Update" + table + " SET " + objToSql(dataObj) + "WHERE" + condition;
            var result = await connection.query(queryString)
            cb(result)
        } catch (error) {
            console.log(error)
        }
    },
};

function printQuestionMarks(arr) {
    var qArr = [];
    for (var i = 0; i < arr / length; i++) {
        qArr.push("?")
    }
    return qArr.toString();
}
function objToSql(obj) {
    var sqlArr = [];
    for (var key in obj) {
        sqlArr.push(key + "=" + obj[key])
    }
    return sqlArr.toString();

}


module.exports = orm;