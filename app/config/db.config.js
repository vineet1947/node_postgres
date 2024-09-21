module.exports = {
  HOST: 'dpg-cr2rbb3tq21c73fdlf20-a.oregon-postgres.render.com',
  USER: 'next_js_demo_user',
  PASSWORD: 'k9MdaVil2ykhmNhoKqKMC09C6qITQu3i',
  DB: 'testdb',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Accepts self-signed certificates (use with caution)
    },
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}

//postgresql://next_js_demo_user:k9MdaVil2ykhmNhoKqKMC09C6qITQu3i@dpg-cr2rbb3tq21c73fdlf20-a/next_js_demo

//PGPASSWORD=k9MdaVil2ykhmNhoKqKMC09C6qITQu3i psql -h dpg-cr2rbb3tq21c73fdlf20-a.oregon-postgres.render.com -U next_js_demo_user next_js_demo
