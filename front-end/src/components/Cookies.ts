import Cookie from "js-cookie"

export const setCookie = (name : string, value : any) : void => {

    if (typeof value === "object") {
        value = JSON.stringify(value)
    }

    Cookie.set(name, value, {
        expires: 300,
        secure: true,
        sameSite: "strict",
        path: "/"
    })
}

export const getCookie = (name : string) : string | undefined => {
    return Cookie.get(name)
}

export const getCookieObject = (name : string) : any => {

    let value : string | undefined = Cookie.get(name)

    if (value) {
        return JSON.parse(value)
    }
    return null
}

export const removeCookie = (name : string) : void => {
    Cookie.remove(name);
}
