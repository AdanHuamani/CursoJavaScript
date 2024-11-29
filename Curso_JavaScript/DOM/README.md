# DOM-Document Object Model
Modelo de documento de objeto.
El DOM es un conjunto de utilidades especificamente diseñadas para manipular documentos XML y HTML.

El DOM transforma el archivo HTML en un arbol de nodos gerarquicos, facilmente manipulables.
El DOM convierte todo el contenido del archivo HTML en un objeto de javascript.
- **Mi archivo index.html**
```javascript
<body>
    <h1 id="titulo">titulo</h1>
        <p class="parrafo">este es la descripcion de mi pagina</p>
        <ul>
            <li>Primer Elemento</li>
            <li>Segundo Elemento</li>
            <li>Tercer Elemento</li>
        </ul>
</body>
```
- **Mi archivo script.js**
```javascript
document:{
    element:body,
    attr:null,
    text:null,
    child: [
        {
            element:h1,
            attr:{id:"titulo"},
            text:"titulo",
            child:null
        },
        {
            element:p,
            attr:{class:"parrafo"},
            text:"este es la cescripcion de mi pagina",
            child:null
        },
        {
            element:ul,
            attr:null,
            text:null,
            chid:[
                {
                    element:li
                    attr:null,
                    text: {id: "Primer Elemento"},
                    chid:null,
                },
                {
                    element:li
                    attr:null,
                    text: {id: "Segundo Elemento"},
                    chid:null,
                },
                {
                    element:li
                    attr:null,
                    text: {id: "Tercer Elemento"},
                    chid:null,
                }
            ],
        }
    ]
}
```
DOM ademas de realizar el trabajo de convertir un archivo `HTML` en un objeto de javascript, nos ofrece una `API` (Aplication Programing Interfacez - Interfaz de programación de Aplicaciones).

## Selectores
Los selectores nos permiten obtener o capturar una o varias etiquetas `html` incluyendo sus atributos, contenido e hijos si los tuviera.
Los selectores que podemos utilizar son variados, podemos capturar etiquetas atraves de sus atributos comode el nombre de la etiqueta misma.
Los selectores son `funciones` si hablamos de POO entonces se puede decir que son `metodos`.
y son los siguientes:
- **getElementById** - devuelve un elemento (etiqueta) que tenga un id especifico.
```html
<p id="uno">Primer texto</p>
<p id="dos">Primer texto</p>
```
```js
let parrafo=document.getElementById("dos")
```

> [!NOTE]
> Tecnologias para el procesamiento de texto a traves de marcado `markup` (etiquetas - que nos permite a traves de palabras reservadas darle un estilo o significado al contenido de las etiquetas). La  primera tecnologia fue `xml`. Despues nace `html`, despues la ultima generacion de tecnologias de marcadoo de texto `markdown`.