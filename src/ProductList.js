import Product from './Product';
export default function ProductList(props) {
    console.log("ProductList Component Props is ", props);
    return <div>
        <div>Product List Functional Component</div>
        <table border="1">
                <thead>
                    <tr>
                        <th>
                            Product Name
                        </th>
                        <th>
                            Product Description
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Rating
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.productName}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.starRating}</td>
                            </tr>
                        )
                        )
                    }

                </tbody>
            </table>
    </div>
}