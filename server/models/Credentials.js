module.exports=(sequelize,DataTypes)=>{
    const Credentials=sequelize.define('Credentials',{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        mobile:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        user_id:{
            type:DataTypes.STRING,
            allowNull:false
        },
        
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },

        confirm_pwd:{
            type:DataTypes.STRING,
            allowNull:false
        }

    })
    return Credentials;
}