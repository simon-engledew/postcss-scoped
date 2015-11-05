# PostCSS Scoped [![Build Status][ci-img]][ci]

[PostCSS] plugin Adds a new @scope rule that qualifies any descendant css.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/simon-engledew/postcss-scoped.svg
[ci]:      https://travis-ci.org/simon-engledew/postcss-scoped

```css
@scope Panel {
  .foo {
      /* Input example */
  }
}
```

```css
.scope-761597ae .foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-scoped') ])
```

See [PostCSS] docs for examples for your environment.
