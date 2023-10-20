import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProductUpdate = () => {
    document.title = 'Update';
    
    const { _id: userId, name: userName, image: userImage, brand: userBrand, type: userType, price: userPrice, rating: userRating } = useLoaderData();

    const navigate = useNavigate();

    const handleUpdate = e => {
        e.preventDefault();
        Swal.fire({
            title: `Are you sure want to update ${userName}?`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const form = e.target;

                const name = form.name.value;
                const image = form.image.value;
                const brand = form.brand.value;
                const type = form.type.value;
                const price = form.price.value;
                const rating = form.rating.value;

                const updatedProduct = { name, image, brand, type, price, rating };

                fetch(`http://localhost:5000/products-id/${userId}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedProduct)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.matchedCount > 0) {
                            Swal.fire(
                                'Updated!',
                                `${userName} has been updated successfully.`,
                                'success'
                            )
                            navigate(`/product-details/${userId}`)
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className="pt-20 pb-10 flex flex-col justify-center items-center">
                <form onSubmit={handleUpdate} className="xl:p-14 lg:p-12 md:p-10 p-8 rounded text-sm md:text-base max-w-[90%] mx-auto">
                    <h2 className="font-bold text-3xl md:text-4xl mb-10">Update: <span className="text-primary">{userName}</span></h2>
                    <input className="outline-none border-b-2 border-[#C5C5C5] font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px] mb-8" type="text" name="name" id="name" placeholder="Name" defaultValue={userName} required />
                    <br />

                    <input className="outline-none border-b-2 border-[#C5C5C5] font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px] mb-8" type="text" name="image" id="image" placeholder="Image URL" defaultValue={userImage} required />
                    <br />

                    <select className="outline-none border-b-2 border-[#C5C5C5] font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px] mb-8 bg-transparent cursor-pointer" defaultValue={userBrand} name="brand" id="brand">
                        <option disabled>Select a Brand</option>
                        <option>Ford</option>
                        <option>Toyota</option>
                        <option>BMW</option>
                        <option>Mercedes-Benz</option>
                        <option>Volkswagen</option>
                        <option>Honda</option>
                    </select>
                    <br />

                    <select className="outline-none border-b-2 border-[#C5C5C5] font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px] mb-8 bg-transparent cursor-pointer" defaultValue={userType} name="type" id="type">
                        <option disabled>Select a Type</option>
                        <option>Sedan</option>
                        <option>SUV</option>
                        <option>Convertible</option>
                        <option>Sports</option>
                        <option>Electric</option>
                        <option>Off-Road</option>
                        <option>Limousine</option>
                    </select>
                    <br />

                    <input className="outline-none border-b-2 border-[#C5C5C5] font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px] mb-8" type="text" name="price" id="price" placeholder="Price (USD)" defaultValue={userPrice} required />
                    <br />

                    <input className="outline-none border-b-2 border-[#C5C5C5] font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px] mb-8" type="text" name="rating" id="rating" placeholder="Rating" defaultValue={userRating} required />
                    <br />

                    <button className='px-5 py-2 bg-primary rounded text-white active:scale-95 transition-transform w-full font-medium mb-3'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default ProductUpdate;