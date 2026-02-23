
function addNewProperty(){
    return (req, res, next)=>{
        req.newProperty = "Hii, i am new"
        next() //it will send this to next
    }
}

module.exports = {addNewProperty}