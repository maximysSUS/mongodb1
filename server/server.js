const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const port = process.env.PORT || 3001
const app = express()

const UserSchema = new mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   password: { type: String, required: true }

})

const UserModel = mongoose.model('users', UserSchema);

mongoose.connect(process.env.URI_MONGODB)

app.get('/users', async (reg, res) => {
   try {
      await UserModel.updateOne(
         { name: 'Tywin Lannister' },
         { $set: { email: '123@gmail.ru' } }
      )
      const users = await UserModel.findOne({ name: 'Tywin Lannister' })
      res.send(users)
   } catch (err) {
      console.error(err, 'ошибка при получении пользователей')
   }
})
app.listen(port, () => {
   console.log(`server is running on port ${port}`)
})

req1.addEventListener('click', async () => {
   try {
      const users = await getData('http://localhost:3002/getUsers')
      users.forEach(user => {
         container.insertAdjacentHTML(
            `beforeend`,
            `<div class="post">
            <p class="name">${user.name}</p>
            <p class="email" > ${user.email}</p >
            <p class="password" > ${user.password}</p >
   </ div>
   `)
      })

      console.log(users)
   } catch (err) {

      console.error('Ошибка при получении пользователей', err)
   }
})