(function(){})

import React from 'react';
import styled from 'styled-components';

const CartList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0 0 16px 0;
`;

const CartItem = styled.li`
	background: #fff;
	border-radius: 8px;
	margin-bottom: 10px;
	padding: 10px 14px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0 1px 4px rgba(0,0,0,0.04);
`;

const ItemName = styled.span`
	font-weight: 500;
`;

const ItemQty = styled.span`
	color: #636e72;
	margin: 0 8px;
`;

const Total = styled.div`
	font-size: 1.1rem;
	font-weight: bold;
	margin-top: 16px;
	text-align: right;
`;

function RightSection({ cart, total }) {
	return (
		<div>
			<h2>장바구니</h2>
			{cart.length === 0 ? (
				<div style={{marginBottom: '24px', minHeight: '80px', background: '#fff', borderRadius: '8px', padding: '12px', boxShadow: '0 1px 4px rgba(0,0,0,0.04)'}}>장바구니가 비어 있습니다.</div>
			) : (
				<>
					<CartList>
						{cart.map(item => (
							<CartItem key={item.id}>
								<ItemName>{item.name}</ItemName>
								<ItemQty>x {item.qty}</ItemQty>
								<span>{(item.price * item.qty).toLocaleString()}원</span>
							</CartItem>
						))}
					</CartList>
					<Total>총합: {total.toLocaleString()}원</Total>
				</>
			)}
			<h3 style={{marginTop:'32px'}}>내 정보</h3>
			<ul style={{textAlign: 'left', paddingLeft: '20px'}}>
				<li>이름: 홍길동</li>
				<li>포인트: 10,000P</li>
			</ul>
		</div>
	);
}

export default RightSection;
