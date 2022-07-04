<div align="center">
    <p>
      <img src="header.png" alt="React Layouter"/>
    </p>
    <p>
      <strong>⚡️ Layouter in React JS, ¡fantastic! ⚡️</strong>
    </p>
    <p>
        <a href="README.md"><img src="en_US.png" alt="English Language"/> English</a> — <a href="README-es_ES.md"><img src="es_ES.png" alt="Idioma Español"/> Español</a>
    </p>
</div>

# React-Layouter

[![CI](https://github.com/dapize/react-layouter/workflows/CI/badge.svg)](https://github.com/dapize/react-layouter/actions?query=workflow:"CI")
[![npm version](https://img.shields.io/npm/v/react-layouter.svg)](https://www.npmjs.org/package/react-layouter)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-layouter)
![types included](https://badgen.net/npm/types/react-layouter)

Is a **component** that give us the use of the library [Layouter.js](https://github.com/dapize/layouter.js) in [React JS](https://reactjs.org/).

## 🔧 Installation

```js
npm install react-layouter
// o
yarn add react-layouter
```

## ✨ How Use It?

1. **First** we have to init the library, with the `<Provider>`, there if where we can declare the [configuration](https://github.com/dapize/layouter.js/blob/master/DOCS.md):

```js
import { Provider } from 'react-layouter';
import App from './App';

const layouterConfig = {
  // Here we can add the configuration of the library
  // I mean: los breakpoints, the prefix, etc
};

<Provider config={layouterConfig}>
  <App />
</Provider>;
```

> Is require to be in root, so that I feed the whole application.

2. **Second and finally**, you have to use the component `<Box>` where you want, in other component for example:

```js
import { Box } from 'react-layouter';

const App = () => {
  return (
    <Box w="100" h="100" c="13/15">
      content
    </Box>
  );
};

export default App;
```

**That's it!**, that is all of we have to do to use the **layouter** in React. Just use the component `Box` wherever you want.

## ⚡ Directives

Are practically the same of the [library](https://github.com/dapize/layouter.js), just the names was changed from `kebab-case` to `camelCase`, let see:

| Name                                                                                 | Alias                  | Examples                                                                                  | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------ | ---------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Cols](https://github.com/dapize/layouter.js/blob/master/DOCS.md#cols)               | `c`                    | `cols="13/15"`, `c="5/10"`                                                                | Determines the columns, that is, the 'width' as a percentage.                                                                                                                                                |
| [d](https://github.com/dapize/layouter.js/blob/master/DOCS.md#display)               | `display`              | `d="bl"`, `display="inline"`                                                              | Determines the **display** that the node will have.                                                                                                                                                          |
| [Mart](https://github.com/dapize/layouter.js/blob/master/DOCS.md#mart)               | `mt`, `margin-top`     | `mart="10"`, `mt="20"`, `margin-top="12"`                                                 | Determines the **top margin** of a node.                                                                                                                                                                     |
| [Marr](https://github.com/dapize/layouter.js/blob/master/DOCS.md#marr-marb-marl)     | `mr`, `margin-right`   | `marr="2/15"`, `mr="5/10"`, `margin-right="3/5"`                                          | Determine the **right margin** of a node.                                                                                                                                                                    |
| [Marb](https://github.com/dapize/layouter.js/blob/master/DOCS.md#marr-marb-marl)     | `mb`, `margin-bottom`  | `marb="30"`, `mb="50"`, `margin-bottom="25"`                                              | Determine the **bottom margin** of a node.                                                                                                                                                                   |
| [Marl](https://github.com/dapize/layouter.js/blob/master/DOCS.md#marr-marb-marl)     | `ml`, `margin-left`    | `marl="3/15"`, `ml="5/10"`, `margin-left="3/5"`                                           | Determine the **left margin** of a node.                                                                                                                                                                     |
| [Mar](https://github.com/dapize/layouter.js/blob/master/DOCS.md#mar)                 | `m`, `margin`          | `mar="20-2/15-30-3/15"`, `m="20-2/15-30-3/15"`, `margin="20-2/15-30-3/15"`                | It is a shorthand of the directives: [mart](https://github.com/dapize/layouter.js/blob/master/DOCS.md#mart), [marr, marb, y marl](https://github.com/dapize/layouter.js/blob/master/DOCS.md#marr-marb-marl). |
| [Mary](https://github.com/dapize/layouter.js/blob/master/DOCS.md#mary-marx)          | `my`, `margin-y`       | `mary="10"`, `my="20"`, `margin-y="30"`                                                   | Determine the **top and bottom margin** of a node.                                                                                                                                                           |
| [Marx](https://github.com/dapize/layouter.js/blob/master/DOCS.md#mary-marx)          | `mx`, `maring-x`       | `marx="10"`, `mx="20"`, `margin-x="30"`                                                   | Determine the **right and left margin at the same time** of a node.                                                                                                                                          |
| [Padt](https://github.com/dapize/layouter.js/blob/master/DOCS.md#padt)               | `pt`, `padding-top`    | `padt="10"`, `pt="20"`, `padding-top="30"`                                                | Determine the **top padding** of a node.                                                                                                                                                                     |
| [Padr](https://github.com/dapize/layouter.js/blob/master/DOCS.md#padr-padb-padl)     | `pr`, `padding-right`  | `padr="2/15"`, `pr="3/16"`, `padding-right="4/17"`                                        | Determine the **padding right** of a node.                                                                                                                                                                   |
| [Padb](https://github.com/dapize/layouter.js/blob/master/DOCS.md#padr-padb-padl)     | `pb`, `padding-bottom` | `padb="30"`, `pb="40"`, `padding-bottom="50"`                                             | Determine the **bottom padding** of a node.                                                                                                                                                                  |
| [Padl](https://github.com/dapize/layouter.js/blob/master/DOCS.md#padr-padb-padl)     | `pl`, `padding-left`   | `padl="3/15"`, `pl="4/16"`, `padding-left="5/17"`                                         | Determine the **left padding** of a node.                                                                                                                                                                    |
| [Pad](https://github.com/dapize/layouter.js/blob/master/DOCS.md#pad)                 | `p`, `padding`         | `pad="20-2/15-30-3/15"`, `p="20-2/15-30-3/15"`, `padding="20-2/15-30-3/15"`               | It is a shorthand of the directives: [padt](https://github.com/dapize/layouter.js/blob/master/DOCS.md#padt), [padr, padb, y padl](https://github.com/dapize/layouter.js/blob/master/DOCS.md#padr-padb-padl). |
| [Pady](https://github.com/dapize/layouter.js/blob/master/DOCS.md#pady-padx)          | `py`, `padding-y`      | `pady="10"`, `py="20"`, `padding-y="30"`                                                  | Determine the **padding top and bottom than the same time** of a node.                                                                                                                                       |
| [Padx](https://github.com/dapize/layouter.js/blob/master/DOCS.md#pady-padx)          | `px`, `padding-x`      | `padx="10"`, `px="20"`, `padding-x="30`                                                   | Determine the **right and left padding** at the same time of a node.                                                                                                                                         |
| [Flex](https://github.com/dapize/layouter.js/blob/master/DOCS.md#flex)               | `fx`                   | `flex="jc:ce ai:fs fd:co"`, `flex="jc:fe ai:fs`, `fx="align-items:center flex-wrap:wrap"` | Determine the **display Flex** of the node and its derivatives.                                                                                                                                              |
| [Wdh](https://github.com/dapize/layouter.js/blob/master/DOCS.md#width)               | `w`, `width`           | `wdh="100"`, `w="200"`, `width="300"`                                                     | Determine the **width** of the node in pixels or other [unit of measure](https://github.com/dapize/layouter.js/blob/master/DOCS.md#unit-of-measure).                                                         |
| [Hgt](https://github.com/dapize/layouter.js/blob/master/DOCS.md#height)              | `h`, `height`          | `hgt="100"`, `h="200"`, `height="300"`                                                    | Determine the **height** of the node in pixels or other [unit of measure](https://github.com/dapize/layouter.js/blob/master/DOCS.md#unit-of-measure).                                                        |
| [Mxw](https://github.com/dapize/layouter.js/blob/master/DOCS.md#maxwidth)            | `max-width`            | `mxw="200"`, `max-width="300"`                                                            | Determine the **maximum width** of the node in pixels or other [unit of measure](https://github.com/dapize/layouter.js/blob/master/DOCS.md#unit-of-measure).                                                 |
| [Mxh](https://github.com/dapize/layouter.js/blob/master/DOCS.md#maxheight)           | `max-height`           | `mxh="200"`, `max-height="300"`                                                           | Determine the **maximum height** of the node in pixels or other [unit of measure](https://github.com/dapize/layouter.js/blob/master/DOCS.md#unit-of-measure).                                                |
| [Miw](https://github.com/dapize/layouter.js/blob/master/DOCS.md#minwidth)            | `min-width`            | `miw="300"`, `min-width="400"`                                                            | Determine the **minimum width** of the node in pixels or other [unit of measure](https://github.com/dapize/layouter.js/blob/master/DOCS.md#unit-of-measure).                                                 |
| [Mih](https://github.com/dapize/layouter.js/blob/master/DOCS.md#minheight)           | `min-height`           | `mih="300"`, `min-height="400"`                                                           | Determine the **high height** of the node in pixels or other [unit of measure](https://github.com/dapize/layouter.js/blob/master/DOCS.md#unit-of-measure).                                                   |
| [Pos](https://github.com/dapize/layouter.js/blob/master/DOCS.md#position)            | `position`             | `pos="re"`, `position="relative"`                                                         | Determine the **position** of node.                                                                                                                                                                          |
| [T](https://github.com/dapize/layouter.js/blob/master/DOCS.md#top-right-bottom-left) | `top`                  | `t="10"`, `top="20"`                                                                      | Determine the **top** of the node in pixels or other [unit of measure](https://github.com/dapize/layouter.js/blob/master/DOCS.md#unit-of-measure).                                                           |
| [R](https://github.com/dapize/layouter.js/blob/master/DOCS.md#top-right-bottom-left) | `right`                | `r="10"`, `right="20"`                                                                    | Determine the **right** of the node in pixels or other [unit of measure](https://github.com/dapize/layouter.js/blob/master/DOCS.md#unit-of-measure).                                                         |
| [B](https://github.com/dapize/layouter.js/blob/master/DOCS.md#top-right-bottom-left) | `bottom`               | `b="10"`, `bottom="20"`                                                                   | Determine the **bottom** of the node in pixels or other [unit of measure](https://github.com/dapize/layouter.js/blob/master/DOCS.md#unit-of-measure).                                                        |
| [L](https://github.com/dapize/layouter.js/blob/master/DOCS.md#top-right-bottom-left) | `left`                 | `l="10"`, `left="20"`                                                                     | Determine the **left** of the node in pixels or other [unit of measure](DOCS.md#unit-of-measure).                                                                                                            |

## 📚 ¿Where I can get help?

Exist a extensive documentation here: [DOCS.md](https://github.com/dapize/layouter.js/blob/master/DOCS.md).

## 🧾 Licence

The code and the documentation is under the [Licence MIT](LICENSE).
