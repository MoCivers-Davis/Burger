var orm = require("../config/orm.js");

const burger= {
    getAll: function (cb) {
        orm.findAll("burgers", cb);
    },
    findByName: function (name, cb) {
        const condition = "burger_name = `" + name +"`"
        orm.findByCondition("burgers", condition, cb);
    },
    findById: function (id, cb) {
        const condition = "id = " + id;
        orm.findByCondition("burgers", condition, cb);
    },
    addBurger: function (name, cb) {
        console.log("new burge r name is:" + name +".");
        orm.create("burgers", ["burger_name"], [name], cb);
    },

    updateBurger: function(id, data, cb) {
        const condition = "id = " + id;
        orm.update("burgers", condition, data, cb);
    }
};

module.exports = burger