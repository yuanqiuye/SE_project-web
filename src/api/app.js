import enablePeriod from "@/api/enable-period.json"; // 後端完成後可刪
import user from "@/api/user-data.json"; // 後端完成後可刪

//加async、useraccount
export function getUserPeriodData(useraccount) { // 獲取user的借用資料
  // 可修改區 start

  // const apiUrl = `http://localhost:3001/${userAccount}`;

  // try {
  //   const response = await fetch(apiUrl);

  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }

  //   const data = await response.json();
  //   return data;
  // } catch (error) {
  //   console.error('There has been a problem with your fetch operation:', error);
  //   throw error;
  // }
  useraccount
  return user.periodData;
  // 可修改區 end
}


//!!!!!完成，在溝通取得全部要如何拿
export function getAllUserPeriodData() {
  // 可修改區 start
  const apiUrl = `http://localhost:3002/periodData`; // 假設有一個名為 "periodData" 的 JSON Server 路由

  // 發送 GET 請求
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // 将对象的值转换为数组
      const dataArray = Object.values(data);
      console.log(dataArray);
      return dataArray;
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      throw error;
    });
  // 可修改區 end
}

//!!!!!完成
export async function getEnablePeriodData(classroomID) {
  const apiUrl = `http://localhost:3001/${classroomID}`;

  try {
    const response = await fetch(apiUrl);

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


//要等成功後再測試
export async function setEnablePeriod(classroomID, enablePeriod) {
  try {
    const apiUrl = `http://localhost:3001/${classroomID}`; // 根据实际后端 API 地址修改

    const response = await fetch(apiUrl, {
      method: 'PUT', // 根据你的 API 需求，可能是 'POST' 或 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        enablePeriod: enablePeriod,
      }),
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
export function getAllEnablePeriodData() { // 跟後端拿全部教室的可借時段
  // const apiUrl = `http://localhost:3001`; // 假設有一個名為 "periodData" 的 JSON Server 路由

  // // 發送 GET 請求
  // return fetch(apiUrl, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     return data;
  //   })
  //   .catch(error => {
  //     console.error('There has been a problem with your fetch operation:', error);
  //     throw error;
  //   });
  return enablePeriod;
}
/*
  return:
    請參照 enable-period.json
*/

//之後要再做測試
export async function sendApply(classroomID, selectedPeriod) {
  const apiUrl = 'your_backend_api_url';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST', // 或者 'PUT'，取決於你的後端接口
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        classroomID: classroomID,
        selectedPeriod: selectedPeriod,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data; // 可能是一個包含成功或失敗信息的對象，取決於你的後端實現
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
    const response = await fetch(`/api/app/cancelApply/${pid}`, {
      method: 'DELETE', // 假设取消申请是一个DELETE请求
      headers: {
        'Content-Type': 'application/json',
        // 可根据需要添加其他头部信息
      },
      // 可根据需要添加请求体
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
    const response = await fetch(`/api/app/deletePeriodData/${pid}`, {
      method: 'DELETE', // 假设刪除申请是一个DELETE请求
      headers: {
        'Content-Type': 'application/json',
        // 可根据需要添加其他头部信息
      },
      // 可根据需要添加请求体
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
    const response = await fetch(`/api/app/LendKey/${pid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // 可根据需要添加其他头部信息
      },
      // 可根据需要添加请求体
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
    const response = await fetch(`/api/app/ReceiveKey/${pid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // 可根据需要添加其他头部信息
      },
      // 可根据需要添加请求体
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
    const response = await fetch(`/api/app/acceptRequest/${pid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // 可根据需要添加其他头部信息
      },
      // 可根据需要添加请求体
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
    const response = await fetch(`/api/app/rejectRequest/${pid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // 可根据需要添加其他头部信息
      },
      // 可根据需要添加请求体
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

//加async
export  function getAllUserPoint() { // 獲取所有的user的計點狀況 (admin)
  // try {
  //   const response = await fetch('/api/app/getAllUserPoint');  // 替换为实际的 API 地址
  //   if (!response.ok) {
  //     throw new Error('请求失败');
  //   }

  //   const userPoints = await response.json();
  //   return userPoints;
  // } catch (error) {
  //   console.error('獲取計點狀況失败', error);
  //   throw error;
  // }
  return [
    { account: "01057900", role: 0, point: 2, banned: 1 },
    { account: "01057901", role: 1, point: 3, banned: 0 },
    { account: "01057902", role: 2, point: 4, banned: 0 },
  ];
}

export function getUserPoint(userAccount) { // 獲取user的記點狀況 (admin)
  // 可修改區 start

  // const apiUrl = `http://localhost:3001/${userAccount}/point`;

  // try {
  //   const response = await fetch(apiUrl);

  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }

  //   const data = await response.json();
  //   return data;
  // } catch (error) {
  //   console.error('There has been a problem with your fetch operation:', error);
  //   throw error;
  // }
  userAccount
  return user.point;
  // 可修改區 end
}
/*
  input:
    account: <string>學號(帳號)
  
  return:
    <int>違規點數
*/
//async
export  function setUserPoint(account, point) { // 修改user的記點狀況 (admin)
  // 可修改區 start
  // try {
  //   const response = await fetch('/api/app/setUserPoint', {
  //     method: 'POST',  // 通常在修改数据时使用 POST 请求
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ account, point }),
  //   });

  //   if (!response.ok) {
  //     throw new Error('请求失败');
  //   }

  //   return response.status;
  // } catch (error) {
  //   console.error('设置用户计分数据失败', error);
  //   throw error;
  // }
  account
  point
  return 200;
  // 可修改區 end
}
/*
  input:
    account: <string>學號(帳號)
    point: <int>違規點數
  
  return:
    if 成功 -> return 200
    if 失敗 -> return 400
*/

//async 
export function setUserBanState(account, state) {
  // 可修改區 start
  // try {
  //   const response = await fetch('/api/app/setUserBanState', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ account, state }),
  //   });

  //   if (!response.ok) {
  //     throw new Error('请求失败');
  //   }

  //   return response.status;
  // } catch (error) {
  //   console.error('设置用户封禁状态失败', error);
  //   throw error;
  // }
  account
  state
  return 200;
  // 可修改區 end
}
