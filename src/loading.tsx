import { Skeleton, Spin } from 'antd';
import React from 'react';

const Loading: React.FC = () => (
  // <Skeleton style={{ margin: '24px 40px', height: '60vh' }} active />
  <div style={{ paddingTop: 100, textAlign: 'center' }}>
    <Spin size="large" /> loading...
  </div>
);

export default Loading;
