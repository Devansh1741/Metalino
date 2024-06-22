import bcrypt from 'bcrypt'
const { Schema, models, model } = require("mongoose");
const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, 
        required: true, 
        validate: {
            validator: function(pass) {
                return pass && pass.length >= 5;
            },
            message: 'Password must be at least 5 characters long'
        },
    }
}, {timestamps: true});

UserSchema.post('validate', function (user) {
    const notHashedPass = user.password;
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(notHashedPass, salt);
})

export const User = models?.User || model('User', UserSchema);  