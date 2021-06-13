import { v4 as uuidv4 } from 'uuid';

function processElement(element, variables, parentIdx, isComponent) {

    try {

        const idx = "idx-" + uuidv4()     // id of the element
        if (!element) return undefined

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
            ele.attributes.push({ 'data-ref': 'parent-' + idx })
        }

        console.log('----------------- end processing element ------------------')
        console.log('return element:', ele)
        return ele

    } catch (e) {

    }
    return undefined

}

function renderElements(parent, element) {
    console.log('----------------- start rendering element ----------------')
    console.log('parameters:', parent, element)

    if (!parent || !element) return

    try {

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

    } catch (e) {

    }
    return

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

// function ref(value) {
//     console.log('ref called', value)
//     appVariableReferences.push({ id: uuidv4(), val: value })
//     const variableRef = [
//         value,
//         function (value) {
//             console.log(appVariables)
//         }
//     ]
//     return variableRef
// }


function renderContent(app, root) {
    try {
        const appInstance = app && typeof app === 'function' ? app() : undefined
        if (appInstance) {
            const elements = processElement(appInstance, [], undefined, true)
            renderElements(root, elements)
        }
    } catch (e) {
        console.log(e)
    }
}

exports.renderContent = renderContent


// base function to process elements
function elementInfo(tag, values) {
    return {
        "type": "element",
        "tag": tag,
        "values": values
    }
}

// <a>	Defines a hyperlink.
exports.a = function a(...values) {
    return elementInfo("a", values)
}

// <abbr>	Defines an abbreviated form of a longer word or phrase.
exports.abbr = function abbr(...values) {
    return elementInfo("abbr", values)
}

// <acronym>	Obsolete Defines an acronym. Use <abbr> instead.
exports.acronym = function acronym(...values) {
    return elementInfo("acronym", values)
}

// <address>	Specifies the author's contact information.
exports.address = function address(...values) {
    return elementInfo("address", values)
}

// <applet>	Obsolete Embeds a Java applet (mini Java applications) on the page. Use <object> instead.
exports.applet = function applet(...values) {
    return elementInfo("applet", values)
}

// <area>	Defines a specific area within an image map.
exports.area = function area(...values) {
    return elementInfo("area", values)
}

// <article> 	Defines an article.
exports.article = function article(...values) {
    return elementInfo("article", values)
}

// <aside> 	Defines some content loosely related to the page content.
exports.aside = function aside(...values) {
    return elementInfo("aside", values)
}

// <audio> 	Embeds a sound, or an audio stream in an HTML document.
exports.audio = function audio(...values) {
    return elementInfo("audio", values)
}

// <b>	Displays text in a bold style.
exports.b = function b(...values) {
    return elementInfo("b", values)
}

// <base>	Defines the base URL for all relative URLs in a document.
exports.base = function base(...values) {
    return elementInfo("base", values)
}

// <basefont>	Obsolete Specifies the base font for a page. Use CSS instead.
exports.basefont = function basefont(...values) {
    return elementInfo("basefont", values)
}

// <bdi> 	Represents text that is isolated from its surrounding for the purposes of bidirectional text formatting.
exports.bdi = function bdi(...values) {
    return elementInfo("bdi", values)
}

// <bdo>	Overrides the current text direction.
exports.bdo = function bdo(...values) {
    return elementInfo("bdo", values)
}

// <big>	Obsolete Displays text in a large size. Use CSS instead.
exports.big = function big(...values) {
    return elementInfo("big", values)
}

// <blockquote>	Represents a section that is quoted from another source.
exports.blockquote = function blockquote(...values) {
    return elementInfo("blockquote", values)
}

// <body>	Defines the document's body.
exports.body = function body(...values) {
    return elementInfo("body", values)
}

// <br>	Produces a single line break.
exports.br = function br(...values) {
    return elementInfo("br", values)
}

// <button>	Creates a clickable button.
exports.button = function button(...values) {
    return elementInfo("button", values)
}

// <canvas> 	Defines a region in the document, which can be used to draw graphics on the fly via scripting (usually JavaScript).
exports.canvas = function canvas(...values) {
    return elementInfo("canvas", values)
}

// <caption>	Defines the caption or title of the table.
exports.caption = function caption(...values) {
    return elementInfo("caption", values)
}

// <center>	Obsolete Align contents in the center. Use CSS instead.
exports.center = function center(...values) {
    return elementInfo("center", values)
}

// <cite>	Indicates a citation or reference to another source.
exports.cite = function cite(...values) {
    return elementInfo("cite", values)
}

// <code>	Specifies text as computer code.
exports.code = function code(...values) {
    return elementInfo("code", values)
}

// <col>	Defines attribute values for one or more columns in a table.
exports.col = function col(...values) {
    return elementInfo("col", values)
}

// </col><colgroup>	Specifies attributes for multiple columns in a table.
exports.colgroup = function colgroup(...values) {
    return elementInfo("colgroup", values)
}

// <data> 	Links a piece of content with a machine-readable translation.
exports.data = function data(...values) {
    return elementInfo("data", values)
}

// <datalist> 	Represents a set of pre-defined options for an <input> element.
exports.datalist = function datalist(...values) {
    return elementInfo("datalist", values)
}

// <dd>	Specifies a description, or value for the term (<dt>) in a description list (<dl>).
exports.dd = function dd(...values) {
    return elementInfo("dd", values)
}

// <del>	Represents text that has been deleted from the document.
exports.del = function del(...values) {
    return elementInfo("del", values)
}

// <details> 	Represents a widget from which the user can obtain additional information or controls on-demand.
exports.details = function details(...values) {
    return elementInfo("details", values)
}

// <dfn>	Specifies a definition.
exports.dfn = function dfn(...values) {
    return elementInfo("dfn", values)
}

// <dialog> 	Defines a dialog box or subwindow.
exports.dialog = function dialog(...values) {
    return elementInfo("dialog", values)
}

// <dir>	Obsolete Defines a directory list. Use <ul> instead.
exports.dir = function dir(...values) {
    return elementInfo("dir", values)
}

// <div>	Specifies a division or a section in a document.
exports.div = function div(...values) {
    return elementInfo("div", values)
}

// <dl>	Defines a description list.
exports.dl = function dl(...values) {
    return elementInfo("dl", values)
}

// <dt>	Defines a term (an item) in a description list.
exports.dt = function dt(...values) {
    return elementInfo("dt", values)
}

// <em>	Defines emphasized text.
exports.em = function em(...values) {
    return elementInfo("em", values)
}

// <embed> 	Embeds external application, typically multimedia content like audio or video into an HTML document.
exports.embed = function embed(...values) {
    return elementInfo("embed", values)
}

// <fieldset>	Specifies a set of related form fields.
exports.fieldset = function fieldset(...values) {
    return elementInfo("fieldset", values)
}

// <figcaption> 	Defines a caption or legend for a figure.
exports.figcaption = function figcaption(...values) {
    return elementInfo("figcaption", values)
}

// <figure> 	Represents a figure illustrated as part of the document.
exports.figure = function figure(...values) {
    return elementInfo("figure", values)
}

// <font>	Obsolete Defines font, color, and size for text. Use CSS instead.
exports.font = function font(...values) {
    return elementInfo("font", values)
}

// <footer> 	Represents the footer of a document or a section.
exports.footer = function footer(...values) {
    return elementInfo("footer", values)
}

// <form>	Defines an HTML form for user input.
exports.form = function form(...values) {
    return elementInfo("form", values)
}

// <frame>	Obsolete Defines a single frame within a frameset.
exports.frame = function frame(...values) {
    return elementInfo("frame", values)
}

// <frameset>	Obsolete Defines a collection of frames or other frameset.
exports.frameset = function frameset(...values) {
    return elementInfo("frameset", values)
}

// <head>	Defines the head portion of the document that contains information about the document such as title.
exports.head = function head(...values) {
    return elementInfo("head", values)
}

// <header> 	Represents the header of a document or a section.
exports.header = function header(...values) {
    return elementInfo("header", values)
}

// <hgroup> 	Defines a group of headings.
exports.hgroup = function hgroup(...values) {
    return elementInfo("hgroup", values)
}

// <h1> to <h6>	Defines HTML headings.
exports.h1 = function h1(...values) {
    return elementInfo("h1", values)
}

exports.h2 = function h2(...values) {
    return elementInfo("h2", values)
}

exports.h3 = function h3(...values) {
    return elementInfo("h3", values)
}

exports.h4 = function h4(...values) {
    return elementInfo("h4", values)
}

exports.h5 = function h5(...values) {
    return elementInfo("h5", values)
}

exports.h6 = function h6(...values) {
    return elementInfo("h6", values)
}

// <hr>	Produce a horizontal line.
exports.hr = function hr(...values) {
    return elementInfo("hr", values)
}

// <html>	Defines the root of an HTML document.
exports.html = function html(...values) {
    return elementInfo("html", values)
}

// <i>	Displays text in an italic style.
exports.i = function i(...values) {
    return elementInfo("i", values)
}

// <iframe>	Displays a URL in an inline frame.
exports.iframe = function iframe(...values) {
    return elementInfo("iframe", values)
}

// <img>	Represents an image.
exports.img = function img(...values) {
    return elementInfo("img", values)
}

// <input>	Defines an input control.
exports.input = function input(...values) {
    return elementInfo("input", values)
}

// <ins>	Defines a block of text that has been inserted into a document.
exports.ins = function ins(...values) {
    return elementInfo("ins", values)
}

// <kbd>	Specifies text as keyboard input.
exports.kbd = function kbd(...values) {
    return elementInfo("kbd", values)
}

// <keygen> 	Represents a control for generating a public-private key pair.
exports.keygen = function keygen(...values) {
    return elementInfo("keygen", values)
}

// <label>	Defines a label for an <input> control.
exports.label = function label(...values) {
    return elementInfo("label", values)
}

// <legend>	Defines a caption for a <fieldset> element.
exports.legend = function legend(...values) {
    return elementInfo("legend", values)
}

// <li>	Defines a list item.
exports.li = function li(...values) {
    return elementInfo("li", values)
}

// <link>	Defines the relationship between the current document and an external resource.
exports.link = function link(...values) {
    return elementInfo("link", values)
}

// <main> 	Represents the main or dominant content of the document.
exports.main = function main(...values) {
    return elementInfo("main", values)
}

// <map>	Defines a client-side image-map.
exports.map = function map(...values) {
    return elementInfo("map", values)
}

// <mark> 	Represents text highlighted for reference purposes.
exports.mark = function mark(...values) {
    return elementInfo("mark", values)
}

// <menu>	Represents a list of commands.
exports.menu = function menu(...values) {
    return elementInfo("menu", values)
}

// <menuitem> 	Defines a list (or menuitem) of commands that a user can perform.
exports.menuitem = function menuitem(...values) {
    return elementInfo("menuitem", values)
}

// <meta>	Provides structured metadata about the document content.
exports.meta = function meta(...values) {
    return elementInfo("meta", values)
}

// <meter> 	Represents a scalar measurement within a known range.
exports.meter = function meter(...values) {
    return elementInfo("meter", values)
}

// <nav> 	Defines a section of navigation links.
exports.nav = function nav(...values) {
    return elementInfo("nav", values)
}

// <noframes>	Obsolete Defines an alternate content that displays in browsers that do not support frames.
exports.noframes = function noframes(...values) {
    return elementInfo("noframes", values)
}

// <noscript>	Defines alternative content to display when the browser doesn't support scripting.
exports.noscript = function noscript(...values) {
    return elementInfo("noscript", values)
}

// <object>	Defines an embedded object.
exports.object = function object(...values) {
    return elementInfo("object", values)
}

// <ol>	Defines an ordered list.
exports.ol = function ol(...values) {
    return elementInfo("ol", values)
}

// <optgroup>	Defines a group of related options in a selection list.
exports.optgroup = function optgroup(...values) {
    return elementInfo("optgroup", values)
}

// <option>	Defines an option in a selection list.
exports.option = function option(...values) {
    return elementInfo("option", values)
}

// <output> 	Represents the result of a calculation.
exports.output = function output(...values) {
    return elementInfo("output", values)
}

// <p>	Defines a paragraph.
exports.p = function p(...values) {
    return elementInfo("p", values)
}

// <param>	Defines a parameter for an object or applet element.
exports.param = function param(...values) {
    return elementInfo("param", values)
}

// <picture> 	Defines a container for multiple image sources.
exports.picture = function picture(...values) {
    return elementInfo("picture", values)
}

// <pre>	Defines a block of preformatted text.
exports.pre = function pre(...values) {
    return elementInfo("pre", values)
}

// <progress> 	Represents the completion progress of a task.
exports.progress = function progress(...values) {
    return elementInfo("progress", values)
}

// <q>	Defines a short inline quotation.
exports.q = function q(...values) {
    return elementInfo("q", values)
}

// <rp> 	Provides fall-back parenthesis for browsers that that don't support ruby annotations.
exports.rp = function rp(...values) {
    return elementInfo("rp", values)
}

// <rt> 	Defines the pronunciation of character presented in a ruby annotations.
exports.rt = function rt(...values) {
    return elementInfo("rt", values)
}

// <ruby> 	Represents a ruby annotation.
exports.ruby = function ruby(...values) {
    return elementInfo("ruby", values)
}

// <s>	Represents contents that are no longer accurate or no longer relevant.
exports.s = function s(...values) {
    return elementInfo("s", values)
}

// <samp>	Specifies text as sample output from a computer program.
exports.samp = function samp(...values) {
    return elementInfo("samp", values)
}

// <script>	Places script in the document for client-side processing.
exports.script = function script(...values) {
    return elementInfo("script", values)
}

// <section> 	Defines a section of a document, such as header, footer etc.
exports.section = function section(...values) {
    return elementInfo("section", values)
}

// <select>	Defines a selection list within a form.
exports.select = function select(...values) {
    return elementInfo("select", values)
}

// <small>	Displays text in a smaller size.
exports.small = function small(...values) {
    return elementInfo("small", values)
}

// <source> 	Defines alternative media resources for the media elements like <audio> or <video>.
exports.source = function source(...values) {
    return elementInfo("source", values)
}

// <span>	Defines an inline styleless section in a document.
exports.span = function span(...values) {
    return elementInfo("span", values)
}

// <strike>	Obsolete Displays text in strikethrough style.
exports.strike = function strike(...values) {
    return elementInfo("strike", values)
}

// <strong>	Indicate strongly emphasized text.
exports.strong = function strong(...values) {
    return elementInfo("strong", values)
}

// <style>	Inserts style information (commonly CSS) into the head of a document.
exports.style = function style(...values) {
    return elementInfo("style", values)
}

// <sub>	Defines subscripted text.
exports.sub = function sub(...values) {
    return elementInfo("sub", values)
}

// <summary> 	Defines a summary for the <details> element.
exports.summary = function summary(...values) {
    return elementInfo("summary", values)
}

// <sup>	Defines superscripted text.
exports.sup = function sup(...values) {
    return elementInfo("sup", values)
}

// <svg> 	Embed SVG (Scalable Vector Graphics) content in an HTML document.
exports.svg = function svg(...values) {
    return elementInfo("svg", values)
}

// <table>	Defines a data table.
exports.table = function table(...values) {
    return elementInfo("table", values)
}

// <tbody>	Groups a set of rows defining the main body of the table data.
exports.tbody = function tbody(...values) {
    return elementInfo("tbody", values)
}

// <td>	Defines a cell in a table.
exports.td = function td(...values) {
    return elementInfo("td", values)
}

// <template> 	Defines the fragments of HTML that should be hidden when the page is loaded, but can be cloned and inserted in the document by JavaScript.
exports.template = function template(...values) {
    return elementInfo("template", values)
}

// <textarea>	Defines a multi-line text input control (text area).
exports.textarea = function textarea(...values) {
    return elementInfo("textarea", values)
}

// <tfoot>	Groups a set of rows summarizing the columns of the table.
exports.tfoot = function tfoot(...values) {
    return elementInfo("tfoot", values)
}

// <th>	Defines a header cell in a table.
exports.th = function th(...values) {
    return elementInfo("th", values)
}

// <thead>	Groups a set of rows that describes the column labels of a table.
exports.thead = function thead(...values) {
    return elementInfo("thead", values)
}

// <time> 	Represents a time and/or date.
exports.time = function time(...values) {
    return elementInfo("time", values)
}

// <title>	Defines a title for the document.
exports.title = function title(...values) {
    return elementInfo("title", values)
}

// <tr>	Defines a row of cells in a table.
exports.tr = function tr(...values) {
    return elementInfo("tr", values)
}

// <track> 	Defines text tracks for the media elements like <audio> or <video>.
exports.track = function track(...values) {
    return elementInfo("track", values)
}

// <tt>	Obsolete Displays text in a teletype style.
exports.tt = function tt(...values) {
    return elementInfo("tt", values)
}
// <u>	Displays text with an underline.
exports.u = function u(...values) {
    return elementInfo("u", values)
}

// <ul>	Defines an unordered list.
exports.ul = function ul(...values) {
    return elementInfo("ul", values)
}

// <var>	Defines a variable.
// exports. =  function var(...values) {
//     return elementInfo("var", values)
// }

// <video> 	Embeds video content in an HTML document.
exports.video = function video(...values) {
    return elementInfo("video", values)
}

// <wbr> 	Represents a line break opportunity.
exports.wbr = function wbr(...values) {
    return elementInfo("wbr", values)
}





// all event base functions

// onafterprint	script	Fires after the associated document is printed.
exports.onafterprint = function onafterprint(callback) {
    return {
        "type": "event",
        "event": "onafterprint",
        "func": callback
    }
}

// onbeforeprint	script	Fires before the associated document is printed.
exports.onbeforeprint = function onbeforeprint(callback) {
    return {
        "type": "event",
        "event": "onbeforeprint",
        "func": callback
    }
}

// onbeforeunload	script	Fires before a document being unloaded.
exports.onbeforeunload = function onbeforeunload(callback) {
    return {
        "type": "event",
        "event": "onbeforeunload",
        "func": callback
    }
}

// onerror	script	Fires when document errors occur.
exports.onerror = function onerror(callback) {
    return {
        "type": "event",
        "event": "onerror",
        "func": callback
    }
}

// onhashchange	script	Fires when the fragment identifier part of the document's URL i.e. the portion of a URL that follows the sign (#) changes.
exports.onhashchange = function onhashchange(callback) {
    return {
        "type": "event",
        "event": "onhashchange",
        "func": callback
    }
}

// onload	script	Fires when the document has finished loading.
exports.onload = function onload(callback) {
    return {
        "type": "event",
        "event": "onload",
        "func": callback
    }
}

// onmessage	script	Fires when the message event occurs i.e. when user sends a cross-document message or a message is sent from a worker with postMessage() method. See HTML5 Web Workers.
exports.onmessage = function onmessage(callback) {
    return {
        "type": "event",
        "event": "onmessage",
        "func": callback
    }
}

// onoffline	script	Fires when the network connection fails and the browser starts working offline.
exports.onoffline = function onoffline(callback) {
    return {
        "type": "event",
        "event": "onoffline",
        "func": callback
    }
}

// ononline	script	Fires when the network connections returns and the browser starts working online.
exports.ononline = function ononline(callback) {
    return {
        "type": "event",
        "event": "ononline",
        "func": callback
    }
}

// onpagehide	script	Fires when the page is hidden, such as when a user is moving to another webpage.
exports.onpagehide = function onpagehide(callback) {
    return {
        "type": "event",
        "event": "onpagehide",
        "func": callback
    }
}

// onpageshow	script	Fires when the page is shown, such as when a user navigates to a webpage.
exports.onpageshow = function onpageshow(callback) {
    return {
        "type": "event",
        "event": "onpageshow",
        "func": callback
    }
}

// onpopstate	script	Fires when changes are made to the active history.
exports.onpopstate = function onpopstate(callback) {
    return {
        "type": "event",
        "event": "onpopstate",
        "func": callback
    }
}

// onresize	script	Fires when the browser window is resized.
exports.onresize = function onresize(callback) {
    return {
        "type": "event",
        "event": "onresize",
        "func": callback
    }
}

// onstorage	script	Fires when a Web Storage area is updated.
exports.onstorage = function onstorage(callback) {
    return {
        "type": "event",
        "event": "onstorage",
        "func": callback
    }
}

// onunload	script	Fires immediately before the document is unloaded or the browser window is closed.
exports.onunload = function onunload(callback) {
    return {
        "type": "event",
        "event": "onunload",
        "func": callback
    }
}



// onblur	script	Fires when an element loses focus.
exports.onblur = function onblur(callback) {
    return {
        "type": "event",
        "event": "onblur",
        "func": callback
    }
}

// onchange	script	Fires when the value or state of the element is changed.
exports.onchange = function onchange(callback) {
    return {
        "type": "event",
        "event": "change",
        "func": callback
    }
}

// onfocus	script	Fires when the element receives focus.
exports.onfocus = function onfocus(callback) {
    return {
        "type": "event",
        "event": "onfocus",
        "func": callback
    }
}

// oninput	script	Fires when the value of an element is changed by the user.
exports.oninput = function oninput(callback) {
    return {
        "type": "event",
        "event": "oninput",
        "func": callback
    }
}

// oninvalid	script	Fires when a submittable element do not satisfy their constraints during form validation.
exports.oninvalid = function oninvalid(callback) {
    return {
        "type": "event",
        "event": "oninvalid",
        "func": callback
    }
}

// onreset	script	Fires when the user resets a form.
exports.onreset = function onreset(callback) {
    return {
        "type": "event",
        "event": "onreset",
        "func": callback
    }
}

// onselect	script	Fires when some text is being selected or the current selection is changed by the user.
exports.onselect = function onselect(callback) {
    return {
        "type": "event",
        "event": "onselect",
        "func": callback
    }
}

// onsearch	script	Fires when the user writes something in a search input field.
exports.onsearch = function onsearch(callback) {
    return {
        "type": "event",
        "event": "onsearch",
        "func": callback
    }
}

// onsubmit	script	Fires when a form is submitted.
exports.onsubmit = function onsubmit(callback) {
    return {
        "type": "event",
        "event": "submit",
        "func": callback
    }
}




// onclick	script	Fires when the user clicks the left mouse button on the element.
exports.onclick = function onclick(callback) {
    return {
        "type": "event",
        "event": "click",
        "func": callback
    }
}

// ondblclick	script	Fires when the user double-clicks on the element.
exports.ondblclick = function ondblclick(callback) {
    return {
        "type": "event",
        "event": "ondblclick",
        "func": callback
    }
}

// oncontextmenu	script	Fires when a context menu is triggered by the user through right-click on the element.
exports.oncontextmenu = function oncontextmenu(callback) {
    return {
        "type": "event",
        "event": "oncontextmenu",
        "func": callback
    }
}

// ondrag	script	Fires when the user drags an element. The ondrag event fires throughout the drag operation.
exports.ondrag = function ondrag(callback) {
    return {
        "type": "event",
        "event": "ondrag",
        "func": callback
    }
}

// ondragend	script	Fires when the user releases the mouse button at the end of a drag operation.
exports.ondragend = function ondragend(callback) {
    return {
        "type": "event",
        "event": "ondragend",
        "func": callback
    }
}

// ondragenter	script	Fires when the user drags an element to a valid drop target.
exports.ondragenter = function ondragenter(callback) {
    return {
        "type": "event",
        "event": "ondragenter",
        "func": callback
    }
}

// ondragleave	script	Fires when an element leaves a valid drop target during a drag operation.
exports.ondragleave = function ondragleave(callback) {
    return {
        "type": "event",
        "event": "ondragleave",
        "func": callback
    }
}

// ondragover	script	Fires when an element is being dragged over a valid drop target.
exports.ondragover = function ondragover(callback) {
    return {
        "type": "event",
        "event": "ondragover",
        "func": callback
    }
}

// ondragstart	script	Fires when the user starts to drag a text selection or selected element.
exports.ondragstart = function ondragstart(callback) {
    return {
        "type": "event",
        "event": "ondragstart",
        "func": callback
    }
}

// ondrop	script	Fires when the mouse button is released during a drag-and-drop operation i.e. when dragged element is being dropped.
exports.ondrop = function ondrop(callback) {
    return {
        "type": "event",
        "event": "ondrop",
        "func": callback
    }
}

// onmousedown	script	Fires when the mouse button is pressed over an element.
exports.onmousedown = function onmousedown(callback) {
    return {
        "type": "event",
        "event": "onmousedown",
        "func": callback
    }
}

// onmousemove	script	Fires when the user moves the mouse pointer over an element.
exports.onmousemove = function onmousemove(callback) {
    return {
        "type": "event",
        "event": "onmousemove",
        "func": callback
    }
}

// onmouseout	script	Fires when the user moves the mouse pointer outside the boundaries of an element.
exports.onmouseout = function onmouseout(callback) {
    return {
        "type": "event",
        "event": "onmouseout",
        "func": callback
    }
}

// onmouseover	script	Fires when the user moves the mouse pointer onto an element.
exports.onmouseover = function onmouseover(callback) {
    return {
        "type": "event",
        "event": "onmouseover",
        "func": callback
    }
}

// onmouseup	script	Fires when the user releases the mouse button while the mouse is over an element.
exports.onmouseup = function onmouseup(callback) {
    return {
        "type": "event",
        "event": "onmouseup",
        "func": callback
    }
}

// onmousewheel	script	Deprecated Use the onwheel attribute instead.
exports.onmousewheel = function onmousewheel(callback) {
    return {
        "type": "event",
        "event": "onmousewheel",
        "func": callback
    }
}

// onscroll	script	Fires when the user scrolls the contents of an element by scrolling the element's scrollbar.
exports.onscroll = function onscroll(callback) {
    return {
        "type": "event",
        "event": "onscroll",
        "func": callback
    }
}

// onshow	script	Fires when a contextmenu event was fired onto an element that has a contextmenu attribute.
exports.onshow = function onshow(callback) {
    return {
        "type": "event",
        "event": "onshow",
        "func": callback
    }
}

// ontoggle	script	Fires when the user opens or closes the <details> element.
exports.ontoggle = function ontoggle(callback) {
    return {
        "type": "event",
        "event": "ontoggle",
        "func": callback
    }
}

// onwheel	script	Fires when the user scrolls the contents of an element by rolling the mouse wheel up or down over an element.
exports.onwheel = function onwheel(callback) {
    return {
        "type": "event",
        "event": "onwheel",
        "func": callback
    }
}






// onkeydown	script	Fires when the user presses a key.
exports.onkeydown = function onkeydown(callback) {
    return {
        "type": "event",
        "event": "keydown",
        "func": callback
    }
}

// onkeypress	script	Fires when the user presses an alphanumeric key.
exports.onkeypress = function onkeypress(callback) {
    return {
        "type": "event",
        "event": "keypress",
        "func": callback
    }
}

// onkeyup	script	Fires when the user releases a key.
exports.onkeyup = function onkeyup(callback) {
    return {
        "type": "event",
        "event": "keyup",
        "func": callback
    }
}









// oncopy	script	Fires when the user copies the element or selection, adding it to the system clipboard.
exports.oncopy = function oncopy(callback) {
    return {
        "type": "event",
        "event": "oncopy",
        "func": callback
    }
}

// oncut	script	Fires when the element or selection is removed from the document and added to the system clipboard.
exports.oncut = function oncut(callback) {
    return {
        "type": "event",
        "event": "oncut",
        "func": callback
    }
}

// onpaste	script	Fires when the user pastes data, transferring the data from the system clipboard to the document.
exports.onpaste = function onpaste(callback) {
    return {
        "type": "event",
        "event": "onpaste",
        "func": callback
    }
}










// onabort	script	Fires when playback is aborted, but not due to an error.
exports.onabort = function onabort(callback) {
    return {
        "type": "event",
        "event": "onabort",
        "func": callback
    }
}

// oncanplay	script	Fires when enough data is available to play the media, at least for a couple of frames, but would require further buffering.
exports.oncanplay = function oncanplay(callback) {
    return {
        "type": "event",
        "event": "oncanplay",
        "func": callback
    }
}

// oncanplaythrough	script	Fires when entire media can be played to the end without requiring to stop for further buffering.
exports.oncanplaythrough = function oncanplaythrough(callback) {
    return {
        "type": "event",
        "event": "oncanplaythrough",
        "func": callback
    }
}

// oncuechange	script	Fires when the text track cue in a <track> element changes.
exports.oncuechange = function oncuechange(callback) {
    return {
        "type": "event",
        "event": "oncuechange",
        "func": callback
    }
}

// ondurationchange	script	Fires when the duration of the media changes.
exports.ondurationchange = function ondurationchange(callback) {
    return {
        "type": "event",
        "event": "ondurationchange",
        "func": callback
    }
}

// onemptied	script	Fires when the media element is reset to its initial state, either because of a fatal error during load, or because the load() method is called to reload it.
exports.onemptied = function onemptied(callback) {
    return {
        "type": "event",
        "event": "onemptied",
        "func": callback
    }
}

// onended	script	Fires when the end of playback is reached.
exports.onended = function onended(callback) {
    return {
        "type": "event",
        "event": "onended",
        "func": callback
    }
}

// onerror	script	Fires when an error occurs while fetching the media data.
// exports. = function onerror(callback) {
//     return {
//         "type": "event",
//         "event": "onerror",
//         "func": callback
//     }
// }

// onloadeddata	script	Fires when media data is loaded at the current playback position.
exports.onloadeddata = function onloadeddata(callback) {
    return {
        "type": "event",
        "event": "onloadeddata",
        "func": callback
    }
}

// onloadedmetadata	script	Fires when metadata of the media (like duration and dimensions) has finished loading.
exports.onloadedmetadata = function onloadedmetadata(callback) {
    return {
        "type": "event",
        "event": "onloadedmetadata",
        "func": callback
    }
}

// onloadstart	script	Fires when loading of the media begins.
exports.onloadstart = function onloadstart(callback) {
    return {
        "type": "event",
        "event": "onloadstart",
        "func": callback
    }
}

// onpause	script	Fires when playback is paused, either by the user or programmatically.
exports.onpause = function onpause(callback) {
    return {
        "type": "event",
        "event": "onpause",
        "func": callback
    }
}

// onplay	script	Fires when playback of the media starts after having been paused i.e. when the play() method is requested.
exports.onplay = function onplay(callback) {
    return {
        "type": "event",
        "event": "onplay",
        "func": callback
    }
}

// onplaying	script	Fires when the audio or video has started playing.
exports.onplaying = function onplaying(callback) {
    return {
        "type": "event",
        "event": "onplaying",
        "func": callback
    }
}

// onprogress	script	Fires periodically to indicate the progress while downloading the media data.
exports.onprogress = function onprogress(callback) {
    return {
        "type": "event",
        "event": "onprogress",
        "func": callback
    }
}

// onratechange	script	Fires when the playback rate or speed is increased or decreased, like slow motion or fast forward mode.
exports.onratechange = function onratechange(callback) {
    return {
        "type": "event",
        "event": "onratechange",
        "func": callback
    }
}

// onseeked	script	Fires when the seek operation ends.
exports.onseeked = function onseeked(callback) {
    return {
        "type": "event",
        "event": "onseeked",
        "func": callback
    }
}

// onseeking	script	Fires when the current playback position is moved.
exports.onseeking = function onseeking(callback) {
    return {
        "type": "event",
        "event": "onseeking",
        "func": callback
    }
}

// onstalled	script	Fires when the download has stopped unexpectedly.
exports.onstalled = function onstalled(callback) {
    return {
        "type": "event",
        "event": "onstalled",
        "func": callback
    }
}

// onsuspend	script	Fires when the loading of the media is intentionally stopped.
exports.onsuspend = function onsuspend(callback) {
    return {
        "type": "event",
        "event": "onsuspend",
        "func": callback
    }
}

// ontimeupdate	script	Fires when the playback position changed, like when the user fast forwards to a different playback position.
exports.ontimeupdate = function ontimeupdate(callback) {
    return {
        "type": "event",
        "event": "ontimeupdate",
        "func": callback
    }
}

// onvolumechange	script	Fires when the volume is changed, or playback is muted or unmuted.
exports.onvolumechange = function onvolumechange(callback) {
    return {
        "type": "event",
        "event": "onvolumechange",
        "func": callback
    }
}

// onwaiting	script	Fires when playback stops because the next frame of a video resource is not available.
exports.onwaiting = function onwaiting(callback) {
    return {
        "type": "event",
        "event": "onwaiting",
        "func": callback
    }
}




// base function process attributes
exports.attr = function attr(values) {
    return {
        'type': 'attr',
        'values': values
    }
}