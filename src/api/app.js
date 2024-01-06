// import enablePeriod from "@/api/enable-period.json"; // 後端完成後可刪
// import user from "@/api/user-data.json"; // 後端完成後可刪

//加async、useraccount
export async function getUserPeriodData() { // 獲取user的借用資料
    // 可修改區 start

    const account = localStorage.getItem('loggedInAccount');
    try {
        const response = await fetch('https://qiuye.mooo.com/api/app/getUserPeriodData', {
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
        // 将对象的值转换为数组
        const dataArray = Object.values(data);
        //console.log("dataArray",data);
        const updatedData = await Promise.all(dataArray.map(async(item) => {
            var start = item.period.startPeriod;
            var end = item.period.endPeriod;

            const daystart = new Date(start);
            const dateend = new Date(end);
            // console.log("分鐘" + dateend.getMinutes())
            var n = 0;
            if (dateend.getMinutes() == 55) {
                n = 9;
            } else {
                n = dateend.getHours() - 8;

            }
            // 創建新的 period 物件
            const newPeriod = {
                "day": daystart.getDay(), // 星期幾，這裡是示範值，根據實際情況調整
                "startPeriod": daystart.getHours() - 7, // 開始時間
                "endPeriod": n // 結束時間
            };
            console.log(dateend.getMinutes())
                // 將新的 period 物件替換原來的 period
            item.period = newPeriod;
            return item;
        }));

        console.log("getUserPeriodData", updatedData);

        // 回傳處理後的 JSON 物件
        return updatedData;


    } catch (error) {
        console.error(error);
        throw error;
    }

    // return user.periodData;
    // 可修改區 end
}



export async function getAllUserPeriodData() {
    try {
        const response = await fetch('https://qiuye.mooo.com/api/app/getAllUserPeriodData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error('请求失败');
        }

        const data = await response.json();
        // 将对象的值转换为数组
        const dataArray = Object.values(data);
        //console.log("dataArray",data);
        const updatedData = dataArray.map((item) => {
            var start = item.period.startPeriod;
            var end = item.period.endPeriod;

            const daystart = new Date(start);
            const dateend = new Date(end);
            // console.log("分鐘" + dateend.getMinutes())
            var n = 0;
            if (dateend.getMinutes() == 55) {
                n = 9;
            } else {
                n = dateend.getHours() - 8;

            }
            // 創建新的 period 物件
            const newPeriod = {
                "day": daystart.getDay(), // 星期幾，這裡是示範值，根據實際情況調整
                "startPeriod": daystart.getHours() - 7, // 開始時間
                "endPeriod": n // 結束時間
            };
            console.log(dateend.getMinutes())
                // 將新的 period 物件替換原來的 period
            item.period = newPeriod;
            return item;
        });

        console.log(updatedData);

        // 回傳處理後的 JSON 物件
        return updatedData;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export async function getEnablePeriodData(classroomID) {
    const response = await fetch('https://qiuye.mooo.com/api/app/getEnablePeriodData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
        credentials: 'include',
        body: JSON.stringify({ classroomID }),
    });

    if (!response.ok) {
        throw new Error('请求失败');
    }

    const data = await response.json();
    return data;
}


export async function setEnablePeriod(classroomID, enablePeriod) {
    try {
        const apiUrl = `https://qiuye.mooo.com/api/app/setEnablePeriod`; // 根据实际后端 API 地址修改

        const response = await fetch(apiUrl, {
            method: 'POST', // 根据你的 API 需求，可能是 'POST' 或 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ classroomID, enablePeriod }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // 返回响应的数据，如果有的话
        return response.json();
    } catch (error) {
        console.error('Error during setEnablePeriod:', error);
        throw error;
    }
}



//加async
export async function getAllEnablePeriodData() { // 跟後端拿全部教室的可借時段
    try {
        const response = await fetch('https://qiuye.mooo.com/api/app/getAllEnablePeriodData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error('请求失败');
        }

        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
/*
  return:
    請參照 enable-period.json
*/


// function convertToTimeString(day, startPeriod, endPeriod) {

//     // 基准日期为2024年1月1日星期五
//     const baseDate = new Date(2024, 0, 1); // 月份从0开始，所以0代表1月
//     const currentDate = new Date();

//     const daysDifference = getDaysDifference(currentDate, baseDate); // 计算相对于基准日期的天数
//     const todayday = ((daysDifference - 1) % 7) + 1; //算出今天星期幾

//     const startDateTime = new Date();
//     const endDateTime = new Date();

//     if (todayday < day) {
//         startDateTime.setDate(currentDate.getDate() + day - todayday);
//         endDateTime.setDate(currentDate.getDate() + day - todayday);
//     } else {
//         startDateTime.setDate(currentDate.getDate() + 7 - todayday + day);
//         endDateTime.setDate(currentDate.getDate() + 7 - todayday + day);
//     }

//     if (startPeriod === 1) startDateTime.setHours(8, 20, 0, 0);
//     else if (startPeriod === 2) startDateTime.setHours(9, 20, 0, 0);
//     else if (startPeriod === 3) startDateTime.setHours(10, 20, 0, 0);
//     else if (startPeriod === 4) startDateTime.setHours(11, 15, 0, 0);
//     else if (startPeriod === 5) startDateTime.setHours(12, 10, 0, 0);
//     else if (startPeriod === 6) startDateTime.setHours(13, 10, 0, 0);
//     else if (startPeriod === 7) startDateTime.setHours(14, 10, 0, 0);
//     else if (startPeriod === 8) startDateTime.setHours(15, 10, 0, 0);
//     else if (startPeriod === 9) startDateTime.setHours(16, 5, 0, 0);

//     if (endDateTime === 1) endDateTime.setHours(9, 10, 0, 0);
//     else if (endPeriod === 2) endDateTime.setHours(10, 10, 0, 0);
//     else if (endPeriod === 3) endDateTime.setHours(11, 10, 0, 0);
//     else if (endPeriod === 4) endDateTime.setHours(12, 5, 0, 0);
//     else if (endPeriod === 5) endDateTime.setHours(13, 0, 0, 0);
//     else if (endPeriod === 6) endDateTime.setHours(14, 0, 0, 0);
//     else if (endPeriod === 7) endDateTime.setHours(15, 0, 0, 0);
//     else if (endPeriod === 8) endDateTime.setHours(16, 0, 0, 0);
//     else if (endPeriod === 9) endDateTime.setHours(16, 55, 0, 0);

//     const result = {
//         startPeriod: startDateTime.toISOString(),
//         endPeriod: endDateTime.toISOString()
//     }

//     return result;

// }

// function getDaysDifference(date1, date2) {
//     // 获取两个日期的时间戳（毫秒数）
//     const time1 = date1.getTime();
//     const time2 = date2.getTime();

//     // 计算毫秒数差异
//     const timeDiff = Math.abs(time2 - time1);

//     // 计算天数差异
//     const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

//     return daysDiff;
// }

// 示例

// const result = convertToTimeString(3, 2, 3);  // 星期三，第2到第3节课
// console.log(result);



function convertToTimeString(day, startPeriod, endPeriod) {
    var baseDate = new Date();
    baseDate.setHours(0, 0, 0, 0);
    const currentDayOfWeek = baseDate.getDay();
    const daysUntilMonday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;
    const currentMonday = new Date(baseDate);
    currentMonday.setDate(baseDate.getDate() - daysUntilMonday);
    baseDate = new Date(baseDate);

    if (currentDayOfWeek == 6 || currentDayOfWeek == 0) {
        baseDate.setDate(currentMonday.getDate() + day + 6);
    } else baseDate.setDate(currentMonday.getDate() + day - 1);
    // 计算给定 day、startPeriod 和 endPeriod 对应的时间
    const startDateTime = new Date(baseDate);
    if (startPeriod === 1) startDateTime.setHours(8, 20, 0, 0);
    else if (startPeriod === 2) startDateTime.setHours(9, 20, 0, 0);
    else if (startPeriod === 3) startDateTime.setHours(10, 20, 0, 0);
    else if (startPeriod === 4) startDateTime.setHours(11, 15, 0, 0);
    else if (startPeriod === 5) startDateTime.setHours(12, 10, 0, 0);
    else if (startPeriod === 6) startDateTime.setHours(13, 10, 0, 0);
    else if (startPeriod === 7) startDateTime.setHours(14, 10, 0, 0);
    else if (startPeriod === 8) startDateTime.setHours(15, 10, 0, 0);
    else if (startPeriod === 9) {
        startDateTime.setHours(16, 5, 0, 0);
    }

    const endDateTime = new Date(baseDate);

    if (endDateTime === 1) endDateTime.setHours(9, 10, 0, 0);
    else if (endPeriod === 2) endDateTime.setHours(10, 10, 0, 0);
    else if (endPeriod === 3) endDateTime.setHours(11, 10, 0, 0);
    else if (endPeriod === 4) endDateTime.setHours(12, 5, 0, 0);
    else if (endPeriod === 5) endDateTime.setHours(13, 0, 0, 0);
    else if (endPeriod === 6) endDateTime.setHours(14, 0, 0, 0);
    else if (endPeriod === 7) endDateTime.setHours(15, 0, 0, 0);
    else if (endPeriod === 8) endDateTime.setHours(16, 0, 0, 0);
    else if (endPeriod === 9) {
        endDateTime.setHours(16, 55, 0, 0);
    }
    return {
        startPeriod: startDateTime.toJSON(),
        endPeriod: endDateTime.toJSON()
    };
}


// 举例：星期三（day: 3），第 4 節（startPeriod: 4），第 5 節（endPeriod: 5）


export async function sendApply(classroomID, selectedPeriod) {
    // console.log(selectedPeriod.day, selectedPeriod.startPeriod, selectedPeriod.endPeriod)
    const result = convertToTimeString(selectedPeriod.day, selectedPeriod.startPeriod, selectedPeriod.endPeriod);
    const apiUrl = 'https://qiuye.mooo.com/api/app/sendApply';
    const account = localStorage.getItem('loggedInAccount');
    selectedPeriod = result;
    console.log(selectedPeriod);
    try {
        const response = await fetch(apiUrl, {
            method: 'POST', // 或者 'PUT'，取決於你的後端接口
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ classroomID: classroomID, selectedPeriod: selectedPeriod, userAccount: account })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data.code)
        if (data.code == "200") return 200;
        else if (data.code == "400") return 400;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }
}
/*
  input:
    classroomID: <string>教室ID
    selectedPeriod: { day: <int>星期幾, startPeriod: <int>開始節數, endPeriod: <int>結束節數 }
  userAccount: <string>
  
  return:
    if 申請成功 -> return 200
    if 申請失敗 -> return 400
*/

export async function cancelApply(pid) {
    try {
        const response = await fetch(`https://qiuye.mooo.com/api/app/cancelApply`, {
            method: 'POST', // 假设取消申请是一个DELETE请求
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ pid }),
        });

        if (!response.ok) {
            // 网络请求失败
            throw new Error(`取消申请失败，状态码：${response.status}`);
        }

        const data = await response.json(); // 假设响应包含JSON数据
        console.log('取消申请成功', data);
        return 200; // 返回成功状态码
    } catch (error) {
        console.error('取消申请时发生错误', error.message);
        return 400; // 返回失败状态码
    }
}
/*
  input:
    pid: <string>時段ID (唯一性)
  
  return:
    if 成功 -> return 200
    if 失敗 -> return 400
*/

export async function deletePeriodData(pid) { // 刪除特定狀態的借用紀錄 (user) ( ex: 申請被拒絕 / 借用完畢(已還鑰匙) / 已取消申請 )
    // 可修改區 start
    try {
        const response = await fetch(`https://qiuye.mooo.com/api/app/deletePeriodData`, {
            method: 'POST', // 假设刪除申请是一个DELETE请求
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'Origin',
            },
            credentials: 'include',
            body: JSON.stringify({ pid }),
        });

        if (!response.ok) {
            // 网络请求失败
            throw new Error(`取消申请失败，状态码：${response.status}`);
        }

        const data = await response.json(); // 假设响应包含JSON数据
        console.log('刪除申請成功', data);
        return 200; // 返回成功状态码
    } catch (error) {
        console.error('刪除申請时发生错误', error.message);
        return 400; // 返回失败状态码
    }
    // 可修改區 end
}
/*
  input:
    pid: <string>時段ID (唯一性)
  
  return:
    if 成功 -> return 200
    if 失敗 -> return 400
*/

export async function LendKey(pid) { // 借出鑰匙 (admin)
    // 可修改區 start
    try {
        const response = await fetch(`https://qiuye.mooo.com/api/app/LendKey`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'Origin',
            },
            credentials: 'include',
            body: JSON.stringify({ pid }),
        });

        if (!response.ok) {
            // 网络请求失败
            throw new Error(`借出鑰匙失败，状态码：${response.status}`);
        }

        const data = await response.json(); // 假设响应包含JSON数据
        console.log('借出鑰匙成功', data);
        return 200; // 返回成功状态码
    } catch (error) {
        console.error('借出鑰匙时发生错误', error.message);
        return 400; // 返回失败状态码
    }
    // 可修改區 end
}
/*
  input:
    pid: <string>時段ID (唯一性)
  
  return:
    if 成功 -> return 200
    if 失敗 -> return 400
*/

export async function ReceiveKey(pid) { // 收到歸還的鑰匙 (admin)
    // 可修改區 start
    try {
        const response = await fetch(`https://qiuye.mooo.com/api/app/ReceiveKey`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'Origin',
            },
            credentials: 'include',
            body: JSON.stringify({ pid }),
        });

        if (!response.ok) {
            // 网络请求失败
            throw new Error(`歸還鑰匙失败，状态码：${response.status}`);
        }

        const data = await response.json(); // 假设响应包含JSON数据
        console.log('歸還鑰匙成功', data);
        return 200; // 返回成功状态码
    } catch (error) {
        console.error('歸還鑰匙发生错误', error.message);
        return 400; // 返回失败状态码
    }
    // 可修改區 end
}
/*
  input:
    pid: <string>時段ID (唯一性)
  
  return:
    if 成功 -> return 200
    if 失敗 -> return 400
*/

export async function acceptRequest(pid) { // 接受一個時段申請 (admin)
    // 可修改區 start
    try {
        const response = await fetch(`https://qiuye.mooo.com/api/app/acceptRequest`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pid }),
            credentials: 'include',
        });

        if (!response.ok) {
            // 网络请求失败
            throw new Error(`接受時段申請失败，状态码：${response.status}`);
        }

        const data = await response.json(); // 假设响应包含JSON数据
        console.log('接受時段申請成功', data);
        return 200; // 返回成功状态码
    } catch (error) {
        console.error('接受時段申請发生错误', error.message);
        return 400; // 返回失败状态码
    }
    // 可修改區 end
}
/*
  input:
    pid: <string>時段ID (唯一性)
  
  return:
    if 成功 -> return 200
    if 失敗 -> return 400
*/

export async function rejectRequest(pid) { // 拒絕一個時段申請 (admin)
    // 可修改區 start
    try {
        const response = await fetch(`https://qiuye.mooo.com/api/app/rejectRequest`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ pid }),
        });

        if (!response.ok) {
            // 网络请求失败
            throw new Error(`拒絕時段申請失败，状态码：${response.status}`);
        }

        const data = await response.json(); // 假设响应包含JSON数据
        console.log('拒絕時段申請成功', data);
        return 200; // 返回成功状态码
    } catch (error) {
        console.error('拒絕時段申請发生错误', error.message);
        return 400; // 返回失败状态码
    }
    // 可修改區 end
}
/*
  input:
    pid: <string>時段ID (唯一性)
  
  return:
    if 成功 -> return 200
    if 失敗 -> return 400
*/

export async function getAllUserPoint() { // 獲取所有的user的計點狀況 (admin)
    try {
        const response = await fetch('https://qiuye.mooo.com/api/app/getAllUserPoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({}),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }
}

export async function getUserPoint(userAccount) { // 獲取user的記點狀況 (admin)
    // 可修改區 start
    try {
        const response = await fetch('https://qiuye.mooo.com/api/app/getUserPoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ account: userAccount }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }
    // 可修改區 end
}
/*
  input:
    account: <string>學號(帳號)
  
  return:
    <int>違規點數
*/
//async
export async function setUserPoint(account, point) {
    try {
        const response = await fetch('https://qiuye.mooo.com/api/app/setUserPoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ account, point }),
        });

        if (!response.ok) {
            throw new Error(`请求失败，状态码: ${response.status}`);
        }

        return 200;
    } catch (error) {
        console.error('设置用户计分数据失败', error.message || error);
        throw error;
    }
}

/*
  input:
    account: <string>學號(帳號)
    point: <int>違規點數
  
  return:
    if 成功 -> return 200
    if 失敗 -> return 400
*/

export async function setUserBanState(account, state) {
    // 可修改區 start
    try {
        const response = await fetch('https://qiuye.mooo.com/api/app/setUserBanState', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ account, state }),
        });

        if (!response.ok) {
            throw new Error('请求失败');
        }

        return response.status;
    } catch (error) {
        console.error('设置用户计分数据失败', error);
        throw error;
    }
    // 可修改區 end
}