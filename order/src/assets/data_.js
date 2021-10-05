const orders = [
    {
        id: 1,
        title: 1,
        description: 'Named order - 1',
        date: '2017-06-29',
        time: '12:09:33',
        get getProducts() { return products }
    },
    {
        id: 2,
        title: 2,
        description: 'Named order - 2',
        date: '2017-05-28',
        time: '12:09:33',
        get getProducts() { return products }
    },
    {
        id: 3,
        title: 3,
        description: 'Named order - 3',
        date: '2017-04-27',
        time: '12:09:33',
        get getProducts() { return products }
    }
];
const products = [
    {
        isNew: true,
        photo: './src/assets/monitor1.png',
        title: 'Monitors Samsung',
        specification: 'Gigabyte Technology GF-3',
        serialNumber: 'SN-12.3456789',
        date: '2017-06-29 12:09:33',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33'
        },
        price: [
            { value: 100, symbol: 'USD' },
            { value: 2500, symbol: 'UAH' }
        ],
    },
    {
        isNew: false,
        photo: './src/assets/monitor2.png',
        title: 'Monitors LG',
        specification: 'Gigabyte Technology GF-4',
        serialNumber: 'SN-13.9876543',
        date: '2017-06-29 12:09:33',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33'
        },
        price: [
            { value: 110, symbol: 'USD' },
            { value: 2510, symbol: 'UAH' }
        ],
    },
    {
        isNew: false,
        photo: './src/assets/monitor2.png',
        title: 'Monitors Lenovo',
        specification: 'Gigabyte Technology GF-5',
        serialNumber: 'SN-13.9876543',
        date: '2017-06-29 12:09:33',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33'
        },
        price: [
            { value: 120, symbol: 'USD' },
            { value: 2520, symbol: 'UAH' }
        ],
    }
]

export { orders, products };