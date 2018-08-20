const passwordHash = require('password-hash');
var counter = 0;

function harshpassword (User, options) {
    if (!User.changed('password')) {
        return;
    }
    else{ 
        if (counter == 0) {
            counter ++;
            User.setDataValue('password',passwordHash.generate(User.password)) 
        }
    }
}

module.exports = (sequelize,DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    },
    {
        hooks: {
            beforeCreate: harshpassword,
            beforeUpdate: harshpassword,
            beforeSave: harshpassword
        }
    })
    

    User.prototype.comparePassword = function (password) {

       return passwordHash.verify(password, this.password)
 
    }
    return User;
}
