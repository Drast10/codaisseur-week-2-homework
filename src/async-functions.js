function giveItBackLater(value, callback) {
        setTimeout(function(){
        callback(value)},
        100)
}
function addSomePromises (somePromise) {
    return new Promise((reslove)=>{
       somePromise.then((success)=>{
        return reslove(success+success);
       }).catch((faliure)=>{
        return reslove(faliure+faliure+faliure);
       })

    })
}
function promiseToGiveItBackLater(value) {
    return new Promise(
        (resolve)=>{
        giveItBackLater(value, ()=>{
            return resolve(value)
        })
    })
}

module.exports = { giveItBackLater,
    addSomePromises,
    promiseToGiveItBackLater}