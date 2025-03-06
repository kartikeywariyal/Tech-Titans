const Cart=({cart=[]})=>(
    <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
        {cart.length===0?<p>Your cart is empty.</p>:cart.map((item,index)=>(

            <div key={index} className="p-4 bg-gray-100 shadow-md rounded-md my-2">
                <h3 className="text-lg font-semibold">(item.name)</h3>
                <p>$(item.price)</p>
            </div>
        ))}
</div>
)

export default Cart;
