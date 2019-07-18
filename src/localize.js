const localize = (num) => {
    return parseFloat(num.toFixed(2)).toLocaleString(navigator.language, { minimumFractionDigits: 2 });
}

export default localize;