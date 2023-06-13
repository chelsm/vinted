import {getAllUsers, getUserById} from '../../repositories/users-repository/UserRepository'

export const searchUsers = async () => {
    try {
        const users = await getAllUsers();
        return users
    } catch (err) {
        throw err;
    }
}

export const searchUserById = async (id: number) => {
    try {
        const user = await getUserById(id);
        return user
    } catch (err) {
        throw err;
    }
}
