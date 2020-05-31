import location from "./city -location"
var convertData = function (data) {
    // console.log(data);
    
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = location[data[i].name];
        // console.log(location[data[i].name]);
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};
export default convertData