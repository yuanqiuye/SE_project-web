export async function getIsSave(classroomID) {
    console.log(document.cookie);
    try {
        var account = JSON.parse(localStorage.getItem('loggedInAccount')).toString();
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
            return await !response.json();
        }
        return false;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

/*
input:
  classroomID: 教室id
userAccount: <string>

return: <bool>
*/

export async function addSave(classroomID) { // 添加收藏
    // alert(`[api/save/addSave]\nclassroomID = ${classroomID}`); // debug
    const account = JSON.parse(localStorage.getItem('loggedInAccount'));
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
    const account = JSON.parse(localStorage.getItem('loggedInAccount'));
    await fetch('https://qiuye.mooo.com/api/app/removeSave', {
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
    try {
        const account = JSON.parse(localStorage.getItem('loggedInAccount'));
        const response = await fetch('https://qiuye.mooo.com/api/app/getAllSave', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ account }),
        });

        if (!response.ok) {
            throw new Error('请求失败');
        }

        const data = await response.json();
        return data.hint;
    } catch (error) {
        console.error('获取密码提示失败', error);
        throw error;
    }

}
/*
userAccount: <string>

return: <array>
*/