import app from './src/app.js';
import { sequelize } from './src/config/db.js'

import './src/models/User.js';


async function main() {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
      await sequelize.sync({ force: false });
      app.listen(5423);
      console.log('Server on port 5423');
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
}

main();