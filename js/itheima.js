function defaul(data){
    let arr = []
    for(let k in data){
        let res = k + '=' +data[k]
        arr.push(res)
    }
    return arr.join('&')
}


function itheima(options){
    let xhr = new XMLHttpRequest()
    let qs = defaul(options.data)
    if(options.method.toUpperCase() === 'GET'){
        xhr.open(options.method, options.url + '?'+qs)
        xhr.send()
    }
    if(options.method.toUpperCase() === 'POST'){
        xhr.open(options.method, options.url)
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
        xhr.send(qs)
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let result = JSON.parse(xhr.responseText)
            options.success(result)
        }
    }
}