var orm = require("../config/orm.js");

const burger = {
    getAll: function (cb) {
        orm.findAll("burgers", function (res) {
            cb(res);
        })
    },
    createBurger: function (value, cd) {
        orm.create(value, function (res) {
            cb(res);
        })

    },

    updateBurger: function (objColVals, condition, cb) {
        //const condition = "id = " + id;
        orm.update("burgers", objColVals, condition, function (rest) {
            cb(res)
        });
    },
}
module.exports = burger