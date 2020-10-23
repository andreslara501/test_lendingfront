import React, {useState, useEffect} from 'react';
import '../../assets/styles/views/AdvanceForSyndication/AdvanceForSyndication.scss';

import ProductItem from '../../components/ProductItem'
import Product from '../../components/Product'

import iconSave from '../../assets/images/saveButton.svg'
import iconClose from '../../assets/images/xButton.svg'
import iconPlus from '../../assets/images/plusButton.svg'

import loading from '../../assets/images/loading.gif'

const AdvanceForSyndication = () => {
	const titlesTable = ['Inversor name', 'Sold', 'Puchased', 'Left amount', '%Remaning'];
	const [products, setproducts] = useState([]);
	const [productSelected, setProductSelected] = useState(0);
	const [inversors, setInversorsSelected] = useState([]);

	useEffect(() => {
		fetch('http://demo8670934.mockable.io/products')
			.then(response => response.json())
			.then(data => setproducts(data))
	}, [])

	function selectProduct (product) {
		setProductSelected(product);
		productSelectedInversors(product);
	}

	function productSelectedInversors(product_id) {
		const found = products.find(product => product.id === product_id);
		setInversorsSelected(found.inversors)
	}

	function sumInversors(product_id) {
		let suma = 0;
		const found = products.find(product => product.id === product_id);
		found.inversors.forEach (function(inversor){
			suma += inversor.sold;
		});
		return '$' + suma.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	}

	return (
		<div id="advanceForSyndication">
			<div id="advanceForSyndication__contentTitle">
				<div id="advanceForSyndication__title" className="content">
					<h1>Advance for syndication</h1>
				</div>
			</div>

			<div id="advanceForSyndication__panelContent"  className="content">
				<div id="plusButton">
					<img src={iconPlus} alt="iconPlus"/>
				</div>
				<div id="advanceForSyndication__panel" className="content">
					<div id="advanceForSyndication__panelColumn1">
						<h2>Select a product to syndicate</h2>
						<ul>
							{products.length > 0 &&
								products.map(product =>
									<ProductItem
										product={product}
										key={product.id}
										selectProduct={selectProduct}
										productSelected={productSelected}
										sumInversors={sumInversors(product.id)}
									/>
								)
							}
							{products.length === 0 &&
								<div id="loading">
									<img src={loading} alt="Cargando"/>
									<span>Cargando...</span>
								</div>
							}
						</ul>
					</div>
					<div id="advanceForSyndication__panelColumn2">
						{inversors.length > 0 &&
							<Product
								inversors={inversors}
								titlesTable={titlesTable}
							/>
						}
					</div>
				</div>
				<div id="footer" className="content">
					<div id="advanceForSyndication__footerColumn1">
						<div id="buttons">
							<button className="close">
								<img src={iconClose} alt="close"/>
								Close
							</button>
							<button className="sell">
								<img src={iconSave} alt="sell"/>
								Sell
							</button>
						</div>
					</div>
					<div id="advanceForSyndication__footerColumn2">
						Remaning amount $50.000 of $92.192
						<div id="bar">
							<div id="percent"></div>
						</div>
						<div id="percents">
							<div id="start">0%</div>
							<div id="end">100%</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AdvanceForSyndication;