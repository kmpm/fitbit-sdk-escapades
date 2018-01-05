

# #tile-list
List items can be reorderd by default. A reordered list will
render in the changed order even if .getElementsByXX gets
them in the constructed order.

Official documentation can be found at https://dev.fitbit.com/build/guides/design-guidelines/ui-components/#tile-lists

## Basic example
```svg
<symbol id="mytile">
  <!-- tile content here -->
</symbol>

<use id="mylist" href="#tile-list" >
  <use id="tile-0" href="#tile-list-item">
    <use href="#mytile" />
  </use>
</use>
```

## Imports
```svg
<svg>
  <defs>
    <link rel="stylesheet" href="styles.css" />
    <link rel="import" href="/mnt/sysassets/widgets_common.gui" />
    <!-- Additional Imports -->
    <link rel="import" href="/mnt/sysassets/widgets/tile_list_widget.gui"/>
  </defs>
</svg>
```
## Configuration
__Variables__
* `align-mode`: X='0' selects no alignment, i.e. the default behavior. 
X='1' selects aligning the nearest item to the top of the view after the scroll ends.
* `peek-enabled`: X='0' disables peek.
* `reorder-enabled`: 1= Allow reordering of items (default). 0= Disable reordering.
* `separator-height-bottom`: 2= Seen used in BART example

__Sub Elements__
* `#title-list-item`: A repeating container element.


# #title-list-item
Part of #title-list

## Basic example
```svg
<symbol id="mytile" focusable="false" pointer-events="visible"
system-events="all">

</symbol>
```

## Configuration
__Attributes__

* `focusable="<bool>"`: Seen in example
* `pointer-events="visible"`: Seen in example
* `system-events="all"`: Seen in example 

