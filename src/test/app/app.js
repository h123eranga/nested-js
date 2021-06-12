import { attr } from "../../components/attributes"
import { button, div, input, form, html, p, span, h1 } from "../../components/elements"
import { onclick, onsubmit, onchange, onfocus, onkeydown, onkeypress, onkeyup } from "../../components/events"
import { ref, updateRef, updateValue } from "../../main"
import footerComponent from "../components/footer"
import headerComponent from "../components/header"

function App() {

    let a = 10

    function inc() {
        a++
        updateValue({ a })
    }

    // return div(
    //     h1('Value:', { a }),
    //     footerComponent(),
    //     button('CLick', onclick(inc))
    // )

    return div(
        'test',
        onclick(inc),
        {a}
    )

}

export default App

function test(){
    let a=20
    return h1({a})
}

/*

<div id="root">
    <div>   <!-- App -->    a = 10 id - 1 parent - undefined
        test
        <div>   <!-- HeaderComponent -->    a = 20   id - 2 parent - 1
            <h1>Header</h1> id - 3  parent - 2
            <div>   id - 4  parent - 3
                {a}
            </div>
        </div>
        <div>   id - 5  parent - 1
            {a}
        </div>
        <div>   id - 6  parent - 1
            <div>   id - 7  parent - 6
                <h1>Test</a>    id - 8  parent - 7
                <div>   id - 9  parent - 8
                    {a}
                </div>
            </div>
        </div>
        <button>click</button>  a = 40  id - 10 parent - 1
    </div>
</div>

*/