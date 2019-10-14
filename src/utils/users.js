const users = []

// addUser, removeUser, getUser, getUserInRoom

const addUser = ({ id, username, room }) => {

    // Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate the data
    if(!username || !room){
        return {
            error: 'Username and room are required !'
        }
    }

    // check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validate username

    if(existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // Store user

    const user = {id, username, room}
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUserInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUserInRoom
}

// addUser({
//     id: 22,
//     username: 'Akash',
//     room: 'West Delhi'
// })

// addUser({
//     id: 32,
//     username: 'Akki',
//     room: 'South Delhi'
// })

// addUser({
//     id: 42,
//     username: 'Deepak',
//     room: 'East Delhi'
// })

// const user = getUser(421)
// console.log(user)

// const userList = getUserInRoom('South Delhi')
// console.log(userList)

// console.log(users)

// const res = addUser({
//     id: 13,
//     username: 'Akki',
//     room: 'Gurgoan'
// })

// console.log(res)

// const removeUser = removeUser(22)
// console.log(removeUser)
// console.log(users)
