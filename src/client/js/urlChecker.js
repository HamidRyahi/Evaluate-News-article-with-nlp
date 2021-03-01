// Regular expression from: https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
function validateUrl(url) {
    const regexp = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;;
    if (regexp.test(url)) {
        return true;
    } else {
        alert("Please submit a valid link!");
        return false;
    }
}


export { validateUrl }