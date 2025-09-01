const recipes = ["chicken", "egg puff", "paneer"]

function getRecipes (){
  // return recipes
  return "getting my recipes"
}

// console.log(getRecipes());

// module.exports = getRecipes; // exporting a function

// now let us export only an array
// module.exports = recipes;

// module.exports = {recipes, getRecipes}


// now let us se  alias export:
// module.exports = { dataRecipes: recipes, getRecs : getRecipes}   // default export



// ES 6 Modules

function name(params){
  return "tom"
}

export const user = () => {
  return "iam user tony"
};


export default name;

