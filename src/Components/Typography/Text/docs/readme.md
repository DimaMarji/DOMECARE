# Typography Text Component

Typography Text is a React typeScript component to show your data as text

documentation is in the "docs" directory.

### Quick start

---

this component use antd library so to make sure it is working right you must install antd :

> npm install antd

### Typography Text props

Typography Text has multiple props to use with multiple use cases so all of them is optional and there is no props
mandatory :

#### props:

1. optional props for Typography Text component :

    1. code (boolean)
    1. copyable (boolean)
    1. delete (boolean)
    1. disabled (boolean)
    1. editable (boolean)
    1. ellipsis (boolean)
    1. keyboard (boolean)
    1. mark (boolean)
    1. onClick (event) => void
    1. strong (boolean)
    1. italic (boolean)
    1. type (secondary | success | warning | danger)
    1. underline (boolean)
    1. textType (
       | regular-12 | regular-16 | semi-bold-16 | regular-18 | semi-bold-18 | regular-20 | semi-bold-20 | regular-24 |
       semi-bold-24 | semi-bold-32
       )
    1. textFontColor (
       | navy-blue | light-blue | navy-blue-15 | navy-blue-30 | navy-blue-80 | white-footer | gray-footer-30 |
       gray-footer-80
       )
    1. textFontFamily (
       | Nordeco-Regular | Nordeco-Light | Nordeco-Semi-Bold | Nordeco-Bold
       )
    1. textFontSize (
       | 64px | 48px | 40px | 32px | 24px | 20px | 18px | 16px | 14px | 13px | 12px
       )

### Image for mandatory with optional props for typography paragraph component :

![App Screenshot](img/example.JPG)
![App Screenshot](img/example2.JPG)

### how to use :

first of all , you should import the component :

```javascript
import Text from "../../../Components/Atoms/Typography/Text";
```

and the code for the previous screenshot :

```javascript
<div style={{display:"grid"}}>
   <Text code={true}>text 1</Text>
   <Text copyable={true}>text 2</Text>
   <Text delete={true}>text 3</Text>
   <Text editable={true}>text 4</Text>
   <Text ellipsis={true}>text 5</Text>
   <Text mark={true}>text 6</Text>
   <Text strong={true}>text 7</Text>
   <Text italic={true}>text 8</Text>
   <Text type={"success"}>text 9</Text>
   <Text underline={true}>text 10</Text>
   <Text disabled={true}>text 11</Text>
   <Text keyboard={true}>text 12</Text>
</div>
<Text textType={"regular-12"}>Text</Text>
<Text textType={"regular-16"}>Text</Text>
<Text textType={"semi-bold-16"}>Text</Text>
<Text textType={"regular-18"}>Text</Text>
<Text textType={"semi-bold-18"}>Text</Text>
<Text textType={"regular-20"}textFontColor={"light-blue"}>Text</Text>
<Text textType={"semi-bold-20"}>Text</Text>
<Text textType={"regular-24"}>Text</Text>
<Text textType={"semi-bold-24"}>Text</Text>
<Text textType={"semi-bold-32"}>Text</Text>
```

### Note :

when you need to add custom (padding - margin - line-height) add it to your scss file with !important word