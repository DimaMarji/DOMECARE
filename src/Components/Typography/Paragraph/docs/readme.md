# Typography Paragraph Component

Typography Paragraph is a React typeScript component to show your data as paragraph just like paragraph tag in html

documentation is in the "docs" directory.

### Quick start

---

this component use antd library so to make sure it is working right you must install antd :

> npm install antd

### Typography Paragraph props

Typography Paragraph has multiple props to use with multiple use cases so all of them is optional and there is no props
mandatory :

#### props:

1. optional props for Typography Paragraph component :

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
       | regular-16 | regular-18 | regular-20 | semi-bold-20 | semi-bold-24
       )
    1. paragraphFontColor (
       | navy-blue | light-blue | navy-blue-15 | navy-blue-30 | navy-blue-80 | white-footer | gray-footer-30 |
       gray-footer-80
       )
    1. paragraphFontFamily (
       | Nordeco-Regular | Nordeco-Light | Nordeco-Semi-Bold | Nordeco-Bold
       )
    1. paragraphFontSize (
       | 64px | 48px | 40px | 32px | 24px | 20px | 18px | 16px | 14px | 13px | 12px
       )

### Image for mandatory with optional props for typography paragraph component :

![App Screenshot](img/example.JPG)
![App Screenshot](img/example2.JPG)

### how to use :

first of all , you should import the component :

```javascript
import Paragraph from "../../../Components/Atoms/Typography/Paragraph";
```

And the code for the previous screenshots :

```javascript
<Paragraph code={true}>paragraph 1</Paragraph>
<Paragraph copyable={true}>paragraph 2</Paragraph>
<Paragraph delete={true}>paragraph 3</Paragraph>
<Paragraph editable={true}>paragraph 4</Paragraph>
<Paragraph ellipsis={true}>paragraph 5</Paragraph>
<Paragraph mark={true}>paragraph 6</Paragraph>
<Paragraph strong={true}>paragraph 7</Paragraph>
<Paragraph italic={true}>paragraph 8</Paragraph>
<Paragraph type={"success"}>paragraph 9</Paragraph>
<Paragraph underline={true}>paragraph 10</Paragraph>
<Paragraph disabled={true}>paragraph 11</Paragraph>
<Paragraph paragraphType={"regular-16"}>Paragraph</Paragraph>
<Paragraph paragraphType={"regular-18"}>Paragraph</Paragraph>
<Paragraph paragraphType={"regular-20"} paragraphFontColor={"light-blue"}>Paragraph</Paragraph>
<Paragraph paragraphType={"semi-bold-20"}>Paragraph</Paragraph>
<Paragraph paragraphType={"semi-bold-24"}>Paragraph</Paragraph>
```

### Note :

when you need to add custom (padding - margin - line-height) add it to your scss file with !important word