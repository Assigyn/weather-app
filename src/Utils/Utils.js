function convert(kelvin, type) {
    let celsius = Math.round(kelvin - 273.15);

    if ('celsius' === type) {
        return celsius;
    }

    if ('fahrenheit' === type) {
        return celsius * 9/5 + 32;
    }

    return null;
}

function getCurrentTime(date = null) {
    if (null === date) {
        date = new Date();
    }

    const options = { hour: "2-digit", minute: "2-digit", hour12: true };
    return date.toLocaleTimeString("en-US", options);

}

function regroupData(data) {
    let reduced = data.reduce((acc, item) => {
        const date = new Date(item.dt * 1000);
        const key = date.toISOString().split("T")[0]; // ex: "2025-01-03"

        acc[key] = item;

        return acc;
    }, {});

    return Object.values(reduced);
}


export default { convert, getCurrentTime, regroupData };