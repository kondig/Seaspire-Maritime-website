// each product of the basket needs to be set as a javascript object. object name can be whatever the developer wants. we just need the object variables..

var iqProductOrder = {
    name: "Korres black pearl",
    units: "4",
    price: "12.45"
};


// we need to save the products of the basket in the "iqProductOrders" array
iqProductOrders.push(iqProductOrder);
iqProductOrders.push(iqProductOrder);
console.log(iqProductOrders);

// save the basket by just calling the "iqRegisterProdAsync" function.. eg  onclick="iqRegisterProdAsync();"
// save the visit by just calling the "iqRegisterVisitAsync" function.. eg  onclick="iqRegisterVisitAsync();"
