// import user from "@/api/user-data.json"; // 後端完成後可刪

export function getIsSave(classroomID) { // user是否有收藏某間教室
    var myHeaders = new Headers();

    var myInit = {
        method: "POST",
        headers: myHeaders,
        mode: "cors",
        cache: "default",
    };

    var myRequest = new Request("https://3414756dcdbbb9cef262c13b17c05f73.serveo.net/api/app/getIsSave", myInit);

    fetch(myRequest)
        .then(function(response) {
            return response.includes(classroomID);
        })
}
/*
  input:
    classroomID: 教室id
  userAccount: <string>
  
  return: <bool>
*/

export function addSave(classroomID) { // 添加收藏
    // alert(`[api/save/addSave]\nclassroomID = ${classroomID}`); // debug
    var url = "https://3414756dcdbbb9cef262c13b17c05f73.serveo.net/api/app/addSave";

    fetch(url, {
            method: "POST", // or 'PUT'
            body: JSON.stringify(classroomID), // data can be `string` or {object}!
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
}
/*
  input:
    classroomID: 教室id
  userAccount: <string>
*/

export function removeSave(classroomID) { // 移除收藏
    var url = "https://3414756dcdbbb9cef262c13b17c05f73.serveo.net/api/app/romoveSave";

    fetch(url, {
            method: "POST", // or 'PUT'
            body: JSON.stringify(classroomID), // data can be `string` or {object}!
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
    alert(`[api/save/removeSave]\nclassroomID = ${classroomID}`); // debug
}
/*
  input:
    classroomID: 教室id
  userAccount: <string>
*/

export function getAllSave() { // user的全部收藏

    var myHeaders = new Headers();

    var myInit = {
        method: "POST",
        headers: myHeaders,
        mode: "cors",
        cache: "default",
    };

    var myRequest = new Request("https://3414756dcdbbb9cef262c13b17c05f73.serveo.net/api/app/getAllSave", myInit);

    fetch(myRequest)
        .then(function(response) {
            return response.saveData;
        })

}
/*
  userAccount: <string>
  
  return: <array>
*/