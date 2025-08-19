---
title: "A Quick Guide to CSS Flexbox"
date: 2025-08-20
tags: [css, web-development, layout]
---

CSS Flexbox is a layout model that allows items in a container to be aligned and distributed space.

## The Container

To start using Flexbox, you need a container element.

```css
.container {
  display: flex; /* or inline-flex */
  flex-direction: row; /* row | row-reverse | column | column-reverse */
  justify-content: center; /* flex-start | flex-end | center | space-between | space-around */
  align-items: center; /* flex-start | flex-end | center | baseline | stretch */
}
