import React from 'react';

export default ({ entity }) => {
  const barWidth = 200;
  const barHeight = 16;
  const br = '4px';

  return (
    <div className="card">
      <div style={{ margin: '4px 4px', fontSize: '14pt' }}>
        <b>{entity.name}</b>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', margin: '8px 4px' }}>
        🩸
        <div style={{ width: '6px' }} />
        <div
          style={{
            width: '45px',
            height: barHeight + 'px',
            backgroundColor: 'var(--bg)',
            fontSize: '10pt',
            textAlign: 'center',
            borderRadius: br + ' 0px 0px ' + br,
            border: '1px solid grey',
            borderRight: 'none',
          }}
        >
          {Math.round(entity.health)}%
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: barWidth + 'px',
              height: barHeight + 'px',
              outline: '1px solid red',
              borderRadius: '0px ' + br + ' ' + br + ' 0px',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: (barWidth * entity.health) / 100 + 'px',
              height: barHeight + 'px',
              backgroundColor: 'red',
              borderRadius: '0px ' + br + ' ' + br + ' 0px',
            }}
          />
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', margin: '8px 4px' }}>
        🍖
        <div style={{ width: '8px' }} />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: barWidth / 2 + 'px',
              height: barHeight + 'px',
              outline: '1px solid #a42',
              borderRadius: br + ' 0px 0px ' + br,
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: (barWidth * entity.meat) / 200 + 'px',
              height: barHeight + 'px',
              backgroundColor: '#a42',
              borderRadius: br + ' 0px 0px ' + br,
              right: 0,
            }}
          />
        </div>
        <div
          style={{
            width: '46px',
            height: barHeight + 'px',
            backgroundColor: 'var(--bg)',
            fontSize: '10pt',
            textAlign: 'center',
            borderTop: '1px solid grey',
            borderBottom: '1px solid grey',
          }}
        >
          {Math.round((entity.meat + entity.veg) / 2)}%
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: barWidth / 2 + 'px',
              height: barHeight + 'px',
              outline: '1px solid green',
              borderRadius: '0px ' + br + ' ' + br + ' 0px',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: (barWidth * entity.veg) / 200 + 'px',
              height: barHeight + 'px',
              backgroundColor: 'green',
              borderRadius: '0px ' + br + ' ' + br + ' 0px',
            }}
          />
        </div>
        <div style={{ width: '8px' }} />
        🥦
      </div>
      <div style={{ display: 'flex', alignItems: 'center', margin: '8px 4px' }}>
        <button
          onClick={() => {
            entity.meat = 100;
            entity.veg = 100;
          }}
        >
          Eat
        </button>
      </div>
    </div>
  );
};
