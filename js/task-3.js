function getElementWidth(content, padding, border) {
    const contentWidth = Number.parseFloat(content);
    const paddingWidth = Number.parseFloat(padding);
    const borderWidth = Number.parseFloat(border);

    const totalWidth = 2 * (paddingWidth + borderWidth) + contentWidth;
    return totalWidth;
}
console.log(getElementWidth('50px','8px','4px'));
console.log(getElementWidth('60px','12px','8.5px'));
console.log(getElementWidth('200px','0px','0px'));


