import { v4 as uuidv4 } from 'uuid';

function processElement(element, variables, parentIdx, isComponent) {
    const idx = "idx-" + uuidv4()     // id of the element
    // element information
    let ele = {
        tag: element.tag,   // tag ex. div, h1, ...
        innerHTML: [],      // innerHTML content array ex. ['Hello', {a}, ...]
        eventListeners: [], // all event listeners of the element
        children: [],       // all children elements
        variables: variables,   // all variables used if the element is component
        attributes: [],         // all attributes of the elements
        idx: idx,               // id of the element
        parentIdx: parentIdx,   // parent element id
        isComponent: isComponent    // is the element a component
    }
    console.log('----------------- start processing element ------------------')
    console.log('parameters:', element, variables, parentIdx, isComponent)
    for (const val of element.values) {
        console.log('element value:', val)
        // check if the value is for innerHTML
        if (typeof val === "string" || typeof val === "number") {
            ele.innerHTML.push({ type: 'text', content: val })
        }
        // check if the value is an event, element, attribute or a variable
        else if (typeof val === "object") {
            // if the value is an event
            if (val?.type === "event") {
                ele.eventListeners.push({ event: val?.event, func: val?.func })
            }
            // if the value is an element
            else if (val?.type === "element") {
                // start processing child elements
                const child = processElement(val, [], idx)
                ele.children.push(child)
            }
            // if the value is an attribute
            else if (val?.type === "attr") {
                ele.attributes.push(val.values)
            }
            // if the value is a variable
            else {
                const identifier = uuidv4()
                // val is an object and need a reference
                ele.innerHTML.push({ type: 'variable', value: val })
                //ele.variables.push({ [identifier]: { ...val } })
                //appVariables.push({ id: identifier, ...val })
            }
        }
        // check if the value is a component
        else if (typeof val === "function") {
            // start processing child elements
            const child = processElement(val(), [], idx, true)
            ele.children.push(child)
        }
    }

    if (isComponent) {
        ele.attributes.push({'data-ref': 'parent-' + idx})
    }

    console.log('----------------- end processing element ------------------')
    console.log('return element:', ele)
    return ele
}

function renderElements(parent, element) {
    console.log('----------------- start rendering element ----------------')
    console.log('parameters:', parent, element)

    let ele = document.createElement(element.tag)

    // render the innerHTML for the element
    const eleInnerHTML = element.innerHTML
    for (let i = 0; i < eleInnerHTML.length; i++) {
        const innerHTMLObj = eleInnerHTML[i]
        if (innerHTMLObj.type === 'variable') {
            //const varSpan = document.createElement('span')
            //varSpan.setAttribute('data-ref', element.innerHTML[i].id)
            // TODO
            // only a temp solution
            //const val = Object.values(element.innerHTML[i])[1]
            //varSpan.innerHTML = val
            //ele.appendChild(varSpan)
        } else if (innerHTMLObj.type === 'text') {
            ele.innerHTML += innerHTMLObj.content
        }
    }

    // add the attirbutes to the element
    const eleAttributes = element.attributes
    for (let i = 0; i < eleAttributes.length; i++) {
        // read atribute key and the value
        for (let [attr, val] of Object.entries(eleAttributes[i])) {
            ele.setAttribute(attr, val)
        }
    }

    // add the event listeners to the element
    const eleEventListeners = element.eventListeners
    for (let i = 0; i < eleEventListeners.length; i++) {
        ele.addEventListener(eleEventListeners[i].event, eleEventListeners[i].func)
    }

    // append all children elements
    const eleChildren = element.children
    for (let i = 0; i < eleChildren.length; i++) {
        // render the child elements and append
        ele.appendChild(renderElements(ele, eleChildren[i]))
    }

    console.log('----------------- end rendering element ----------------')
    return parent.appendChild(ele)
}

function updateRef(ref) {
    return [
        ref,
        function (value) {
            console.log(value, ref)
            ref = value
        }
    ]
}

// function updateValue(value) {
//     console.log(value, appVariables)
//     const identifier = window.event.target.getAttribute('data-ref')
//     console.log(identifier)
//     const element = document.querySelector("[data-ref='" + identifier + "']")
//     console.log(identifier, element)
//     const val = Object.values(value)[0]
//     element.innerHTML = val
//     // const variableKeys = Object.keys(value)
//     // const variable = appVariables.find(variable => {
//     //     const variableKey = Object.keys(variable).find(key => key != 'id')
//     //     console.log(variable, variableKey, variableKeys, variable.id === identifier)
//     //     console.log(variableKeys.findIndex(key => key == variableKey) > -1)
//     //     variable.id === identifier &&
//     //         variableKeys.findIndex(key => key == variableKey) > -1
//     // })
// }

// function updateValue(valueObj) {
//     console.log('update value', valueObj)
//     const parentElement = window.event.target.parentElement
//     const variableElements = Array.from(parentElement.children)
//         .filter(el => el.tagName === 'SPAN')
//     for (let el of variableElements) {
//         const appVariableIndex = appVariables.findIndex(variable => variable.id === el.getAttribute('data-ref'))
//         if (appVariableIndex > -1) {
//             for (let [appVarkKey, appVarValue] of Object.entries(appVariables[appVariableIndex])) {
//                 if (appVarkKey !== 'id') {
//                     for (let [varKey, varValue] of Object.entries(valueObj)) {
//                         if (appVarkKey === varKey) {
//                             el.innerHTML = varValue
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

function updateValue(valueObj) {
    console.log('update value:', valueObj)
    // check all object identifiers in 
    // {a},{a:10}, {a:10,b:20}
    if (valueObj) {

    }
}



function ref(value) {
    console.log('ref called', value)
    appVariableReferences.push({ id: uuidv4(), val: value })
    const variableRef = [
        value,
        function (value) {
            console.log(appVariables)
        }
    ]
    return variableRef
}

var appVariables = []
var appVariableReferences = []
var activeEvent = undefined

function renderContent(app, root) {
    const elements = processElement(app(), [], undefined, true)
    const content = renderElements(root, elements)
    console.log('refs', appVariableReferences)
    return content
}

function MyLib() {
    let variables = []
    function test(fd) {
        console.log('test')
    }
}

export {
    MyLib,
    renderContent,
    updateValue,
    updateRef,
    ref
}
