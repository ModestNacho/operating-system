import React, { useState } from 'react';
import Draggable from 'react-draggable';

function StickyNote() {
  const [text, setText] = useState('');

  return (
    <Draggable>
      <div className="w-60 h-60 bg-yellow-200 text-black p-4 rounded-md shadow-lg cursor-move">
        <textarea
          className="w-full h-full bg-transparent resize-none outline-none text-sm"
          placeholder="Type your note here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </Draggable>
  );
}

export default StickyNote;