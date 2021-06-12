import { div, h1 } from "../../components/elements";

function headerComponent() {

    let b = 20

    return div(
        h1('Header', { b })
    )
}

export default headerComponent