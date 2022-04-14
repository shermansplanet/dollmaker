import React from 'react';

export default ({ entity }) => {
  const barWidth = 200;
  const barHeight = 16;
  const br = '4px';

  return (
    <div className="card">
      <div>
        <b>{entity.name}</b>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        🩸
        <div style={{ width: '4px' }} />
        <div
          style={{
            width: '46px',
            height: barHeight + 'px',
            backgroundColor: 'black',
            fontSize: '10pt',
            textAlign: 'center',
            borderRadius: br + ' 0px 0px ' + br,
            border: '1px solid grey',
            borderRight: 'none',
          }}
        >
          100%
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
              width: barWidth / 2 + 'px',
              height: barHeight + 'px',
              backgroundColor: 'red',
              borderRadius: '0px ' + br + ' ' + br + ' 0px',
            }}
          />
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        🍖
        <div style={{ width: '4px' }} />
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
              width: barWidth / 3 + 'px',
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
            backgroundColor: 'black',
            fontSize: '10pt',
            textAlign: 'center',
            borderTop: '1px solid grey',
            borderBottom: '1px solid grey',
          }}
        >
          100%
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
              width: barWidth / 3 + 'px',
              height: barHeight + 'px',
              backgroundColor: 'green',
              borderRadius: '0px ' + br + ' ' + br + ' 0px',
            }}
          />
        </div>
        <div style={{ width: '4px' }} />
        🥦
      </div>
    </div>
  );
};
