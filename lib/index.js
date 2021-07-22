/**
* create a string composed of random numbers, upper and lowercase letters
*
* @param integer length
* @return string
*/
export default (length = 8) => {
    let id = ''
    if (length < 0) {
        throw new Error('Invalid length passed to shortId')
    }
    while (id.length < length) {
        let offset = 48
        let offsetLength = 10
        const setRandomizer = Math.random()
        if (setRandomizer > 0.33 || !id.length) {
            offsetLength = 26
            offset = (setRandomizer < 0.66) ? 65 : 97
        }
        const randomChar = String.fromCharCode(offset + Math.floor(Math.random() * offsetLength))
        id = `${id}${randomChar}`
    }
    return id
}
