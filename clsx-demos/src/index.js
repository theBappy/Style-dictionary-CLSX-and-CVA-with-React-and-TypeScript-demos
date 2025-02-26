import clsx from "clsx";

// Basic usage
const buttonClass = clsx('btn', 'btn-primary')
console.log(buttonClass)

const isPrimary = true
const primaryButtonClass=clsx('btn', isPrimary && 'btn-primary')
console.log(primaryButtonClass)

const isPrimary = true
const classes = clsx(['btn', 'btn-primary', isPrimary && 'active'])
console.log(classes);

const isPrimary = true
const isDisabled = false
const classed = clsx({
    'btn': true,
    'btn-primary': isPrimary,
    'btn-disabled': isDisabled,
})
console.log(classed);

