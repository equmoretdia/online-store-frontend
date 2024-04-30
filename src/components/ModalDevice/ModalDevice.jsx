import React, { useContext, useState, useEffect } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

import { getAllTypes, getAllBrands, createDevice } from 'http/deviceAPI';
import { Context } from 'index';

export const ModalDevice = observer(({ show, onHide }) => {
  const { device } = useContext(Context);

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  // const [brand, setBrand] = useState(null);
  // const [type, setType] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getAllTypes().then(data => device.setTypes(data));
    getAllBrands().then(data => device.setBrands(data));
  }, [device]);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = number => {
    setInfo(info.filter(i => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => (i.number === number ? { ...i, [key]: value } : i)));
  };

  const selectFile = e => {
    // console.log(e.target.files);
    setFile(e.target.files[0]);
  };

  const addDevice = () => {
    // console.log(info);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('brandId', device.selectedBrand.id);
    formData.append('typeId', device.selectedType.id);
    formData.append('img', file);
    formData.append('info', JSON.stringify(info));
    createDevice(formData).then(data => onHide());
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new Device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Dropdown className="mt-2 mb-2">
          <Dropdown.Toggle>
            {device.selectedType.name || 'Choose type'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {device.types.map(type => (
              <Dropdown.Item
                key={type.id}
                onClick={() => device.setSelectedType(type)}
              >
                {type.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle>
            {device.selectedBrand.name || 'Choose brand'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {device.brands.map(brand => (
              <Dropdown.Item
                key={brand.id}
                onClick={() => device.setSelectedBrand(brand)}
              >
                {brand.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Form>
          <Form.Control
            value={name}
            className="mt-2"
            placeholder={'Enter the name of new Device'}
            onChange={e => setName(e.target.value)}
          />
          <Form.Control
            value={price}
            className="mt-2"
            placeholder={'Enter the price of new Device'}
            // type="number"
            onChange={e => setPrice(Number(e.target.value))}
          />
          <Form.Control className="mt-2" type="file" onChange={selectFile} />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Add new property
          </Button>
          {info.map(i => (
            <Row className="mt-2" key={i.number}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={e => changeInfo('title', e.target.value, i.number)}
                  placeholder={'Enter the name of new property'}
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={e =>
                    changeInfo('description', e.target.value, i.number)
                  }
                  placeholder={'Enter the description of new property'}
                />
              </Col>
              <Col md={4}>
                <Button
                  variant="outline-danger"
                  onClick={() => removeInfo(i.number)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addDevice}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
});
