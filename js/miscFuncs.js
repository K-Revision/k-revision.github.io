function returnDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let ho = String(today.getHours()).padStart(2, '0');
    let mi = String(today.getMinutes()).padStart(2, '0');
    let se = String(today.getSeconds()).padStart(2, '0');
    let gm = today.getTimezoneOffset();

    today = yyyy + '-' + mm + '-' + dd + 'T' + ho + ':' + mi + ':' + se + '+00:00';

    return today;
}