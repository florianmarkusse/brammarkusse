# Accessibility

This document describes the various requirements for creating and maintaining an accessible website.

## Icons

### Semantic Elements

These are elements that convey meaning as opposed to _decorative_ elements.

#### SVG

- Add `role="img"` to `svg` element
- Add `aria-labelledby="x"` to `svg` element
- Add `title` with `id="x"`

##### Example

```
  <svg aria-labelledby="my-twitter-title" role="img" xmlns="http://www.w3.org/2000/svg">
    <title id="my-twitter-title">The Font Awesome team's Twitter account</title>
    <path d=""></path>
  </svg>
```

### Decorative Elements

These are elements that are only used for decoration.

### SVG

- Add `aria-hidden="true"` to `svg` element
- Add `role="img"` to `svg` element

#### Example

```
<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg">
  <path d=""></path>
</svg>
```
