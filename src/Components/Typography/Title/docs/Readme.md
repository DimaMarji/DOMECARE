# Title Component

Title is a react typeScript component.

### Quick start

this component built with antd Typography component

first of all let's see how Title Component look like

![App Screenshot](img/example.JPG)
![App Screenshot](img/example2.JPG)

## Title props

Button has multiple props to use with multiple use cases,let's see props

#### props:

1. optional props:
    1. children
    1. code
    1. copyable
    1. delete
    1. disabled
    1. editable
    1. ellipsis
    1. level
    1. mark
    1. onClick
    1. italic
    1. type
    1. underline
    1. titleType (
       | semi-bold-24 | semi-bold-40 | bold-64
       )
    1. titleFontColor (
       | navy-blue | light-blue | navy-blue-15 | navy-blue-30 | navy-blue-80 | white-footer | gray-footer-30 |
       gray-footer-80
       )
    1. titleFontFamily (
       | Nordeco-Regular | Nordeco-Light | Nordeco-Semi-Bold | Nordeco-Bold
       )
    1. titleFontSize (
       | 64px | 48px | 40px | 32px | 24px | 20px | 18px | 16px | 14px | 13px | 12px
       )

### how to use :

first of all , based on optional props you can use it like this :

```javascript
<Title editable level={3} style={{margin: 0}}>
    h3. ZCODERZ
</Title>
<Title titleType={"semi-bold-24"}>Title</Title>
<Title titleType={"semi-bold-40"}>Title</Title>
<Title titleType={"bold-64"}>Title</Title>
```

### Note :

when you need to add custom (padding - margin - line-height) add it to your scss file with !important word