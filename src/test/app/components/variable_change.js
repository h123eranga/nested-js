//const [a, setA] = updateRef(10)

let a = 20

function icrementNumber() {
    updateValue({ a: 40 })
}

return div(
    p('number:', { a }, attr({
        'alt': 'test alt'
    })),
    button('Add', onclick(icrementNumber))
)

let a = 10

function clickHandler() {
    updateValue({ a: 40 })
}

return div('test - ',
    { a },
    onclick(clickHandler),
    headerComponent()
)

let a = 10

function inc() {
    a = 20
    updateValue({ a })
}

return div(
    'fir',
    { a },
    footerComponent(),
    'sec:',
    { a },
    button('CLick', onclick(inc))
)