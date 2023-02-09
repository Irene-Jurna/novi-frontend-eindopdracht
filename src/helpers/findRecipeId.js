// Niet werkend

function findRecipeId(data) {
    console.log("Gebeurt hier iets?");
    const findId = data.lastIndexOf("_");
    const findCompleteId = data.slice(findId + 1);
    console.log(findCompleteId);
    return findCompleteId;
}

export default findRecipeId;
