import React from 'react';

import '../assets/styles/components/ProductItem.scss';

const ProductItem = (props) => {
	function selectProduct(product) {
		props.selectProduct(product)
	}
	return (
		<li className={`productItem ${props.productSelected === props.product.id ? "active" : ""}`} onClick={() => {selectProduct(props.product.id)}}>
			<div className="productItemRow">
				<div className="column1">
					<h3>Product ID</h3>
					<div className="productId">{props.product.id}</div>
				</div>
				<div className="column2">
					<h3>Advance</h3>
					<div className="productDate">{props.product.date}</div>
				</div>
			</div>
			<div className="productValue">{props.sumInversors}</div>
		</li>
	)
};

export default ProductItem;