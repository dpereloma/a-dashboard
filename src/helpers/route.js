export const route = (path, ...params) => {
    let count = -1;
    return path.replace(/:[a-zA-Z?]+/g, function (match) {
        count += 1;
        return params[count] !== undefined ? params[count] : match;
    });
};
