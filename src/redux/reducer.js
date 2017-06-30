function reducer(state, action){
  switch(action.type){
    case "DisplayIngredient":
      return Object.assign({}, state, {
        name: action.name,
        id:action.id,
        sap: action.sap,
        hardness: action.hardness,
        cleansing: action.cleansing,
        condition1: action.condition1,
        bubbly: action.bubbly,
        creamy: action.creamy,
        iodine: action.iodine,
        ins: action.ins,
        lauric: action.lauric,
        myristic: action.myristic,
        palmitic: action.palmitic,
        stearic: action.stearic,
        rincinoleic: action.rincinoleic,
        oleic: action.oleic,
        linoleic: action.linoleic,
        linolenic: action.linolenic})

    }
}

module.exports = reducer
