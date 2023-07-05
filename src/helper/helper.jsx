export const isValidEmail = (email) => {
    const emailRegex = /.+\@.+\..+/;
    return emailRegex.test(email);
};

export const isObjectEmpty = (object) => {
    if (typeof object !== "object") return true;
    if (object === null) return true;
    return Object.keys(object).length === 0;
};

export const isValidName = (name) => {
    const nameArray = name.split(" ");
    const firstName = nameArray?.[0] ?? "";
    const lastName = nameArray?.[1] ?? "";
    if (firstName != "" && lastName != "") {
        return true;
    }
    return false;
};
