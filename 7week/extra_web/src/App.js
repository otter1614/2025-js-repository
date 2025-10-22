
import React, { useState } from 'react';
import styled from 'styled-components';
import Board from './Board';
import RightSection from './RightSection';


const AppWrap = styled.div`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;

`;

const Header = styled.header`
  background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
  color: white;
  padding: 24px 16px;
  font-size: 1.5rem;
`;

const Main = styled.main`
  padding: 24px;
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: flex-start;
  background : gray;


`;

const LeftSection = styled.section`
  flex: 2;
`;

const RightSection = styled.section`
  flex: 1;
  background: #f5f6fa;
  padding: 24px;
  border-radius: 12px;
  min-width: 280px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;




const Footer = styled.footer`
  background: #222;
  color: #fff;
  padding: 16px 0;
  text-align: center;
  font-size: 1rem;
  margin-top: 40px;
`;


function App() {
  const [cart, setCart] = useState([]);

  // 상품을 장바구니에 추가
  const handleAddCart = (product) => {
    setCart(prev => {
      // 이미 담긴 상품이면 수량 증가, 아니면 새로 추가
      const found = prev.find(item => item.id === product.id);
      if (found) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  // 총합 계산
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <AppWrap>
      <Header>Web Shop</Header>
      <Main>
        <LeftSection>
          <Board onAddCart={handleAddCart} />
        </LeftSection>
        <RightSection cart={cart} total={total} />
      </Main>
      <Footer>ⓒ 2025 Web Shop. All rights reserved.</Footer>
    </AppWrap>
  );
}

export default App;
