const {Sequelize} =require("sequelize")

const sequelize=new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD,
    {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
})

const dbconnect=async()=>{
    try {
        await sequelize.authenticate()
        console.log("db connect")
    } catch (error) {
        console.error("un connect")
    }
}
module.exports=dbconnect