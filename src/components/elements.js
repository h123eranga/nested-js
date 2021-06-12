function elementInfo(tag, values) {
    return {
        "type": "element",
        "tag": tag,
        "values": values
    }
}

// <a>	Defines a hyperlink.
export function a(...values) {
    return elementInfo("a", values)
}

// <abbr>	Defines an abbreviated form of a longer word or phrase.
export function abbr(...values) {
    return elementInfo("abbr", values)
}

// <acronym>	Obsolete Defines an acronym. Use <abbr> instead.
export function acronym(...values) {
    return elementInfo("acronym", values)
}

// <address>	Specifies the author's contact information.
export function address(...values) {
    return elementInfo("address", values)
}

// <applet>	Obsolete Embeds a Java applet (mini Java applications) on the page. Use <object> instead.
export function applet(...values) {
    return elementInfo("applet", values)
}

// <area>	Defines a specific area within an image map.
export function area(...values) {
    return elementInfo("area", values)
}

// <article> 	Defines an article.
export function article(...values) {
    return elementInfo("article", values)
}

// <aside> 	Defines some content loosely related to the page content.
export function aside(...values) {
    return elementInfo("aside", values)
}

// <audio> 	Embeds a sound, or an audio stream in an HTML document.
export function audio(...values) {
    return elementInfo("audio", values)
}

// <b>	Displays text in a bold style.
export function b(...values) {
    return elementInfo("b", values)
}

// <base>	Defines the base URL for all relative URLs in a document.
export function base(...values) {
    return elementInfo("base", values)
}

// <basefont>	Obsolete Specifies the base font for a page. Use CSS instead.
export function basefont(...values) {
    return elementInfo("basefont", values)
}

// <bdi> 	Represents text that is isolated from its surrounding for the purposes of bidirectional text formatting.
export function bdi(...values) {
    return elementInfo("bdi", values)
}

// <bdo>	Overrides the current text direction.
export function bdo(...values) {
    return elementInfo("bdo", values)
}

// <big>	Obsolete Displays text in a large size. Use CSS instead.
export function big(...values) {
    return elementInfo("big", values)
}

// <blockquote>	Represents a section that is quoted from another source.
export function blockquote(...values) {
    return elementInfo("blockquote", values)
}

// <body>	Defines the document's body.
export function body(...values) {
    return elementInfo("body", values)
}

// <br>	Produces a single line break.
export function br(...values) {
    return elementInfo("br", values)
}

// <button>	Creates a clickable button.
export function button(...values) {
    return elementInfo("button", values)
}

// <canvas> 	Defines a region in the document, which can be used to draw graphics on the fly via scripting (usually JavaScript).
export function canvas(...values) {
    return elementInfo("canvas", values)
}

// <caption>	Defines the caption or title of the table.
export function caption(...values) {
    return elementInfo("caption", values)
}

// <center>	Obsolete Align contents in the center. Use CSS instead.
export function center(...values) {
    return elementInfo("center", values)
}

// <cite>	Indicates a citation or reference to another source.
export function cite(...values) {
    return elementInfo("cite", values)
}

// <code>	Specifies text as computer code.
export function code(...values) {
    return elementInfo("code", values)
}

// <col>	Defines attribute values for one or more columns in a table.
export function col(...values) {
    return elementInfo("col", values)
}

// </col><colgroup>	Specifies attributes for multiple columns in a table.
export function colgroup(...values) {
    return elementInfo("colgroup", values)
}

// <data> 	Links a piece of content with a machine-readable translation.
export function data(...values) {
    return elementInfo("data", values)
}

// <datalist> 	Represents a set of pre-defined options for an <input> element.
export function datalist(...values) {
    return elementInfo("datalist", values)
}

// <dd>	Specifies a description, or value for the term (<dt>) in a description list (<dl>).
export function dd(...values) {
    return elementInfo("dd", values)
}

// <del>	Represents text that has been deleted from the document.
export function del(...values) {
    return elementInfo("del", values)
}

// <details> 	Represents a widget from which the user can obtain additional information or controls on-demand.
export function details(...values) {
    return elementInfo("details", values)
}

// <dfn>	Specifies a definition.
export function dfn(...values) {
    return elementInfo("dfn", values)
}

// <dialog> 	Defines a dialog box or subwindow.
export function dialog(...values) {
    return elementInfo("dialog", values)
}

// <dir>	Obsolete Defines a directory list. Use <ul> instead.
export function dir(...values) {
    return elementInfo("dir", values)
}

// <div>	Specifies a division or a section in a document.
export function div(...values) {
    return elementInfo("div", values)
}

// <dl>	Defines a description list.
export function dl(...values) {
    return elementInfo("dl", values)
}

// <dt>	Defines a term (an item) in a description list.
export function dt(...values) {
    return elementInfo("dt", values)
}

// <em>	Defines emphasized text.
export function em(...values) {
    return elementInfo("em", values)
}

// <embed> 	Embeds external application, typically multimedia content like audio or video into an HTML document.
export function embed(...values) {
    return elementInfo("embed", values)
}

// <fieldset>	Specifies a set of related form fields.
export function fieldset(...values) {
    return elementInfo("fieldset", values)
}

// <figcaption> 	Defines a caption or legend for a figure.
export function figcaption(...values) {
    return elementInfo("figcaption", values)
}

// <figure> 	Represents a figure illustrated as part of the document.
export function figure(...values) {
    return elementInfo("figure", values)
}

// <font>	Obsolete Defines font, color, and size for text. Use CSS instead.
export function font(...values) {
    return elementInfo("font", values)
}

// <footer> 	Represents the footer of a document or a section.
export function footer(...values) {
    return elementInfo("footer", values)
}

// <form>	Defines an HTML form for user input.
export function form(...values) {
    return elementInfo("form", values)
}

// <frame>	Obsolete Defines a single frame within a frameset.
export function frame(...values) {
    return elementInfo("frame", values)
}

// <frameset>	Obsolete Defines a collection of frames or other frameset.
export function frameset(...values) {
    return elementInfo("frameset", values)
}

// <head>	Defines the head portion of the document that contains information about the document such as title.
export function head(...values) {
    return elementInfo("head", values)
}

// <header> 	Represents the header of a document or a section.
export function header(...values) {
    return elementInfo("header", values)
}

// <hgroup> 	Defines a group of headings.
export function hgroup(...values) {
    return elementInfo("hgroup", values)
}

// <h1> to <h6>	Defines HTML headings.
export function h1(...values) {
    return elementInfo("h1", values)
}

export function h2(...values) {
    return elementInfo("h2", values)
}

export function h3(...values) {
    return elementInfo("h3", values)
}

export function h4(...values) {
    return elementInfo("h4", values)
}

export function h5(...values) {
    return elementInfo("h5", values)
}

export function h6(...values) {
    return elementInfo("h6", values)
}

// <hr>	Produce a horizontal line.
export function hr(...values) {
    return elementInfo("hr", values)
}

// <html>	Defines the root of an HTML document.
export function html(...values) {
    return elementInfo("html", values)
}

// <i>	Displays text in an italic style.
export function i(...values) {
    return elementInfo("i", values)
}

// <iframe>	Displays a URL in an inline frame.
export function iframe(...values) {
    return elementInfo("iframe", values)
}

// <img>	Represents an image.
export function img(...values) {
    return elementInfo("img", values)
}

// <input>	Defines an input control.
export function input(...values) {
    return elementInfo("input", values)
}

// <ins>	Defines a block of text that has been inserted into a document.
export function ins(...values) {
    return elementInfo("ins", values)
}

// <kbd>	Specifies text as keyboard input.
export function kbd(...values) {
    return elementInfo("kbd", values)
}

// <keygen> 	Represents a control for generating a public-private key pair.
export function keygen(...values) {
    return elementInfo("keygen", values)
}

// <label>	Defines a label for an <input> control.
export function label(...values) {
    return elementInfo("label", values)
}

// <legend>	Defines a caption for a <fieldset> element.
export function legend(...values) {
    return elementInfo("legend", values)
}

// <li>	Defines a list item.
export function li(...values) {
    return elementInfo("li", values)
}

// <link>	Defines the relationship between the current document and an external resource.
export function link(...values) {
    return elementInfo("link", values)
}

// <main> 	Represents the main or dominant content of the document.
export function main(...values) {
    return elementInfo("main", values)
}

// <map>	Defines a client-side image-map.
export function map(...values) {
    return elementInfo("map", values)
}

// <mark> 	Represents text highlighted for reference purposes.
export function mark(...values) {
    return elementInfo("mark", values)
}

// <menu>	Represents a list of commands.
export function menu(...values) {
    return elementInfo("menu", values)
}

// <menuitem> 	Defines a list (or menuitem) of commands that a user can perform.
export function menuitem(...values) {
    return elementInfo("menuitem", values)
}

// <meta>	Provides structured metadata about the document content.
export function meta(...values) {
    return elementInfo("meta", values)
}

// <meter> 	Represents a scalar measurement within a known range.
export function meter(...values) {
    return elementInfo("meter", values)
}

// <nav> 	Defines a section of navigation links.
export function nav(...values) {
    return elementInfo("nav", values)
}

// <noframes>	Obsolete Defines an alternate content that displays in browsers that do not support frames.
export function noframes(...values) {
    return elementInfo("noframes", values)
}

// <noscript>	Defines alternative content to display when the browser doesn't support scripting.
export function noscript(...values) {
    return elementInfo("noscript", values)
}

// <object>	Defines an embedded object.
export function object(...values) {
    return elementInfo("object", values)
}

// <ol>	Defines an ordered list.
export function ol(...values) {
    return elementInfo("ol", values)
}

// <optgroup>	Defines a group of related options in a selection list.
export function optgroup(...values) {
    return elementInfo("optgroup", values)
}

// <option>	Defines an option in a selection list.
export function option(...values) {
    return elementInfo("option", values)
}

// <output> 	Represents the result of a calculation.
export function output(...values) {
    return elementInfo("output", values)
}

// <p>	Defines a paragraph.
export function p(...values) {
    return elementInfo("p", values)
}

// <param>	Defines a parameter for an object or applet element.
export function param(...values) {
    return elementInfo("param", values)
}

// <picture> 	Defines a container for multiple image sources.
export function picture(...values) {
    return elementInfo("picture", values)
}

// <pre>	Defines a block of preformatted text.
export function pre(...values) {
    return elementInfo("pre", values)
}

// <progress> 	Represents the completion progress of a task.
export function progress(...values) {
    return elementInfo("progress", values)
}

// <q>	Defines a short inline quotation.
export function q(...values) {
    return elementInfo("q", values)
}

// <rp> 	Provides fall-back parenthesis for browsers that that don't support ruby annotations.
export function rp(...values) {
    return elementInfo("rp", values)
}

// <rt> 	Defines the pronunciation of character presented in a ruby annotations.
export function rt(...values) {
    return elementInfo("rt", values)
}

// <ruby> 	Represents a ruby annotation.
export function ruby(...values) {
    return elementInfo("ruby", values)
}

// <s>	Represents contents that are no longer accurate or no longer relevant.
export function s(...values) {
    return elementInfo("s", values)
}

// <samp>	Specifies text as sample output from a computer program.
export function samp(...values) {
    return elementInfo("samp", values)
}

// <script>	Places script in the document for client-side processing.
export function script(...values) {
    return elementInfo("script", values)
}

// <section> 	Defines a section of a document, such as header, footer etc.
export function section(...values) {
    return elementInfo("section", values)
}

// <select>	Defines a selection list within a form.
export function select(...values) {
    return elementInfo("select", values)
}

// <small>	Displays text in a smaller size.
export function small(...values) {
    return elementInfo("small", values)
}

// <source> 	Defines alternative media resources for the media elements like <audio> or <video>.
export function source(...values) {
    return elementInfo("source", values)
}

// <span>	Defines an inline styleless section in a document.
export function span(...values) {
    return elementInfo("span", values)
}

// <strike>	Obsolete Displays text in strikethrough style.
export function strike(...values) {
    return elementInfo("strike", values)
}

// <strong>	Indicate strongly emphasized text.
export function strong(...values) {
    return elementInfo("strong", values)
}

// <style>	Inserts style information (commonly CSS) into the head of a document.
export function style(...values) {
    return elementInfo("style", values)
}

// <sub>	Defines subscripted text.
export function sub(...values) {
    return elementInfo("sub", values)
}

// <summary> 	Defines a summary for the <details> element.
export function summary(...values) {
    return elementInfo("summary", values)
}

// <sup>	Defines superscripted text.
export function sup(...values) {
    return elementInfo("sup", values)
}

// <svg> 	Embed SVG (Scalable Vector Graphics) content in an HTML document.
export function svg(...values) {
    return elementInfo("svg", values)
}

// <table>	Defines a data table.
export function table(...values) {
    return elementInfo("table", values)
}

// <tbody>	Groups a set of rows defining the main body of the table data.
export function tbody(...values) {
    return elementInfo("tbody", values)
}

// <td>	Defines a cell in a table.
export function td(...values) {
    return elementInfo("td", values)
}

// <template> 	Defines the fragments of HTML that should be hidden when the page is loaded, but can be cloned and inserted in the document by JavaScript.
export function template(...values) {
    return elementInfo("template", values)
}

// <textarea>	Defines a multi-line text input control (text area).
export function textarea(...values) {
    return elementInfo("textarea", values)
}

// <tfoot>	Groups a set of rows summarizing the columns of the table.
export function tfoot(...values) {
    return elementInfo("tfoot", values)
}

// <th>	Defines a header cell in a table.
export function th(...values) {
    return elementInfo("th", values)
}

// <thead>	Groups a set of rows that describes the column labels of a table.
export function thead(...values) {
    return elementInfo("thead", values)
}

// <time> 	Represents a time and/or date.
export function time(...values) {
    return elementInfo("time", values)
}

// <title>	Defines a title for the document.
export function title(...values) {
    return elementInfo("title", values)
}

// <tr>	Defines a row of cells in a table.
export function tr(...values) {
    return elementInfo("tr", values)
}

// <track> 	Defines text tracks for the media elements like <audio> or <video>.
export function track(...values) {
    return elementInfo("track", values)
}

// <tt>	Obsolete Displays text in a teletype style.
export function tt(...values) {
    return elementInfo("tt", values)
}
// <u>	Displays text with an underline.
export function u(...values) {
    return elementInfo("u", values)
}

// <ul>	Defines an unordered list.
export function ul(...values) {
    return elementInfo("ul", values)
}

// <var>	Defines a variable.
// export function var(...values) {
//     return elementInfo("var", values)
// }

// <video> 	Embeds video content in an HTML document.
export function video(...values) {
    return elementInfo("video", values)
}

// <wbr> 	Represents a line break opportunity.
export function wbr(...values) {
    return elementInfo("wbr", values)
}