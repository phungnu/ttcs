import { Row, Col, Image, Input, Button, Modal } from "antd";
import "./ProductInCart.css";
import { useState } from 'react'

const ProductInCart = ({name, quantity, price, url, amount, changeTotal}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [number, setNumber] = useState(amount);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handlePlus = () => {
    setNumber(number+1)
    changeTotal(total => total + price)
  };

  const handleMinus = () => {
    setNumber(number-1)
    changeTotal(total => total - price)
  };

  return (
    <div className="name-img">
      <div className="border-top"></div>
      <Row className="cart-product">
        <Col span={7}>
          <Row>
            <Image
              className="shoe-img"
              width={100}
              src={url}
              preview={false}
            />
            <div className="name-quantity">
              <p className="shoe-name">{name}</p>
              <p className="shoe-quantity">Quantity: {quantity}</p>
            </div>
          </Row>
        </Col>
        <Col className="input-number">
          <Image className="minus" src="/image/minus.png" width={10} preview={false} onClick={handleMinus}/>
          <Input className="input-quantity" value={number} style={{width: "50px", height: "30px"}}/>
          <Image className="plus" src="/image/plus.png" width={10} preview={false} onClick={handlePlus}/>
        </Col>  
        <Col className="price">$ {price}</Col>  
        <Col className="price-total">$ {price*number}</Col>  
        <Col>
          <Image 
            className="cancel"
            style={{marginLeft: -30, marginTop: 10}} 
            src='/image/cancel.png' width={25} 
            preview={false} 
            onClick={showModal}
          />   
          <Modal 
            title="Bạn có chắc chắn muốn xóa không" 
            open={isModalOpen} 
            onOk={handleOk} 
            onCancel={handleCancel}>
          </Modal>
        </Col>  
      </Row>
      <div className="border-bottom"></div>
    </div>
  );
};

export default ProductInCart;