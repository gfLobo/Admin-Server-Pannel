<h1 style="text-align: center;">
    Admin Server Pannel
</h1>

</br>


<div>

### 🚀Getting Started
Initialize the server:

<div>

    cd server;  npm install;  npm run dev

</div>

Running the client side:
<div>

    npm install;  npm run dev

</div>

</div>


</br></br></br>

<h2 style="text-align: center;">
   🚏 API Routes
</h2>

### GET
<div>

    http://localhost:3001/customers
    
</div>
<div>

    http://localhost:3001/employees
    
</div>
<div>

    http://localhost:3001/regions
    
</div>
<div>

    http://localhost:3001/Reset

</div>

---

### POST
<div>

<div>

>Request Body

    {
        setter:"",
        Name: "",
        Region:"",
        Phone:"",
        Role:""
    }

</div>

    http://localhost:3001/NCustomer

</div>

---

### DELETE
<div>

    http://localhost:3001/DCustomer/:setter


> CustomerID = `setter`.

</div>