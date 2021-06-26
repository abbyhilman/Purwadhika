// // prettier-ignore
// const createInfo = () => {
//   const name = document.getElementById("name").value;
//   const price = document.getElementById("price").value;
//   const condition = document.querySelector("input[name=condition]:checked").value;
//   const warehouse = document.getElementById("warehouse").value;
//   const couriers = document.querySelectorAll("input[name=courier]:checked")

//   let courierList = ""
//   couriers.forEach((courier) => {
//     courierList += `${courier.value} `
//   })

//   document.getElementById("result").innerHTML = `Name : ${name} <br>
//   Price: ${price} <br> Condition ${condition} <br> Warehouse: ${warehouse} <br>
//   Courier : ${courierList}`

// };

let products = [
  {
    id: 1579581080923,
    category: "Fast Food",
    name: "Noodle",
    price: 3500,
    stock: 9,
  },
  {
    id: 1579581081130,
    category: "Electronic",
    name: "Hoodie",
    price: 430000,
    stock: 7,
  },
  {
    id: 1579581081342,
    category: "Cloth",
    name: "Headphone",
    price: 30000,
    stock: 8,
  },
  {
    id: 1579581081577,
    category: "Fruit",
    name: "Apel",
    price: 10000,
    stock: 5,
  },
];

const categories = ["All", "Fast Food", "Electronic", "Cloth", "Fruit"];

let carts = [];

// Calculate all items
const fnPayment = () => {
  const listPayment = carts.map((cart) => {
    const { id, category, name, price, qty } = cart;

    return `<p> ${id} | ${category} | ${name} | ${price} x ${qty} = ${
      price * qty
    }</p>`;
  });

  let subTotal = 0;
  carts.forEach((cart) => {
    const { price, qty } = cart;
    subTotal += price * qty;
  });

  const ppn = subTotal * 0.1;
  const finalTotal = subTotal + ppn;

  const listDetail = listPayment.join("");
  const listTotal = `
  <h3>Sub Total Rp.${subTotal.toLocaleString("id")}</h3>
  <h3>Ppn Rp.${ppn.toLocaleString("id")}</h3>
  <h3>Total Rp.${finalTotal.toLocaleString("id")}</h3>
  `;

  document.getElementById("payment").innerHTML = listDetail + listTotal;
};

//////////////
// Render List
//////////////

const fnRenderList = (index) => {
  const listProduct = products.map((product) => {
    const { id, category, name, price, stock } = product;

    if (id != index) {
      return `
      <tr>
        <td>${id}</td>
        <td>${category}</td>
        <td>${name}</td>
        <td>${price}</td>
        <td>${stock}</td>

        <td><input type="button" value="Add" onclick="fnAdd(${id})"/></td>
        <td><input type="button" value="Delete" onclick="fnDelete(${id})"/></td>
        <td><input type="button" value="Edit" onclick="fnEdit(${id})"/></td>
       </tr>`;
    }

    return `
    <tr>
       <td>${id}</td>
       <td>${category}</td>
       <td><input value="${name}" type="text" id="nameEdit" /></td>
       <td><input value="${price}" type="text" id="priceEdit" /></td>
       <td><input value="${stock}" type="text" id="stockEdit" /></td>
       <td><input disabled type="button" value="Add" /></td>
       <td><input type="button" value="Save" onclick="fnSave(${id})"/></td>
       <td><input type="button" value="Cancel" onclick="fnCancel()"/></td>
     </tr>`;
  });

  const listCategory = categories.map((category) => {
    return `<option value="${category}">${category}</option>`;
  });

  // data products
  document.getElementById("render").innerHTML = listProduct.join("");
  // category
  document.getElementById("catFilter").innerHTML = listCategory.join("");
  document.getElementById("catInput").innerHTML = listCategory.join("");
};

///////
// Save
///////

const fnSave = (index) => {
  // get all new data from text box
  const name = document.getElementById("nameEdit").value;
  const price = document.getElementById("priceEdit").value;
  const stock = document.getElementById("stockEdit").value;

  // Found index
  const found = products.findIndex((product) => {
    return product.id == index;
  });

  // Change Data
  products[found] = { ...products[found], name, price, stock };

  fnRenderList();
};

//////
// ADD
//////

const fnAdd = (index) => {
  const selectedProduct = products.find((product) => {
    return product.id == index;
  });

  const foundCart = carts.find((cart) => {
    return cart.id == index;
  });

  if (selectedProduct.stock == 0) {
    alert("Stock sudah habis");
  } else {
    if (!foundCart) {
      const { id, category, name, price } = selectedProduct;

      carts.push({ id, category, name, price, qty: 1 });
    } else {
      const idx = carts.findIndex((cart) => {
        return cart.id == index;
      });

      carts[idx].qty++;
    }

    const idx = products.findIndex((product) => {
      return product.id == index;
    });

    products[idx].stock--;
  }

  fnRenderCarts();
  fnRenderList();
};

///////
// Edit
///////

const fnEdit = (index) => {
  fnRenderList(index);
};

/////////
// Cancel
/////////

const fnCancel = () => {
  fnRenderList();
};

/////////
// Delete
/////////
const fnDelete = (index) => {
  products = products.filter((product) => {
    return product.id != index;
  });

  fnRenderList();
};

///////////////
// Render Carts
///////////////

const fnRenderCarts = () => {
  const listCarts = carts.map((cart) => {
    const { id, category, name, price, qty } = cart;
    return `
    <tr>
       <td>${id}</td>
       <td>${category}</td>
       <td>${name}</td>
       <td>${price}</td>
       <td>${qty}</td>
       <td><input type="button" value="Delete" onclick="fnDeleteCart(${id})"/></td>
     </tr>
    `;
  });

  document.getElementById("carts").innerHTML = listCarts.join("");
};

//////////////
// Delete Cart
//////////////
const fnDeleteCart = (index) => {
  // temukan index product pada array product
  const idxProducts = products.findIndex((product) => {
    return product.id == index;
  });

  const idxCart = carts.findIndex((cart) => {
    return cart.id == index;
  });

  products[idxProducts].stock += carts[idxCart].qty;

  carts = carts.filter((cart) => {
    return cart.id != index;
  });

  fnRenderList();
  fnRenderCarts();
};

////////////////
// Render Filter
////////////////

const fnRenderFilter = (arr) => {
  const listProduct = arr.map((product) => {
    const { id, category, name, price, stock } = product;
    return ` 
    <tr>
        <td>${id}</td>
        <td>${category}</td>
        <td>${name}</td>
        <td>${price}</td>
        <td>${stock}</td>
        <td><input type="button" value="Add" onclick="fnAdd(${id})"/></td>
        <td><input type="button" value="Delete" onclick="fnDelete(${id})"/></td>
        <td><input type="button" value="Edit" onclick="fnEdit(${id})"/></td>
      </tr>`;
  });

  // data products
  document.getElementById("render").innerHTML = listProduct.join("");
};

///////////////
// Reset Filter
///////////////

const fnResetFilter = () => {
  const inputTags = document.getElementsByName("txtFilter");

  for (const input of inputTags) {
    input.value = "";
  }

  fnRenderList();
};

/////////////
// Input data
/////////////

const fnInputData = () => {
  // Get data from html
  const name = document.getElementById("nameInput").value;
  const price = parseInt(document.getElementById("priceInput").value);
  const category = document.getElementById("catInput").value;
  const stock = document.getElementById("stockInput").value;

  const time = new Date();
  const id = time.getTime();

  // Push new data
  products.push({ id, name, price, category, stock });
  // Clean all text box
  document.getElementById("nameInput").value = "";
  document.getElementById("priceInput").value = "";
  document.getElementById("stockInput").value = "";

  // show the list
  fnRenderList();
};

///////////////
// Filter Name
///////////////

const fnFilterName = () => {
  // Get data from user
  const keyword = document.getElementById("nameFilter").value;

  // Filtering

  /*
    Gunakan array products (berisi semua data)
    Melakukan filter dengan memilih data tertentu berdasarkan kriteria tertentu
    Hasil filternya yang akan ditampilkan
    
  */

  const filterResult = products.filter((product) => {
    // Turn to lowercase
    const nameLow = product.name.toLowerCase();

    const keywordLow = keyword.toLowerCase();

    return nameLow.includes(keywordLow);
  });

  fnRenderFilter(filterResult);
};

///////////////
// Filter Price
///////////////

const fnFilterPrice = () => {
  //get min value
  const min = document.getElementById("min").value;

  // get max value
  const max = document.getElementById("max").value;

  let filterResult = products;

  // all text boxes don't empty

  if (!(min == "" || max == "")) {
    // lakukan filtering
    filterResult = products.filter((product) => {
      const { price } = product;
      return price >= min && price <= max;
    });
  }

  fnRenderFilter(filterResult);
};

//////////////////
// Filter Category
//////////////////

const fnFilterCategory = () => {
  const selectedCategory = document.getElementById("catFilter").value;

  let filterResult = products;

  if (selectedCategory != "All") {
    filterResult = products.filter((product) => {
      return product.category == selectedCategory;
    });
  }

  fnRenderFilter(filterResult);
};

fnRenderList();
