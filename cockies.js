const getcockies = name => {
    const cookieString = document.cookie;
    const coockieparts = cookieString.split(';');
    const cookie = coockieparts.find(c => c.includes(name));
    if (cookie) {
        const coockieValue = cookie.slice('=')[1];
        return coockieValue;
    }

}