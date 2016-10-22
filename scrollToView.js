 /**
 * scroll an overflowed list so that the elementToView is visible
 *
 * @param      {<NodeList item>}   elementToView     list element to make visible
 * @param      {<NodeList item>}   elementContainer  element containing the elementToView
 * @param      {<NodeList item>}   listElement       actual list (<ul>?) element to scroll (could be the same as container)
 *
 *
 */
function scrollList(elementToView, elementContainer, listElement) {
    let containerHeight, topPos, listItem, temp = null
    if (typeof window !== 'undefined' && elementToView && elementContainer && listElement) {
        temp = window.getComputedStyle(elementContainer, null).getPropertyValue('padding-top')
        temp = parseInt(temp, 10) + parseInt(window.getComputedStyle(elementContainer, null).getPropertyValue('padding-bottom'), 10)
        // temp holds the top and bottom padding
        // usable space is the offsetHeight - padding
        containerHeight = elementContainer.offsetHeight - temp
        // amount of pixels away from the top of the container
        topPos = elementToView.offsetTop
        if (!containerHeight || !topPos) return false
        // get the height of a list item in the list to scroll 
        listItem = listElement.querySelector('li:first-of-type').offsetHeight
        // actually do the scrolling now
        // scroll the top of the list to show the elementToView on the bottom (as the last visible element in the list)
        listElement.scrollTop = (topPos - (containerHeight - listItem))
    }
}
