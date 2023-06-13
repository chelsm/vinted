let db = require ('../../config')

export default interface UserModel {
    firstName: string;
    lastName: string;
}

const userSchema = new db.Schema({
    id: Number,
    firstName: String,
    lastName: String
});
