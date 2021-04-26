const dataOrder = [{
        id: 1,
        quantity: 1,
        price: 120,
        discount: 25,
        tax: 15,
        total: 110
    },
    {
        id: 2,
        quantity: 1,
        price: 7,
        discount: 0,
        tax: 15,
        total: 110
    },
    {
        id: 3,
        quantity: 1,
        price: 120,
        discount: 25,
        tax: 15,
        total: 110
    }
];

const taxOneData = (item) => {
    return Math.round(item.quantity * item.price * 12.5 / 100);
};

const totalOneData = (item) => {
    return (item.quantity * item.price - item.discount + item.tax);
}

const showDataOrder = (dataArr) => {
    let showData = '';
    let totalPrice = 0;
    let totalTax = 0;
    dataArr.map((item, index) => {
        if (item.discount == 0) {

        }
        showData += `
            <tr>
                <td><img src = "./img/img.png" alt ="camera"></td>
                <td> MASSA AST <br> Color: black,Material: metal</td>
                <td>
                    <table class = "table-child" >
                        <tr>
                            <td>${item.quantity}</td>
                            <td><i class = "fas fa-minus" onclick=""></i></td>
                            <td><i class = "fas fa-plus" onclick=""></i></td>
                            <td><i class = "fas fa-times" onclick=""></i></td>
                        </tr>
                    </table>
                </td>
                <td>$${item.price}.00</td>
                <td>$${item.discount}.00</td>
                <td>$${taxOneData(item)}.00</td>
                <td>$${totalOneData(item)}.00</td>
            </tr>
        `;
        totalPrice += item.total;
        totalTax += item.tax;
    });
    let showTotal = `
        <tr>
            <td colspan = "6" > Total Price: </td>
            <td> $228 .00 </td>
        </tr>
        <tr>
            <td colspan = "6" > Total Discount: </td>
            <td> $50 .00 </td>
        </tr>
        <tr >
            <td colspan = "6" > Total Tax: </td>
            <td> $31 .00 </td>
        </tr>
    `
    document.getElementById("show-data").innerHTML = showData;
    document.getElementById("show-total").innerHTML = showTotal;
};

showDataOrder(dataOrder);