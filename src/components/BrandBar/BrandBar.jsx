import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Card } from 'react-bootstrap';

import { Context } from 'index';

export const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <div className="d-flex">
      {device.brands.map(brand => (
        <Card
          style={{ cursor: 'pointer' }}
          border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
          onClick={() => device.setSelectedBrand(brand)}
          key={brand.id}
          className="p-3"
        >
          {brand.name}
        </Card>
      ))}
    </div>
  );
});
