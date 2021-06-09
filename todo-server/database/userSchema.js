const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: String,
    hashedPassword: String,
});

userSchema.methods.setPassword = async function(password) {
    const hash = await bcrypt.hash(password, 10);
    this.hashedPassword = hash;
}

userSchema.methods.checkPassword = async function(password) {
    const result = await bcrypt.compare(password, this.hashedPassword);
    return result; //true /false
}

userSchema.statics.findByUsername = function(username) {
    return this.findOne({ username });
};

const User = mongoose.model('user', userSchema)

module.exports = {
    User
}