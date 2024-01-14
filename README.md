
**Input-Type-Range-Sync**

` version 2019.2.1`
 
This is a small function which synchronize _**range type input elements**_ (**rtie**) with other items.

** Examples Page **
- https://caglarorhan.github.io/input-type-range-sync/example.html (one-way binding, two-way binding)
- https://caglarorhan.github.io/input-type-range-sync/sync-simple.html (sync-simple)

**Explanation of Main Function**

First of all, ``window.load`` event listener activated. All initialization settled in main function named ``totalLoad``.
After initialization, all **rtie** which has ``.itrs`` class are listening for these events: 

    - mousedown (callback is sync)
    - mouseup (callback is unsync)
    - click (callback is detector)

There are three callback functions.

    - sync
    - detector
    - unsync
 
 - first function ``sync`` adds a ``mousemove`` event listener to the caller input element. This event listener has ``detector`` callback function.
 - third function ``unsync`` removes the ``mousemove`` event listener from the caller input element and callback ``detector`` callback function.
 - second function ``detector`` is only get the **rtie** current value and set it to any given item.
    
**With this set-up here are the scenarios.**
- User press mouse left button (mousedown) and drag the mouse along the range type input.
- User release the mouse left button (mouseup).
- User press-and-release anywhere on the range type input with left mouse button (click).

With each of these scenarios linked (bind to each other) items are synchronized.

**Bind Range Type Input to Other Items**

There are two types of binding:
- **one way bind**
    - ``value`` or ``innerText`` of item binds to the **rtie** current value
    - if item is a function then send **rtie** current value to the function as an argument.
- **two way bind**
    - If item is an another **rtie** -even if not has .irts class- both of them binds each other! 




     
