import { div } from "../../../components/elements"
import { onclick } from "../../../components/events"
import { updateValue } from "../../main"

function footerComponent() {
    let a = 30

    function inc() {
        a = 50
        updateValue({ a })
    }

    return div(
        'foot',
        { a },
        onclick(inc)
    )
}

export default footerComponent