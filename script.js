// outdent button code
const bar=document.getElementById('bar');  /* bar is the id of mobile div id to display at the resposiveness */
const  nav=document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })

}

// close button
const close=document.getElementById('close');
if(close)
    {
        close.addEventListener('click',()=>{
             nav.classList.remove('active');
        })
    }

    var icon=document.getElementById("darkicon");

    icon.onclick=function(){
        document.body.classList.toggle("dark-theme");
    }
//     document.addEventListener('DOMContentLoaded', () => {    //this code is for singlle quantity updation  and we use id for single element
//         const qty = document.getElementById('qty');
//         const tt = document.getElementById('tt');
//         const eacht = document.getElementById('eacht');
    
//         const priceperitem = parseFloat(eacht.textContent);

//     const updateTotal = () => {
//         const quantity = parseInt(qty.value);
//         if (!isNaN(quantity) && quantity > 0) {
//             const total = quantity * priceperitem;
//             tt.textContent = total.toFixed(2);
//         } else {
//             tt.textContent = '0.00';
//         }
//     };

//     qty.addEventListener('input', updateTotal);

//     // Initial calculation
//     updateTotal();
// });



//for quantity increase in cart
document.addEventListener('DOMContentLoaded', () => {    //this code is for multiple item in the table and for many items and we use class when there are multiple item
    const items = document.querySelectorAll('.item');
    
    items.forEach(item => {
        const qty = item.querySelector('.qty');
        const tt = item.querySelector('.tt');
        const eacht = item.querySelector('.eacht');
        const deleteicon=item.querySelector('.btnrem');

         


        const priceperitem = parseFloat(eacht.textContent);   //eacht.textcontent is used when the input type is text or we  used int he table 

        const updateTotal = () => {
            const quantity = parseInt(qty.value);   //qty.value is used when the input type is number 
            if (!isNaN(quantity) && quantity > 0) {
                const total = quantity * priceperitem;
                tt.textContent = total.toFixed(2);
            } else {
                tt.textContent = '0.00';
                gt.textContent='0.00';
            }
        };

        qty.addEventListener('input', updateTotal);
        
        // Initial calculation
        updateTotal();

       

        //deleteicon press button
        deleteicon.addEventListener('click', () => {
            item.remove();
        });
         
       
        

    });

});



       
              







// document.addEventListener('DOMContentLoaded',()=>{

//     const addCartItemToTable = ({name, quantity, price}) => {
//     const row = document.createElement('tr');
//     row.classList.add('cart-item');
//     row.innerHTML = `
//         <td class="item-name">${name}</td>
//         <td><input type="number" class="qty" value="${quantity}" min="1"></td>
//         <td>$<span class="eacht">${price}</span></td>
//         <td>$<span class="tt">${(quantity * price).toFixed(2)}</span></td>
//         <td><span class="delete-icon">🗑️</span></td>
//     `;

//     const qty = row.querySelector('.qty');
//     const tt = row.querySelector('.tt');
//     const eacht = row.querySelector('.eacht');
//     const deleteIcon = row.querySelector('.delete-icon');

//     const priceperitem = parseFloat(eacht.textContent);

//     const updateTotal = () => {
//         const quantity = parseInt(qty.value);
//         if (!isNaN(quantity) && quantity > 0) {
//             const total = quantity * priceperitem;
//             tt.textContent = total.toFixed(2);
//         } else {
//             tt.textContent = '0.00';
//         }
//         saveCart();  // Save changes to localStorage
//     };

//     qty.addEventListener('input', updateTotal);

//     // Event listener for deleting the row
//     deleteIcon.addEventListener('click', () => {
//         row.remove();
//         saveCart();  // Save changes to localStorage
//     });

//     cartTableBody.appendChild(row);
//     updateTotal();
// };

// // Event listener for adding a new item
// addItemForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const newItem = {
//         name: itemNameInput.value,
//         quantity: itemQtyInput.value,
//         price: parseFloat(itemPriceInput.value).toFixed(2)
//     };
//     addItemToTable(newItem);
//     saveItems();  // Save changes to localStorage
//     addItemForm.reset();
// });

// // Initial load
// loadItems();
// loadCart();


// });



document.addEventListener('DOMContentLoaded', () => {
    const orderTableBody = document.getElementById('orderTableBody');
    const addItemForm = document.getElementById('addItemForm');
    const itemNameInput = document.getElementById('itemName');
    const itemQtyInput = document.getElementById('itemQty');
    const itemPriceInput = document.getElementById('itemPrice');
    const cartTableBody = document.getElementById('cartTableBody');

    // Load saved items from localStorage
    const loadItems = () => {
        const savedItems = JSON.parse(localStorage.getItem('items')) || [];
        savedItems.forEach(item => addItemToTable(item));
    };

    // Load saved cart items from localStorage
    const loadCart = () => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        savedCart.forEach(item => addCartItemToTable(item));
    };

    // Save current items to localStorage
    const saveItems = () => {
        const items = [];
        document.querySelectorAll('.item').forEach(row => {
            const item = {
                name: row.querySelector('.item-name').textContent,
                quantity: row.querySelector('.qty').value,
                price: row.querySelector('.eacht').textContent
            };
            items.push(item);
        });
        localStorage.setItem('items', JSON.stringify(items));
    };

    // Save current cart items to localStorage
    const saveCart = () => {
        const cartItems = [];
        document.querySelectorAll('.cart-item').forEach(row => {
            const item = {
                name: row.querySelector('.item-name').textContent,
                quantity: row.querySelector('.qty').value,
                price: row.querySelector('.eacht').textContent
            };
            cartItems.push(item);
        });
        localStorage.setItem('cart', JSON.stringify(cartItems));
    };

    const addItemToTable = ({name, quantity, price}) => {
        const row = document.createElement('tr');
        row.classList.add('item');
        row.innerHTML = `
            <td class="item-name">${name}</td>
            <td><input type="number" class="qty" value="${quantity}" min="1"></td>
            <td>$<span class="eacht">${price}</span></td>
            <td>$<span class="tt">${(quantity * price).toFixed(2)}</span></td>
            <td><span class="delete-icon">🗑️</span></td>
        `;

        const qty = row.querySelector('.qty');
        const tt = row.querySelector('.tt');
        const eacht = row.querySelector('.eacht');
        const deleteIcon = row.querySelector('.delete-icon');

        const priceperitem = parseFloat(eacht.textContent);

        const updateTotal = () => {
            const quantity = parseInt(qty.value);
            if (!isNaN(quantity) && quantity > 0) {
                const total = quantity * priceperitem;
                tt.textContent = total.toFixed(2);
            } else {
                tt.textContent = '0.00';
            }
            saveItems();  // Save changes to localStorage
        };

        qty.addEventListener('input', updateTotal);

        // Event listener for deleting the row
        deleteIcon.addEventListener('click', () => {
            row.remove();
            saveItems();  // Save changes to localStorage
        });

        orderTableBody.appendChild(row);
        updateTotal();
    };

    const addCartItemToTable = ({name, quantity, price}) => {
        const row = document.createElement('tr');
        row.classList.add('cart-item');
        row.innerHTML = `
            <td class="item-name">${name}</td>
            <td><input type="number" class="qty" value="${quantity}" min="1"></td>
            <td>$<span class="eacht">${price}</span></td>
            <td>$<span class="tt">${(quantity * price).toFixed(2)}</span></td>
            <td><span class="delete-icon">🗑️</span></td>
        `;

        const qty = row.querySelector('.qty');
        const tt = row.querySelector('.tt');
        const eacht = row.querySelector('.eacht');
        const deleteIcon = row.querySelector('.delete-icon');

        const priceperitem = parseFloat(eacht.textContent);

        const updateTotal = () => {
            const quantity = parseInt(qty.value);
            if (!isNaN(quantity) && quantity > 0) {
                const total = quantity * priceperitem;
                tt.textContent = total.toFixed(2);
            } else {
                tt.textContent = '0.00';
            }
            saveCart();  // Save changes to localStorage
        };

        qty.addEventListener('input', updateTotal);

        // Event listener for deleting the row
        deleteIcon.addEventListener('click', () => {
            row.remove();
            saveCart();  // Save changes to localStorage
        });

        cartTableBody.appendChild(row);
        updateTotal();
    };

    // Event listener for adding a new item
    addItemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newItem = {
            name: itemNameInput.value,
            quantity: itemQtyInput.value,
            price: parseFloat(itemPriceInput.value).toFixed(2)
        };
        addItemToTable(newItem);
        saveItems();  // Save changes to localStorage
        addItemForm.reset();
    });

    // Initial load
    loadItems();
    loadCart();
});





