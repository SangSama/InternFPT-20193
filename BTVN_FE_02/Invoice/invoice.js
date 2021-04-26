let i = 0;

const dataList = [];

let checkItemUpdate = -1;
let checkUpdateOrAdd = 0;

const increaseQuantity = (id) => {

}

const reducedQuantity = (id) => {

}


const createProduct = () => {
    console.log('price: ', document.getElementById().value);
    let name = document.getElementById().value;
    let price = document.getElementById().value;
    let quantity = document.getElementById().value;
    console.log(parseInt(price));
    if (parseInt(price) < 0) {
        console.log('abc');
        alert('Price > 0');
        document.getElementById().value = "";
        return;
    }
};

const addData = (eleName, elePrice, eleQuantity) => {
    let product = {
        id: i++,
        name: eleName,
        price: elePrice,
        quantity: eleQuantity
    }
    dataList.push(product);
};

const elementMain = () => {
    let product = {};
    let eleName = document.getElementById("add-name");
    let elePrice = document.getElementById("add-price");
    let eleQuantity = document.getElementById("add-quantity");
    let check = true;
    return product = {
        name: eleName,
        price: elePrice,
        quantity: eleQuantity,
        check: check
    }
}

const checkProduct = () => {
    let product = elementMain();
    if (product.name.value == "") {
        product.name.nextElementSibling.innerHTML = "please fill in the information";
        product.check = false;
    };
    if (product.price.value == "" || parseInt(product.price.value) == 0) {
        product.price.nextElementSibling.innerHTML = "Please enter a price greater than 0đ";
        product.check = false;
    };
    if (product.quantity.value == "" || parseInt(product.quantity.value) < 1 || parseInt(product.quantity.value) > 50) {
        product.quantity.nextElementSibling.innerHTML = "please fill in 1 to 50 ";
        product.check = false;
    };
    return product.check;
};

const addProduct = () => {
    let product = elementMain();
    let check = checkProduct();
    if (check) {
        addData(product.name.value, product.price.value, product.quantity.value);
        showDataList(dataList);
    }
};

const editProduct = () => {
    let product = elementMain();
    let check = checkProduct();
    let idUpdate = changeData();

}

const submitProduct = () => {
    // let product = elementMain();
    let check = checkProduct();
    // let idUpdate = changeData();

    if (check) {
        if (checkUpdateOrAdd == 0) {
            addData(product.name.value, product.price.value, product.quantity.value);
        } else {

            //update data



        }
        showDataList(dataList);
    }
}

const subtotal = (price, quantity) => price * quantity;

const showDataList = (dataList) => {

    let showData = '';
    let showTotal = 0;

    dataList.map((item, index) => {
        showData += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.name}</td> 
                <td><i class = "fas fa-dollar-sign"></i><span>${item.price + ".000"}</span></td>
                <td><i class = "fas fa-minus-square" data_product = "${item.id}" onclick = "reducedQuantity(this)" ></i><span>${item.quantity}</span><i class = "fas fa-plus-square" data_product = "${item.id}" onclick = "increaseQuantity(this)"></i></td>
                <td><i class = "fas fa-dollar-sign"></i><span>${subtotal(item.price, item.quantity) + ".000"}</span></td>
                <td><i class = "fas fa-edit"
                onclick = "changeData(${item.id})"
                data_product="${item.id}" data-toggle="modal" data-target="#myModal"></i></td>
            </tr>
            `;
        showTotal += subtotal(item.price, item.quantity);
    });

    document.getElementById('data-list').innerHTML = showData;
    document.getElementById('total').innerHTML = showTotal + ".000";
};

const changeData = (id) => {
    checkItemUpdate = id;
    checkUpdateOrAdd = 1;
    findItemBuId(checkItemUpdate)
    //return checkItemUpdate;
}

const findItemBuId = (id) => {
    let product = elementMain();
    let dataX = dataList.filter(data => data.id === id)[0]
    product.name.value = dataX.name;
    product.price.value = dataX.price;
    product.quantity.value = dataX.quantity
}