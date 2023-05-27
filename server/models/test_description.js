module.exports=(sequelize,DataTypes)=>{
    const test_description=sequelize.define('test_description',{
        test_id:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        test_description:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        test_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
       
    })
    return test_description;
}