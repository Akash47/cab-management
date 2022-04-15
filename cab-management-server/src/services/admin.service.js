

module.exports.matchPassword = async() => {
    try {
       return true
    } catch (error) {
        return [null, error];
    }
};
