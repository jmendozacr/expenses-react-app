const convertToCurrency = (quantity) => {
    const formatConfig = {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }

    return new Intl.NumberFormat('en-US', formatConfig).format(quantity); 
}

export default convertToCurrency;