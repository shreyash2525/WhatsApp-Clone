export const getTime = () => {
    return new Date()
        .toLocaleString("en-Us", {
            hour: "numeric",
            minute: "numeric",
            hour12: true
        }).toLowerCase()
}