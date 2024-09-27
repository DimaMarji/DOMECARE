# Typography Link Component

Typography Link is a React typeScript component to show your data as Link just like anchor tag in html

documentation is in the "docs" directory.

### Quick start

---

this component use antd library so to make sure it is working right you must install antd :

> npm install antd

### Typography Link props

Typography Link has multiple props to use with multiple use cases so all of them is optional and there are no props
mandatory :

#### props:

1. optional props for Typography Link component :

    1. className (string)
    1. href (string)
    1. target (_blank | _parent | _self | _top)
    1. code (boolean)
    1. copyable (boolean)
    1. delete (boolean)
    1. disabled (boolean)
    1. editable (boolean)
    1. ellipsis (boolean)
    1. mark (boolean)
    1. onClick (event) => void
    1. strong (boolean)
    1. italic (boolean)
    1. type (secondary | success | warning | danger)
    1. underline (boolean)
    1. paragraphType (
       | semi-bold-16 | semi-bold-18 | regular-20
       )
    1. paragraphFontColor (
       | navy-blue | light-blue | light-yellow | dark-red | navy-blue-15 | navy-blue-30 | navy-blue-80 | white-footer |
       gray-footer-30 | gray-footer-80
       )
    1. paragraphFontFamily (
       | Nordeco-Regular | Nordeco-Light | Nordeco-Semi-Bold | Nordeco-Bold
       )
    1. paragraphFontSize (
       | 64px | 50px | 48px | 40px | 32px | 24px | 20px | 18px | 16px | 14px | 13px | 12px
       )

### Image for mandatory with optional props for typography paragraph component :

![App Screenshot](img/link-example.JPG)

### how to use :

first of all , you should import the component :

```javascript
import Link from "../../Components/Atoms/Typography/Link";
```

And the code for the previous screenshots :

```javascript
<div style={{display: "grid"}}>
    <Link href={"https://ant.design"} target={"_blank"} type={"danger"}>link1</Link>
    <Link href={"https://ant.design"} underline={true}>link2</Link>
    <Link href={"https://ant.design"} editable={true}>link3</Link>
    <Link href={"https://ant.design"} copyable={true}>link4</Link>
    <Link href={"https://ant.design"} code={true}>link5</Link>
    <Link href={"https://ant.design"} keyboard={true}>link6</Link>
    <Link href={"https://ant.design"} mark={true}>link7</Link>
    <Link linkType={"semi-bold-16"} href={"https://ant.design"} underline={true}>link8</Link>
    <Link linkType={"semi-bold-18"} href={"https://ant.design"} underline={true}>link9</Link>
    <Link linkType={"regular-20"} href={"https://ant.design"} underline={true}>link10</Link>
</div>
```

### Note :

when you need to add custom (padding - margin - line-height) add it to your scss file with !important word