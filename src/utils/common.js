const showDate = (flag = true) => {
    const date = new Date();
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    let currTime = ` ${year}-${month}-${day} ${hour}:${(minute+'').length===1?'0'+minute:minute}:${(second+'').length===1?'0'+second:second}`
    return flag? currTime :  currTime.replace(/-/g, '/')
}

export {
    showDate
}