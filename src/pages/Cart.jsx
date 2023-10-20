import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { BsFillTrash3Fill } from "react-icons/bs";
import Swal from "sweetalert2";

const Cart = () => {
    document.title = 'My Cart';
    
    const { currentUser } = useContext(AuthContext);
    const [cart, setCart] = useState([]);
    const allProducts = useLoaderData();

    useEffect(() => {
        if (currentUser) {
            fetch(`http://localhost:5000/users/${currentUser.email}`)
                .then(res => res.json())
                .then(data => {
                    setCart(allProducts.filter(element => data.cart.includes(element._id)));
                })
        }
    }, [currentUser, allProducts])

    const handleRemove = productId => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                if (currentUser?.email) {
                    fetch(`http://localhost:5000/users/${currentUser.email}`)
                        .then(res => res.json())
                        .then(data => {
                            const user = data;
                            console.log(user);
                            user.cart = user.cart.filter(id => id !== productId)

                            fetch(`http://localhost:5000/users/${currentUser.email}`, {
                                method: 'PUT',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(user)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.modifiedCount > 0) {
                                        Swal.fire(
                                            'Deleted!',
                                            'Your file has been deleted.',
                                            'success'
                                        )
                                        setCart(cart.filter(product => product._id !== productId));
                                    }
                                })
                        });
                }
            }
        })
    }

    return (
        <>
            {
                cart.length !== 0
                    ?
                    <div className="mt-20 md:px-10 px-5">
                        <h2 className="md:text-4xl text-3xl font-bold text-center text-black mb-10 select-none">My Cart</h2>
                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                            {
                                cart.map(product =>
                                    <div key={product._id} className="card w-full bg-base-100 shadow-xl">
                                        <figure><img className="w-full h-48 object-cover" src={product.image} alt="" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                {product.name}
                                                <div className="bg-primary px-2 py-1 text-white text-xs rounded-xl">{product.type}</div>
                                            </h2>
                                            <p className="mt-2 text-dark2"><span className="font-bold text-dark1">Price:</span> ${product.price}</p>
                                            <div onClick={() => handleRemove(product._id)} className="card-actions justify-end mt-2">
                                                <button className="px-5 py-2 bg-primary text-white w-full rounded text-lg font-medium flex items-center justify-center gap-2 active:scale-95 transition-transform"><BsFillTrash3Fill />Remove</button>
                                            </div>
                                        </div>
                                    </div>)
                            }
                        </div>
                    </div>
                    :
                    <div className="mt-28 min-h-[50vh] flex flex-col items-center justify-center">
                        <h2 className="md:text-4xl text-3xl font-bold text-center text-black mb-5">Your Cart Is Empty</h2>
                    </div>
            }
        </>

    );
};

export default Cart;