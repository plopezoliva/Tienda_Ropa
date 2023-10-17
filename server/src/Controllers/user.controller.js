import { Player } from '../models/User.js';

import bcrypt from 'bcrypt';

const saltRounds = 10;


export const register = async (req, res) => {

  const { email, name, password, phone, apodo } = req.body;
  const player = await Player.findOne({
    where: {
      email,
    },
  });
  
  if (player) {
    return res.status(400).json({
      message: 'Ya existe un usuario con ese email',
      data: {},
    });
   
  } else {
    try {
      const newPlayer = await Player.create({
        email,
        name,
        password: await bcrypt.hash(password, saltRounds),
        phone,
        apodo,
      });
      if (newPlayer) {
        return res.status(201).json({
          message: 'Usuario creado correctamente',
          data: newPlayer,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Algo salió mal',
        data: {},
      });
    }
  }
}

