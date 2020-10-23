import React from 'react';
import '../assets/styles/components/Product.scss';
import CircleProgress from '../components/CircleProgress'
import iconX from '../assets/images/x.svg';
import iconPencil from '../assets/images/pencil.svg';

const Product = (props) => {

	function formatMoney(value){
		return '$' + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}

	return (
		<div className="product">
			<div id="titleColumn2Product">
				<h1><span>Product ID 675677865</span></h1>
			</div>
			<div id="titlesColumn2ProductTable">
			{
				props.titlesTable.map(title => (
					<div className="title" key={title}>{title}</div>
				))
			}
			</div>
			{props.inversors.length > 0 &&
				<div id="inversors">
					{
						props.inversors.map(inversor => 
							<div className="inversor" key={inversor.name}>
								<div className="col">
									{inversor.name}
								</div>
								<div className="col align-right">
									{formatMoney(inversor.sold)}
								</div>
								<div className="col">
									<CircleProgress
										percent={(inversor.sold * 100) / 40000}
										color="#00CFC9"
									/>
								</div>
								<div className="col align-right">
									{formatMoney(40000 - inversor.sold)}
								</div>
								<div className="col">
									<CircleProgress
										percent={((40000 - inversor.sold) * 100) / 40000}
										color="#FFAD00"
									/>
								</div>
								<div className="col">
									<div className="actions">
										<img src={iconX} alt="iconUser" />
										<img src={iconPencil} alt="iconUser" />
									</div>
								</div>
							</div>
						)
					}
				</div>
			}

		</div>
	)
};

export default Product;