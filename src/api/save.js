export async function getIsSave(classroomID) {
    var account = localStorage.getItem('loggedInAccount').toString();
    if (classroomID != null) {
        const response = await fetch('https://qiuye.mooo.com/api/app/getIsSave', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // 添加这一行以携带凭据
            body: JSON.stringify({
                userAccount: account,
                classroomID: classroomID
            }),
        });

        if (!response.ok) {
            throw new Error('请求失败');
        }
        return response.json();
    }
    return false;
}

/*
input:
  classroomID: 教室id
userAccount: <string>

return: <bool>
*/

export async function addSave(classroomID) { // 添加收藏
    // alert(`[api/save/addSave]\nclassroomID = ${classroomID}`); // debug
    const account = localStorage.getItem('loggedInAccount');
    await fetch('https://qiuye.mooo.com/api/app/addSave', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            userAccount: account,
            classroomID: classroomID,
        }),
    });
}
/*
input:
  classroomID: 教室id
userAccount: <string>
*/

export async function removeSave(classroomID) { // 移除收藏
    const account = localStorage.getItem('loggedInAccount');
    await fetch('https://qiuye.mooo.com/api/app/romoveSave', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            userAccount: account,
            classroomID: classroomID,
        }),
    });
}
/*
input:
  classroomID: 教室id
userAccount: <string>
*/

export async function getAllSave() { // user的全部收藏

    const account = localStorage.getItem('loggedInAccount');
    const response = await fetch('https://qiuye.mooo.com/api/app/getAllSave', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ userAccount: account }),
    });

    if (!response.ok) {
        throw new Error('请求失败');
    }

    const data = await response.json();

    const arr = [];

    // 遍歷 data 中的每個屬性
    for (const key in data) {
        // 檢查屬性值是否為 true
        if (data[key] === true) {
            // 如果是 true，將該鍵添加到 arr 中
            arr.push(key);
        }
    }
    console.log(arr);
    return arr;


}
/*
userAccount: <string>

return: <array>
*/