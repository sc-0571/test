import React from 'react';
import { Home } from '@mui/icons-material';

const IconAsImage = () => {
  return (
    <div>
      {/* 将图标当作图片 */}
      <Home style={{ width: '100px', height: '100px', fill: 'blue' }} />
    </div>
  );
};

export default IconAsImage;
