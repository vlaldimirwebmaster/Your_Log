const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    name:{type: String, required: true},
    type:{type: String},
    category:{type: Number},
    calories:{type: Number, required: true},
    fat:{type: Number},
    fat_st:{type: Number},
    fat_mst:{type: Number},
    fat_pst:{type: Number},
    cholesterol:{type: Number},
    salt:{type: String},
    sodium:{type: String},
    carbs:{type: Number},
    fiber:{type: Number},
    sugar:{type: Number},
    proteins:{type: Number},
    vitamin_A:{type: Number},
    vitamin_B1:{type: String},
    vitamin_B2:{type: String},
    vitamin_B3:{type: String},
    pantothenic_acid:{type: String},
    vitamin_B6:{type: String},
    vitamin_B7:{type: String},
    folate:{type: String},
    folic_acid:{type: String},
    vitamin_B12:{type: String},
    vitamin_D:{type: String},
    vitamin_E:{type: String},
    vitamin_K:{type: String},
    Calcium:{type: Number},
    Iodine:{type: String},
    Iron:{type: String},
    beta_carotene:{type: String},
    chromium:{type: String},
    cobalt:{type: String},
    copper:{type: String},
    magnesium:{type: Number},
    manganese:{type: String},
    molybdenum:{type: String},
    phosphorus:{type: String},
    potassium:{type: Number},
    selenium:{type: String},
    sodium:{type: Number},
    zinc:{type: Number},
    owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Product', schema)