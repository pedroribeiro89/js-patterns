// ProductId: between 2 to 20 chars
// Name: only words
// Price: between 0 and 1000
// Category: eletronic or organic

function productValidator(product) {
    const errors = []
    if (!(product.id.length >= 2 && product.id.length <= 20)) {
        errors.push(`id invalid length: current [${product.id}] expected to be between 2 and 20`)
    }

    if (/(\W|\d)/.test(product.name)) {
        errors.push(`name invalid value: current [${product.name}] expected to be only words`)
    }

    if (product.price < 1 || product.price > 1000) {
        errors.push(`price invalid value: current [${product.price}] expected to be between 1 and 1000`)
    }

    if (product.category !== 'electronic' && product.category !== 'organic') {
        errors.push(`category invalid value: current [${product.category}] expected to be electronic or organic`)
    }

    return {
        result: errors.length === 0,
        errors
    }
}

module.exports = {
    productValidator
}