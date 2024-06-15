function getSortKeyValue(brand){
    console.log("Inside getSortKeyValue",brand)
    if(brand.toLowerCase()==="apple")return "#EC_EARPHONES_APPLE"
    else return "";
}

function getPartitionKeyValue(category){
    console.log("Inside getPartitionKeyValue",category)
    if(category.toLowerCase()==="electronics"){
        return "#ELECTRONICS"
    }
    return ""
}

module.exports={getSortKeyValue,getPartitionKeyValue}