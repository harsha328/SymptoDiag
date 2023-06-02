module.exports=(sequelize,DataTypes)=>{
    const Test_description=sequelize.define('Test_description',{
        test_id:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        test_description:{
            type:DataTypes.TEXT,
        },
        test_name:{
            type:DataTypes.STRING,
        },
        
    })
    return Test_description;
}