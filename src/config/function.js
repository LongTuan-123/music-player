export const isLogin = () => {
    return true
}

export const bindParam = (str, params) => {
    const { id } = params
    const url = str?.replace(":id", id)

    return url
}