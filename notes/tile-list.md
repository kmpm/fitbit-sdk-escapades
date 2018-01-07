

# tile-list
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
### Variables
* `align-mode`: X='0' selects no alignment, i.e. the default behavior. 
X='1' selects aligning the nearest item to the top of the view after the scroll ends.
* `peek-enabled`: X='0' disables peek.
* `reorder-enabled`: 1= Allow reordering of items (default). 0= Disable reordering.
* `separator-height-bottom`: 2= Seen used in BART example

### Sub Elements
The component is composed of the following SVG sub elements:
* [#title-list-item](#title-list-item): A repeating container element.

## Javascript
The tile-list element implements a 
[TileList Interface](https://dev.fitbit.com/build/reference/device-api/document/#interface-tilelist-)

### Attributes
* length: Returns number of tiles in list
* text:
* image:
* value: 
* mode:
* state:

### Methods
* `getTile(position: number)`: Returns TileItem
* `insertTile(item: TitleListItem, position: number, options?: TitleListItemOperationOptions | undefined)`
* `obtainTile()`: TileListItem factory that returns an item suitable for using with `insertTile()`
* addEventListener
* removeEventListener
* dispatchEvent


# title-list-item
Part of [#tile-list](#tile-list).

## Basic example
```svg
<symbol id="mytile" focusable="false" pointer-events="visible"
system-events="all">

</symbol>
```

## Configuration
### Attributes

* `focusable="<bool>"`: Seen in example
* `pointer-events="visible"`: Seen in example
* `system-events="all"`: Seen in example 

### Sub Elements

The component is composed of the following SVG sub elements:

## Javascript
Implements [TileListItem Interface](https://dev.fitbit.com/build/reference/device-api/document/#interface-tilelistitem-)
### Attributes
* text
* image
* value
* mode 
* state

### Methods
* `align()`:
* `hide()`:
* `remove()`: removes the item from list
* `show()`: 
