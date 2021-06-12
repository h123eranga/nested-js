export function attr(values) {
    return {
        'type': 'attr',
        'values': values
    }
}

// accesskey	shortcut key	Specifies a keyboard shortcut to activate or focus the element.
export function acesskey() {

}

// class	classname	Assigns a class name or space-separated list of class names to an element.
export function classname() {

}

// contenteditable	Indicates whether the content of an element is editable by the user or not.
export function contenteditable() {

}

// contextmenu	menu-id	Specifies a context menu for an element. A context menu is a menu that appears when the user clicks the right mouse button on the element.
export function contextmenu() {

}

// data-*	data	Specified on any HTML element, to store custom data specific to the page.
export function data() {

}

// dir	Specifies the base direction of directionality of the element's text.
export function dir() {

}

// draggable Specifies whether an element is draggable or not.
export function draggable() {

}

// dropzone	Specifies whether the dragged data is copied, moved, or linked, when dropped.
export function dropzone() {

}

// hidden	hidden	Indicates that the element is not yet, or is no longer, relevant.
export function hidden() {

}

// id	name	Specifies a unique identifier (ID) for an element which must be unique in the whole document.
export function id() {

}

// lang	language-code	Specifies the primary language for the element's text content.
export function lang() {

}

// spellcheck Specifies whether the element may be checked for spelling errors or not.
export function spellcheck() {

}

// style	style	Specifies inline style information for an element.
export function style() {

}

// tabindex	number	Specifies the tabbing order of an element.
export function tabindex() {

}

// title	text	Provides advisory information related to the element. It would be appropriate for a tooltip.
export function title() {

}

// translate Specifies whether the text content of an element should be translated or not.
export function translate() {

}

// xml:lang	language-code	Specifies the primary language for the element's text content, in XHTML documents.
export function xml_lang() {

}









// <a>

// charset	charset	Obsolete Specifies the character encoding of the linked resource.
export function charset(callback) {
    return {
        "type": "event",
        "event": "charset",
        "func": callback
    }
}

// coords	x,y coordinates	Obsolete Specifies the position of the link on the screen.
export function coords(callback) {
    return {
        "type": "event",
        "event": "coords",
        "func": callback
    }
}

// download 	filename	Specifies whether to download the linked resource instead of navigating to it, when the user clicks on the link.
export function download(callback) {
    return {
        "type": "event",
        "event": "download",
        "func": callback
    }
}

// href	URL	Specifies the location of the destination document or web resource (such as an image, PDF, or other media file).
export function href(callback) {
    return {
        "type": "event",
        "event": "href",
        "func": callback
    }
}

// hreflang	language-code	Specifies the language of the linked document. This attribute may only be used when href is specified.
export function hreflang(callback) {
    return {
        "type": "event",
        "event": "hreflang",
        "func": callback
    }
}

// media 	media-query	Specifies the media for which the linked resource is designed.
export function media(callback) {
    return {
        "type": "event",
        "event": "media",
        "func": callback
    }
}

// name	text	Obsolete Specifies the name of an anchor. Use the global attribute id instead.
export function name_(callback) {
    return {
        "type": "event",
        "event": "name",
        "func": callback
    }
}

// rel	alternate author bookmark help license next nofollow noreferrer prefetch prev search tag	Describes the relationship between the document containing the hyperlink and the linked resource. This attribute should be used only if the href attribute is present.
export function rel(callback) {
    return {
        "type": "event",
        "event": "rel",
        "func": callback
    }
}

// rev	link-type	Obsolete Describes the relationship of the linked document back to the source document (the opposite of the rel attribute).
export function rev(callback) {
    return {
        "type": "event",
        "event": "rev",
        "func": callback
    }
}

// shape	rect circle poly default	Obsolete Specifies the shape of the hotspot region i.e. selectable region for hyperlinks.
export function shape(callback) {
    return {
        "type": "event",
        "event": "shape",
        "func": callback
    }
}

// target	_blank _parent _self _top framename	Defines a target to open the linked resource specified in the href attribute.
export function target(callback) {
    return {
        "type": "event",
        "event": "target",
        "func": callback
    }
}

// type	content-type	Specifies the content type (MIME type) of the linked content–for example, "image/jpeg", "text/html" etc.
export function type(callback) {
    return {
        "type": "event",
        "event": "type",
        "func": callback
    }
}


// <area>
// alt	text	Specifies replacement text to use when the images defined by the area elements are not available.
export function alt(callback) {
    return {
        "type": "event",
        "event": "alt",
        "func": callback
    }
}

// nohref	nohref	Obsolete Specifies that no hyperlink exists for the associated area.
export function nohref(callback) {
    return {
        "type": "event",
        "event": "nohref",
        "func": callback
    }
}


// <audio>
// autoplay	autoplay	This Boolean attribute specifies that the audio will automatically start playing as soon as it can do so without stopping to finish loading the data.
export function autoplay(callback) {
    return {
        "type": "event",
        "event": "autoplay",
        "func": callback
    }
}

// controls	controls	If specified, the browsers will display controls to allow the user to control audio playback, such as play/pause, volume, etc.
export function controls(callback) {
    return {
        "type": "event",
        "event": "controls",
        "func": callback
    }
}

// loop	loop	This Boolean attribute specifies that the audio will automatically start over again, upon reaching the end.
export function loop(callback) {
    return {
        "type": "event",
        "event": "loop",
        "func": callback
    }
}

// muted	muted	This Boolean attribute specifies whether the audio will be initially silenced. The default value is false, meaning that the audio will be played.
export function muted(callback) {
    return {
        "type": "event",
        "event": "muted",
        "func": callback
    }
}

// preload	auto metadata none	Provides a hint to the browser about whether to download of the audio itself or its metadata. The autoplay attribute can override this attribute, because if you want to automatically play a audio, the browser will obviously need to download it.
export function preload(callback) {
    return {
        "type": "event",
        "event": "preload",
        "func": callback
    }
}

// src	URL	Specifies the location of the audio file. Alternatively, you can use the preferred <source> tag as it allows for multiple options.
export function src(callback) {
    return {
        "type": "event",
        "event": "src",
        "func": callback
    }
}

// <blockquote>
// cite	URL	Specifies the source of a quotation.
export function cite(callback) {
    return {
        "type": "event",
        "event": "cite",
        "func": callback
    }
}


// <body>
// alink	color	Obsolete Specifies the color of active link (while the mouse button is held down during a click) in a document.
export function alink(callback) {
    return {
        "type": "event",
        "event": "alink",
        "func": callback
    }
}

// background	URL	Obsolete Specifies a background image for the document.
export function background(callback) {
    return {
        "type": "event",
        "event": "background",
        "func": callback
    }
}

// bgcolor	color	Obsolete Specifies the background color of the document.
export function bgcolor(callback) {
    return {
        "type": "event",
        "event": "bgcolor",
        "func": callback
    }
}

// link	color	Obsolete Specifies the color of unvisited links in a document.
export function link(callback) {
    return {
        "type": "event",
        "event": "link",
        "func": callback
    }
}

// text	color	Obsolete Specifies the foreground color for text in a document.
export function text(callback) {
    return {
        "type": "event",
        "event": "text",
        "func": callback
    }
}

// vlink	color	Obsolete Specifies the color of visited links (links that have already been followed) in a document.
export function vlink(callback) {
    return {
        "type": "event",
        "event": "vlink",
        "func": callback
    }
}


// <clear>
// clear	none left right all	Obsolete Specifies where the next line should appear after the line break caused by this element.
export function clear(callback) {
    return {
        "type": "event",
        "event": "clear",
        "func": callback
    }
}


// <button>
// autofocus 	autofocus	This Boolean attribute specifies that the button should automatically get focus when the document is loaded.
export function autofocus(callback) {
    return {
        "type": "event",
        "event": "autofocus",
        "func": callback
    }
}

// disabled	disabled	This Boolean attribute disables the button for user interaction.
export function disabled(callback) {
    return {
        "type": "event",
        "event": "disabled",
        "func": callback
    }
}

// form 	form-id	Specifies the <form> element that the button element is associated with (its form owner).
export function form(callback) {
    return {
        "type": "event",
        "event": "form",
        "func": callback
    }
}

// formaction 	URL	Specifies the URL of a program that processes the information submitted by the button (only for type="submit").
export function formaction(callback) {
    return {
        "type": "event",
        "event": "formaction",
        "func": callback
    }
}

// formenctype 	application/x-www-form-urlencoded multipart/form-data text/plain	Specifies how the form data should be encoded when submitting the form data to the server (only for method="post")
export function formenctype(callback) {
    return {
        "type": "event",
        "event": "formenctype",
        "func": callback
    }
}

// formmethod 	get post	Specifies the HTTP method that the browser will use to submit the form (only for type="submit").
export function formmethod(callback) {
    return {
        "type": "event",
        "event": "formmethod",
        "func": callback
    }
}

// formnovalidate 	formnovalidate	This Boolean attribute specifies that the form data should not be validated when it is submitted (only for type="submit"). 
export function formnovalidate(callback) {
    return {
        "type": "event",
        "event": "formnovalidate",
        "func": callback
    }
}

// formtarget 	_blank _self _parent _top framename	Specifies a target to display the response that is received after submitting the form.
export function formtarget(callback) {
    return {
        "type": "event",
        "event": "formnovalidate",
        "func": callback
    }
}

// value	text	Specifies the initial value of the button.
export function value(callback) {
    return {
        "type": "event",
        "event": "value",
        "func": callback
    }
}

// <canvas>
// width	pixels	Sets the width of the canvas.
export function width(callback) {
    return {
        "type": "event",
        "event": "width",
        "func": callback
    }
}

// height	pixels	Sets the height of the canvas.
export function height_(callback) {
    return {
        "type": "event",
        "event": "height",
        "func": callback
    }
}


// <caption>
// align	top bottom left right	Obsolete Specifies the position of the caption with respect to the table.
export function height(callback) {
    return {
        "type": "event",
        "event": "height",
        "func": callback
    }
}