export function $(selector: string) {
    return document.querySelector(selector) as HTMLElement;
}

export function switchElement(selector: string) {
    $(selector).style.display = $(selector).style.display == 'none' ? 'display' : 'none';
}
