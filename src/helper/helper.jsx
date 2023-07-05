export const isValidEmail = (email) => {
    const emailRegex = /.+\@.+\..+/;
    return emailRegex.test(email);
};

export const isObjectEmpty = (object) => {
    if (typeof object !== "object") return true;
    if (object === null) return true;
    return Object.keys(object).length === 0;
};
