import Swal from 'sweetalert2';

const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const newProduct = { name, image, brand, type, price, rating, description }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: `${name} successfully added`,
                    })
                    form.reset();
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Something went wrong!',
                        text: `Please try again later`,
                    })
                }
            })
    }

    return (
        <div className="pt-20 pb-10 flex flex-col justify-center items-center">
            <form onSubmit={handleAddProduct} className="xl:p-14 lg:p-12 md:p-10 p-8 rounded text-sm md:text-base max-w-[90%] mx-auto">
                <h2 className="font-bold text-3xl md:text-4xl mb-10">Add a product</h2>
                <input className="outline-none border-b-2 border-[#C5C5C5] font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px] mb-8" type="text" name="name" id="name" placeholder="Name" required />
                <br />

                <input className="outline-none border-b-2 border-[#C5C5C5] font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px] mb-8" type="text" name="image" id="image" placeholder="Image URL" required />
                <br />

                <select className="outline-none border-b-2 border-[#C5C5C5] font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px] mb-8 bg-transparent cursor-pointer" defaultValue={"Select a Brand"} name="brand" id="brand">
                    <option disabled>Select a Brand</option>
                    <option>Ford</option>
                    <option>Toyota</option>
                    <option>BMW</option>
                    <option>Mercedes-Benz</option>
                    <option>Volkswagen</option>
                    <option>Honda</option>
                </select>
                <br />

                <select className="outline-none border-b-2 border-[#C5C5C5] font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px] mb-8 bg-transparent cursor-pointer" defaultValue={"Select a Type"} name="type" id="type">
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

                <input className="outline-none border-b-2 border-[#C5C5C5] font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px] mb-8" type="text" name="price" id="price" placeholder="Price (USD)" required />
                <br />

                <input className="outline-none border-b-2 border-[#C5C5C5] font-medium placeholder:text-dark2 placeholder:font-medium py-1 max-w-full w-[400px] mb-8" type="text" name="rating" id="rating" placeholder="Rating" required />
                <br />

                <div className="border-2 border-[#C5C5C5] font-medium py-1 max-w-full w-[400px] mb-8">
                    <textarea className="outline-none px-2 py-1 w-full resize-none placeholder:text-dark2 placeholder:font-medium" name="description" id="description" cols="30" rows="10" placeholder="Short Description" required></textarea>
                </div>

                <button className='px-5 py-2 bg-primary rounded text-white active:scale-95 transition-transform w-full font-medium mb-3'>Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;