# Interactive Pricing Component

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [Reference](#reference)
  - [Font](#font)
  - [Color](#color)
- [Run Locally](#run-locally)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)
- [Credits](#credits)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshots

![Interactive pricing component preview](https://user-images.githubusercontent.com/67356291/134205788-1d325c0f-8855-49fb-9d70-72e67503329f.png)

![Interactive pricing component mobile preview](https://user-images.githubusercontent.com/67356291/134205791-a9b89ecd-8138-4735-8d53-fa71c6344fde.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/interactive-pricing-component-with-flexbox-on2bIMqrQ](https://www.frontendmentor.io/solutions/interactive-pricing-component-with-flexbox-on2bIMqrQ)
- Live Site URL: [https://ishantbhurani.github.io/interactive-pricing-component/](https://ishantbhurani.github.io/interactive-pricing-component/)

## Reference

### Font

- [Manrope](https://fonts.google.com/specimen/Manrope)

### Color

| Color                 | Hex                                                                                      |
| --------------------- | ---------------------------------------------------------------------------------------- |
| Soft Cyan             | ![hsl(174, 77%, 80%)](https://via.placeholder.com/10/a5f3eb?text=+) hsl(174, 77%, 80%)   |
| Strong Cyan           | ![hsl(174, 86%, 45%)](https://via.placeholder.com/10/10d5c2?text=+) hsl(174, 86%, 45%)   |
| Light Grayish Red     | ![hsl(14, 92%, 95%)](https://via.placeholder.com/10/feece7?text=+) hsl(14, 92%, 95%)     |
| Light Red             | ![hsl(15, 100%, 70%)](https://via.placeholder.com/10/ff8c66?text=+) hsl(15, 100%, 70%)   |
| Pale Blue             | ![hsl(226, 100%, 87%)](https://via.placeholder.com/10/bdccff?text=+) hsl(226, 100%, 87%) |
| White                 | ![hsl(0, 0%, 100%)](https://via.placeholder.com/10/ffffff?text=+) hsl(0, 0%, 100%)       |
| Very Pale Blue        | ![hsl(230, 100%, 99%)](https://via.placeholder.com/10/fafbff?text=+) hsl(230, 100%, 99%) |
| Light Grayish Blue    | ![hsl(224, 65%, 95%)](https://via.placeholder.com/10/eaeefb?text=+) hsl(224, 65%, 95%)   |
| Light Grayish Blue 2  | ![hsl(223, 50%, 87%)](https://via.placeholder.com/10/cdd7ee?text=+) hsl(223, 50%, 87%)   |
| Grayish Blue          | ![hsl(225, 20%, 60%)](https://via.placeholder.com/10/858fad?text=+) hsl(225, 20%, 60%)   |
| Dark Desaturated Blue | ![hsl(227, 35%, 25%)](https://via.placeholder.com/10/293356?text=+) hsl(227, 35%, 25%)   |

## Run Locally

Clone the project

```bash
  git clone git@github.com:ishantbhurani/interactive-pricing-component.git
```

Go to the project directory

```bash
  cd interactive-pricing-component
```

Run `index.html`

```bash
  <browsername> index.html
```

E.g.

```bash
  firefox index.html
```

```bash
  google-chrome index.html
```

## My process

### Built with

- Semantic HTML5 markup
- Flexbox

### What I learned
- Creating custom range slider with custom styled thumb

```html
<div class="range-wrapper">
  <input type="range" />
  <div class="track">
    <div class="track-inner"></div>
  </div>
  <div class="thumb"></div>
</div>
```

- Creating custom toggle switch

```html
<label class="switch">
  <input type="checkbox" />
  <span class="slider"></span>
</label>
```

- Creating custom image-bullets for list items

```css
li::before {
  content: url(../images/icon-check.svg);
}
```

## Author

- Frontend Mentor - [@ishantbhurani](https://www.frontendmentor.io/profile/ishantbhurani)
- Twitter - [@IShaunt](https://twitter.com/IShaunt)

## Credits

- [Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8)
