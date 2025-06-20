document.addEventListener('DOMContentLoaded', function() {
    const addProductBtn = document.getElementById('add-product-btn');

    if (addProductBtn) {
        addProductBtn.addEventListener('click', function() {
            alert('Add Product button clicked!');
        });
    }

    function fetchProducts() {
        fetch('/api/products')
            .then(response => response.json())
            .then(products => {
                const productTableBody = document.getElementById('product-table-body');
                products.forEach(product => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td><img src="product1.jpg" alt="${product.name}"></td>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td>${product.quantity}</td>
                        <td>${product.status}</td>
                        <td>Edit</td>
                    `;
                    productTableBody.appendChild(row);
                });
            });
    }

    fetchProducts();

    function fetchCustomers() {
        fetch('/api/customers')
            .then(response => response.json())
            .then(customers => {
                const customerTableBody = document.getElementById('customer-table-body');
                customers.forEach(customer => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${customer.name}</td>
                        <td>${customer.email}</td>
                        <td>${customer.registrationDate}</td>
                        <td>${customer.orders}</td>
                        <td>View Profile</td>
                    `;
                    customerTableBody.appendChild(row);
                });
            });
    }

    fetchCustomers();
});
