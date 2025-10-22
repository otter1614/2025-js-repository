import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: flex-start;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 20px;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImg = styled.div`
  width: 120px;
  height: 120px;
  background: #e0e0e0;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: #aaa;
`;

const Name = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Price = styled.div`
  color: #2d3436;
  font-size: 1.05rem;
  margin-bottom: 16px;
`;

const BtnGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  background: #4b6cb7;
  color: #fff;
  transition: background 0.2s;
  &:hover {
    background: #182848;
  }
`;

const sampleProducts = [
  { id: 1, name: '무선 이어폰', price: 59000 },
  { id: 2, name: '스마트 워치', price: 129000 },
  { id: 3, name: 'USB 충전기', price: 12000 },
  { id: 4, name: '블루투스 스피커', price: 39000 },
];


export default class Board extends Component {
  handleBuyNow = (product) => {
    alert(`${product.name} 즉시 결제!`);
  }
  render() {
    const { onAddCart } = this.props;
    return (
      <Wrap>
        {sampleProducts.map(product => (
          <Card key={product.id}>
            <ProductImg>📦</ProductImg>
            <Name>{product.name}</Name>
            <Price>{product.price.toLocaleString()}원</Price>
            <BtnGroup>
              <Button onClick={() => onAddCart(product)}>장바구니 담기</Button>
              <Button onClick={() => this.handleBuyNow(product)} style={{background:'#ff7675'}}>즉시결제</Button>
            </BtnGroup>
          </Card>
        ))}
      </Wrap>
    )
  }
}
