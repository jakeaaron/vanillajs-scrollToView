# vanillajs-scrollToView

scroll a DOM (list) element into view with pure sweet vanilla JavaScript

#### function notables

* getComputedStyle (along with getPropertyValue) allows us to figure out how much actual useable space is in the container for scrolling, by getting rid of the padding calculated with offsetHeight
* the second param to parseInt is important, and something I just discovered–here it makes sure the result is in base 10 (or NaN if it couldn't be parsed)
* querySelector grabs the first child element that matches the css selector–in this case I'm using it to measure the visual height of an individual list item to ensure that the elementToView fits perfectly as the last visible list item
* finally, we're going to scroll the elementToView to the distance of the container minus a list item from the top of the list (so that the list item is scrolled to look attached to the bottom of the container). this is where you could adjust if you want the item on the top of the list, or perhaps in the middle


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

#### change scrollTo position

as noted previously, the line setting the *scrollTop* position can be changed to scroll the item to the desired position.
the function scrolls to the last visible position in the list, but that could be changed accordingly:

###### top of list
*offsetTop* already gives the element's position in pixels away from the top of the container, so we can just scroll the top of the list to that position
```javascript
listElement.scrollTop = elementToView.offsetTop
```

###### middle of list
scroll all the way to the top of container, minus half of the container height
```javascript
listElement.scrollTop = (elementToView.offsetTop - (containerHeight / 2))
```
