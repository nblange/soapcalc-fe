const displayIngredientAction = (name, id, sap, hardness, cleansing, condition1, bubbly, creamy,
   iodine, ins, lauric, myristic, palmitic, stearic, rincinoleic , oleic, linoleic, linolenic) =>
   ({type: 'DisplayIngredient', name: name, id:id, sap: sap, hardnes: hardness, cleansing: cleansing,
    condition1: condition1, bubbly: bubbly, creamy: creamy, iodine: iodine, ins: ins, lauric: lauric, myristic: myristic, palmitic: palmitic, stearic: stearic,
     rincinoleic: rincinoleic, oleic: oleic, linoleic: linoleic, linolenic: linolenic})

module.exports = {displayIngredientAction}
