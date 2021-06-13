import { href } from '../../../components/attributes.js'
import { div, h1, p, span, a } from '../../../components/elements.js'
import { onclick } from '../../../components/events.js'


class template_1 {
    static render() {
        return div("This is template 1")
    }
}

class template_2 {
    static render() {
        return h1("This is template 2")
    }
}

class template_3 {

    static render() {
        return div(
            a("My link"),
            h1("JS FM", onclick(() => { console.log("cicked the h1") })),
            p("This is the js fm", onclick(() => { alert(1 + 2) })),
            p("This library makes all your elements"),
            div("another div",
                p("This is the start"),
                h1("internal elements")
            ),
            span("span element"),
            p("para element")
        )
    }
}

class template_4 {
    static render() {
        return a(href(() => { }), "test")
    }
}

function run() {
    // let tmp_1 = template_1.render()
    // let tmp_2 = template_2.render()
    // let tmp_3 = template_3.render()
    let tmp_4 = template_4.render()
    console.log(tmp_4)
    // document.body.appendChild(tmp_1)
    // document.body.appendChild(tmp_2)
    // document.body.appendChild(tmp_3)
    //document.body.appendChild(tmp_4)
}