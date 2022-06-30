<div align="center">
    <p>
        <img src="header.png" alt="React Layouter"/>
    </p>
    <strong>⚡️ Layouter en React JS, ¡fantástico! ⚡️</strong>
</div>

# React-Layouter

Es un **componente** que proporciona el uso de la librería [Layouter.js](https://github.com/dapize/layouter.js) en [React JS](https://reactjs.org/).

## 🔧 Instalación

```js
npm install react-layouter
// o
yarn add react-layouter
```

## ✨ Uso

1. **Primero** hay que declarar la inicialización de la librería, con el `<Provider>`, ahí es donde se puede declarar la [configuración](https://github.com/dapize/layouter.js/blob/master/DOCS.md):

```js
import { Provider } from "react-layouter";
import App from "./App";

const layouterConfig = {
  // Aquí se agrega la configuración de la librería
  // es decir, los breakpoints, el prefijo, etc
};

<Provider config={layouterConfig}>
  <App />
</Provider>;
```

> Se requiere que esté en root, para que alimente a toda la aplicación.

2. **Luego**, se usa el componente `<Box>` en donde se requiera, en otro componente por ejemplo:

```js
import { Box } from "react-layouter";

const App = () => {
  return (
    <Box w="100" h="100" c="13/15">
      contenido
    </Box>
  );
};

export default App;
```

**Y listo!**, eso es todo lo que necesitamos para usar el **layouter** en React.

## ⚡ Directivas

Son practicamente las mismas que la misma [librería](https://github.com/dapize/layouter.js), solo que se an cambiado las directivas de tipo `kebab-case` por `camelCase`, veamos:

| Nombre                                                                               | Alias                 | Ejemplos                                                                                  | Descripción                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------ | --------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Cols](https://github.com/dapize/layouter.js/blob/master/DOCS.md#cols)               | `c`                   | `cols="13/15"`, `c="5/10"`                                                                | Determina las columnas, osea el 'width' de manera porcentual.                                                                                                                                              |
| [d](https://github.com/dapize/layouter.js/blob/master/DOCS.md#display)               | `display`             | `d="bl"`, `display="inline"`                                                              | Determina el **display** que tendrá el nodo.                                                                                                                                                               |
| [Mart](https://github.com/dapize/layouter.js/blob/master/DOCS.md#mart)               | `mt`, `marginTop`     | `mart="10"`, `mt="20"`, `marginTop="12"`                                                  | Determina el **margen superior** de un nodo.                                                                                                                                                               |
| [Marr](https://github.com/dapize/layouter.js/blob/master/DOCS.md#marr-marb-marl)     | `mr`, `marginRight`   | `marr="2/15"`, `mr="5/10"`, `marginRight="3/5"`                                           | Determinar el **margen derecho** de un nodo.                                                                                                                                                               |
| [Marb](https://github.com/dapize/layouter.js/blob/master/DOCS.md#marr-marb-marl)     | `mb`, `marginBottom`  | `marb="30"`, `mb="50"`, `marginBottom="25"`                                               | Determinar el **margen inferior** de un nodo.                                                                                                                                                              |
| [Marl](https://github.com/dapize/layouter.js/blob/master/DOCS.md#marr-marb-marl)     | `ml`, `marginLeft`    | `marl="3/15"`, `ml="5/10"`, `marginLeft="3/5"`                                            | Determinar el **margen izquierdo** de un nodo.                                                                                                                                                             |
| [Mar](https://github.com/dapize/layouter.js/blob/master/DOCS.md#mar)                 | `m`, `margin`         | `mar="20-2/15-30-3/15"`, `m="20-2/15-30-3/15"`, `margin="20-2/15-30-3/15"`                | Es un shorthand de las directivas: [mart](https://github.com/dapize/layouter.js/blob/master/DOCS.md#mart), [marr, marb, y marl](https://github.com/dapize/layouter.js/blob/master/DOCS.md#marr-marb-marl). |
| [Mary](https://github.com/dapize/layouter.js/blob/master/DOCS.md#mary-marx)          | `my`, `marginY`       | `mary="10"`, `my="20"`, `marginY="30"`                                                    | Determina el **margen superior e inferior al mismo tiempo** de un nodo.                                                                                                                                    |
| [Marx](https://github.com/dapize/layouter.js/blob/master/DOCS.md#mary-marx)          | `mx`, `maringX`       | `marx="10"`, `mx="20"`, `marginX="30"`                                                    | Determina el **margen derecho e izquierdo al mismo tiempo** de un nodo.                                                                                                                                    |
| [Padt](https://github.com/dapize/layouter.js/blob/master/DOCS.md#padt)               | `pt`, `paddingTop`    | `padt="10"`, `pt="20"`, `paddingTop="30"`                                                 | Determina el **padding superior** de un nodo.                                                                                                                                                              |
| [Padr](https://github.com/dapize/layouter.js/blob/master/DOCS.md#padr-padb-padl)     | `pr`, `paddingRight`  | `padr="2/15"`, `pr="3/16"`, `paddingRight="4/17"`                                         | Determina el **padding derecho** de un nodo.                                                                                                                                                               |
| [Padb](https://github.com/dapize/layouter.js/blob/master/DOCS.md#padr-padb-padl)     | `pb`, `paddingBottom` | `padb="30"`, `pb="40"`, `paddingBottom="50"`                                              | Determina el **padding inferior** de un nodo.                                                                                                                                                              |
| [Padl](https://github.com/dapize/layouter.js/blob/master/DOCS.md#padr-padb-padl)     | `pl`, `paddingLeft`   | `padl="3/15"`, `pl="4/16"`, `paddingLeft="5/17"`                                          | Determina el **padding izquierdo** de un nodo.                                                                                                                                                             |
| [Pad](https://github.com/dapize/layouter.js/blob/master/DOCS.md#pad)                 | `p`, `padding`        | `pad="20-2/15-30-3/15"`, `p="20-2/15-30-3/15"`, `padding="20-2/15-30-3/15"`               | Es un shorthand de las directivas: [padt](https://github.com/dapize/layouter.js/blob/master/DOCS.md#padt), [padr, padb, y padl](https://github.com/dapize/layouter.js/blob/master/DOCS.md#padr-padb-padl). |
| [Pady](https://github.com/dapize/layouter.js/blob/master/DOCS.md#pady-padx)          | `py`, `paddingY`      | `pady="10"`, `py="20"`, `paddingY="30"`                                                   | Determina el **padding superior e inferior al mismo tiempo** de un nodo.                                                                                                                                   |
| [Padx](https://github.com/dapize/layouter.js/blob/master/DOCS.md#pady-padx)          | `px`, `paddingX`      | `padx="10"`, `px="20"`, `paddingX="30`                                                    | Determina el **padding derecho e izquierdo al mismo tiempo** de un nodo.                                                                                                                                   |
| [Flex](https://github.com/dapize/layouter.js/blob/master/DOCS.md#flex)               | `fx`                  | `flex="jc:ce ai:fs fd:co"`, `flex="jc:fe ai:fs`, `fx="align-items:center flex-wrap:wrap"` | Determina el **display flex** del nodo y sus derivados.                                                                                                                                                    |
| [Wdh](https://github.com/dapize/layouter.js/blob/master/DOCS.md#width)               | `w`, `width`          | `wdh="100"`, `w="200"`, `width="300"`                                                     | Determina el **ancho** del nodo en píxeles u otra [unidad de medida](https://github.com/dapize/layouter.js/blob/master/DOCS.md#unidades-de-medida-definidas).                                              |
| [Hgt](https://github.com/dapize/layouter.js/blob/master/DOCS.md#height)              | `h`, `height`         | `hgt="100"`, `h="200"`, `height="300"`                                                    | Determina el **alto** del nodo en píxeles u otra [unidad de medida](https://github.com/dapize/layouter.js/blob/master/DOCS.md#unidades-de-medida-definidas).                                               |
| [Mxw](https://github.com/dapize/layouter.js/blob/master/DOCS.md#maxwidth)            | `maxWidth`            | `mxw="200"`, `maxWidth="300"`                                                             | Determina el **máximo ancho** del nodo en píxeles u otra [unidad de medida](https://github.com/dapize/layouter.js/blob/master/DOCS.md#unidades-de-medida-definidas).                                       |
| [Mxh](https://github.com/dapize/layouter.js/blob/master/DOCS.md#maxheight)           | `maxHeight`           | `mxh="200"`, `maxHeight="300"`                                                            | Determina el **máximo alto** del nodo en píxeles u otra [unidad de medida](https://github.com/dapize/layouter.js/blob/master/DOCS.md#unidades-de-medida-definidas).                                        |
| [Miw](https://github.com/dapize/layouter.js/blob/master/DOCS.md#minwidth)            | `minWidth`            | `miw="300"`, `minWidth="400"`                                                             | Determina el **mínimo ancho** del nodo en píxeles u otra [unidad de medida](https://github.com/dapize/layouter.js/blob/master/DOCS.md#unidades-de-medida-definidas).                                       |
| [Mih](https://github.com/dapize/layouter.js/blob/master/DOCS.md#minheight)           | `minHeight`           | `mih="300"`, `minHeight="400"`                                                            | Determina el **mínimo alto** del nodo en píxeles u otra [unidad de medida](https://github.com/dapize/layouter.js/blob/master/DOCS.md#unidades-de-medida-definidas).                                        |
| [Pos](https://github.com/dapize/layouter.js/blob/master/DOCS.md#position)            | `position`            | `pos="re"`, `position="relative"`                                                         | Determina la **posición** del nodo.                                                                                                                                                                        |
| [T](https://github.com/dapize/layouter.js/blob/master/DOCS.md#top-right-bottom-left) | `top`                 | `t="10"`, `top="20"`                                                                      | Determina el **top** del nodo en píxeles u otra [unidad de medida](https://github.com/dapize/layouter.js/blob/master/DOCS.md#unidades-de-medida-definidas).                                                |
| [R](https://github.com/dapize/layouter.js/blob/master/DOCS.md#top-right-bottom-left) | `right`               | `r="10"`, `right="20"`                                                                    | Determina el **right** del nodo en píxeles u otra [unidad de medida](https://github.com/dapize/layouter.js/blob/master/DOCS.md#unidades-de-medida-definidas).                                              |
| [B](https://github.com/dapize/layouter.js/blob/master/DOCS.md#top-right-bottom-left) | `bottom`              | `b="10"`, `bottom="20"`                                                                   | Determina el **bottom** del nodo en píxeles u otra [unidad de medida](https://github.com/dapize/layouter.js/blob/master/DOCS.md#unidades-de-medida-definidas).                                             |
| [L](https://github.com/dapize/layouter.js/blob/master/DOCS.md#top-right-bottom-left) | `left`                | `l="10"`, `left="20"`                                                                     | Determina el **left** del nodo en píxeles u otra [unidad de medida](DOCS.md#unidades-de-medida-definidas).                                                                                                 |

## 📚 ¿Dónde obtener ayuda?

Hay una extensa documentación en el archivo [DOCS.md](https://github.com/dapize/layouter.js/blob/master/DOCS.md).

## 🧾 Licencia

El código y la documentación se publican bajo la [Licencia MIT](LICENSE).
