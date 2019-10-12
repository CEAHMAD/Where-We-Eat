import Data from "../FakeData.json"


export function GetResturant(lat,lng){

   return  fetch(`/api/v1/GenerateFS.php?uid=${lat},${lng}&g et_param=value`) 
    .then(data=> data.json())
    .then(res => {
        console.log(res);
        return res
        
    })
    .catch(err => console.log(err)
    )

    // return Data.data
}
