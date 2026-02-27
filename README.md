# odin-etch-sketch

Premise: Build an etch a sketch with flexbox. The grid's size can by altered by the user, and is a 1/1 aspect ratio.

Plan: 
- Default grid layout will be 16x16. 
- Using JS, generate 256 divs using a loop
- The divs will be arranged in a grid using flexbox on the parent container
- To get a specific amount of divs per row, I can have each div's width occupy an even percentage of the grid till 100% (for example 1/16 * 100 is 6.25% per item)
- Each div will have a class with hover styling so the mouse leaves a trail
- A button at the top of the screen will send a popup, where the user can enter the number of squares per side
- A dialog box can be used to achieve this for fancy, or alert if simple
- This will remove the existing grid (deleting the container would be quickest)
- Generate a new one with the size requested (but occupy the same amount of space (ex, 960px)), using the same method as mentioned.