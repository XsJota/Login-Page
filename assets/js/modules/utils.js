export function login({email,password}) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (password === "jota1234" && !!email) {
                resolve()
            }else{
                reject({message: "e-mail or password wrong"})
            }
        }, 2000)
    });
}

export function useState(initialValue) {
    let state = initialValue;
    function setState(newValue) {
        state = newValue;    
    }
    return [state,setState];
}