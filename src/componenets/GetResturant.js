import Data from "../FakeData.json"


export function GetResturant(){

//    return  fetch("/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&g et_param=value") 
//     .then(data=> data.json())
//     .then(res => {
//         console.log(res);
//         return res
        
//     })
//     .catch(err => console.log(err)
//     )

    return Data.data
}
