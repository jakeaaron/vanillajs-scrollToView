# vanillajs-scrollToView

scroll a DOM (list) element into view with pure sweet vanilla JavaScript

#### function notables

* getComputedStyle (along with getPropertyValue) allows us to figure out how much actual useable space is in the container for scrolling, by getting rid of the padding calculated with offsetHeight
* the second param to parseInt is important, and something I just discovered–here it makes sure the result is in base 10 (or NaN if it couldn't be parsed)
* querySelector grabs the first child element that matches the css selector–in this case I'm using it to measure the visual height of an individual list item to ensure that the elementToView fits perfectly as the last visible list item
* finally, we're going to scroll the elementToView to the distance of the container minus a list item from the top of the list (so that the list item is scrolled to look attached to the bottom of the container). this is where you could adjust if you want the item on the top of the list, or perhaps in the middle
* also, just in case you're not sure about the let keyword, see this

#### example usage:

```javascript
let focusElement = document.getElementsByClassName('focus')[0]
let containerElement = document.getElementsByClassName('modal')[0]
let listElement = document.getElementsByClassName('chapter-list')[0]
// let's check if any selection index has changed, and then scroll to the correct
// positions to make sure the selected elements are in view
if (chapterlistSelectionIndex !== prevState.chapterlistSelectionIndex) {
    scrollList(focusElement, containerElement, listElement)
}
```
