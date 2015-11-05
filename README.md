# PostCSS Scoped [![Build Status][ci-img]][ci]

[PostCSS] plugin Adds a new @scope rule that qualifies any descendant css.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/simon-engledew/postcss-scoped.svg
[ci]:      https://travis-ci.org/simon-engledew/postcss-scoped

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-scoped') ])
```

See [PostCSS] docs for examples for your environment.
