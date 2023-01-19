const filterNamesX = (noms) => {
    return noms.filter((nom) => !nom.toLowerCase().includes("x"));
};

exports.filterNamesX = filterNamesX;
