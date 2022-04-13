import React, { useState } from 'react';

const introText = [
  "You can neither see nor hear any sign of the witch hunters. Maybe they're still in pursuit, hidden as they stalk your movements. Maybe you lost them in the trees. Maybe they gave up the chase, thinking that they'd properly neutralized you as a threat. That the forest would finish their work.",
  "They'd be idiots, in that case.",
  'They may have razed your arcane workshop, reduced your books to ash and your instruments to scrap. They may have demolished your minions and turned your human allies against you.',
  'But you have strength in your body, life in your blood, and knowledge in your mind.',
  'Perhaps they think you are alone.',
  'And you are.',
  "But with your talents, you're never alone for long.",
];

export default ({ cb }) => {
  const [progress, setProgress] = useState(1);
  return (
    <div>
      {introText.slice(0, progress).map((x, i) => (
        <div style={{ margin: '8px' }} key={i}>
          {x}
        </div>
      ))}
      <button
        className="textButton"
        onClick={() => {
          if (progress == introText.length) {
            cb();
          } else {
            setProgress(progress + 1);
          }
        }}
      >{`>>`}</button>
    </div>
  );
};
