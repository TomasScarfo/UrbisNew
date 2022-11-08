const entradas = [
    {
        producto: 'Tortilla',
        descripcion: 'Tortilla de papa, verdura o acelga',
        img: require('@/assets/img/tortilla.png'),
        precio: 700
    },
    {
        producto: 'Buñuelos',
        descripcion: '8 buñuelos caseros al estilo Urbis',
        img: require('@/assets/img/buñelos.png'),
        precio: 700
    },{
        producto: 'Gambas',
        descripcion: 'Al ajillo',
        img: require('@/assets/img/gambas.png'),
        precio: 1000
    },{
        producto: 'Lengua',
        descripcion: 'Al escabeche',
        img: require('@/assets/img/lengua.png'),
        precio: 1000
    },
]

const principal = [
    {
        producto: 'Milanesa',
        descripcion: 'De pollo o ternera con guarnición',
        img: require('@/assets/img/milanesa.png'),
        precio: 1500
    },
    {
        producto: 'Ñoquis',
        descripcion: 'Servidos con salsa a elección',
        img: require('@/assets/img/ñoquis.png'),
        precio: 1300
    },{
        producto: 'Pollo',
        descripcion: 'Pollo al horno con guarnición a elección',
        img: require('@/assets/img/pollo.png'),
        precio: 1300
    },{
        producto: 'Carne',
        descripcion: 'Carne al horno con guarnición a elección',
        img: require('@/assets/img/carne.png'),
        precio: 1800
    },
]

const postre = [
    {
        producto: 'Flan',
        descripcion: 'Flan casero simple o mixto',
        img: require('@/assets/img/flan.png'),
        precio: 500
    },
    {
        producto: 'Vigilante',
        descripcion: 'Membrillo o batata con queso',
        img: require('@/assets/img/vigilante.png'),
        precio: 500
    },{
        producto: 'Helado',
        descripcion: 'Americana, chocolate o dulce de leche',
        img: require('@/assets/img/helado.png'),
        precio: 300
    },{
        producto: 'Cafe',
        descripcion: 'Cafe negro',
        img: require('@/assets/img/cafe.png'),
        precio: 200
    },
]

export {
    entradas,
    principal,
    postre,
}
