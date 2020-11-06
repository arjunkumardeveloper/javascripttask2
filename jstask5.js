var group = [];
function validate() {
    var pId = document.getElementById('pid').value;
    var pName = document.getElementById('pname').value;
    var pPrice = document.getElementById('pprice').value;

    if ((pId != "") && (pName != "") && (pPrice != "")) {
        
        //  With Useing Array
        
        products = [pId, pName.toUpperCase(), "USD " + pPrice];
        row = "<tr>";
        for (var index = 0; index < products.length; index++) {

            row += "<td>" + products[index] + "</td>";

        }
        row += "</tr>";

        document.getElementById('data').innerHTML += row;
        console.log(row);


        // Without Useing Array

        // row = "<tr>";
        // row += "<td>" + 10 + pId + "</td>";
        // row += "<td>" + pName.toUpperCase() + "</td>";
        // row += "<td>" + "USD " + pPrice + "</td>";
        // document.getElementById('data').innerHTML += row;

        // row += "</tr>";

        // With Useing Object
        // var product = {};
        // product.id = pId;
        // product.name = pName;
        // product.price = pPrice;



        // group.push(product);
        // display();
        // // console.log("Group " + group);
        // console.log(group.length);
    }

    // function display ()
    // {
    //     var row = "";
    //     for(var i = 0; i < group.length; i++)
    //     {

    //         row += "<tr><td>" + group[i].id + "</td><td>" + group[i].name + "</td><td>" + group[i].price + "</td></tr>";

    //     }
    //         document.getElementById('data').innerHTML = row;

    //  }



    if ((pId == "")) {
        document.getElementById('errorid').innerHTML = "Product Id must be required";
        return false;
    }
    else if (pName == "") {
        document.getElementById('errorname').innerHTML = "Product Name must be required";
        return false;
    }
    else if (pPrice == "") {
        document.getElementById('errorprice').innerHTML = "Product Price must be required";
        return false;
    }
    else {
        return true;
    }
}