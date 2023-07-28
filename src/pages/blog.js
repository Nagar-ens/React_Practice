import React, { useState } from 'react';

const Blog = () => {
  // Set the initial background color to white
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [buttonText, setButtonText] = useState('Dark Mode');

  // Function to toggle the background color and update button text
  const toggleBackgroundColor = () => {
    // If the current background color is white, set it to black; otherwise, set it to white
    setBackgroundColor((prevColor) => (prevColor === 'white' ? 'black' : 'white'));

    // Update button text based on the new background color
    setButtonText((prevText) => (backgroundColor === 'white' ? 'Dark Mode' : 'Light Mode'));
  };

  return (
    <>
      {/* Button to toggle the background color */}
      <button type="button" className="btn btn-light" onClick={toggleBackgroundColor}>
        {buttonText}
      </button>

      {/* Content with dynamic background color */}
      <div style={{ backgroundColor, minHeight: '100vh', color: backgroundColor === 'white' ? 'black' : 'white' }}>
        <h1>Hello, this is my blog!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ullamcorper erat. Proin
          rutrum vel odio a luctus. Donec facilisis faucibus elit, nec faucibus ipsum consequat eu.
        </p>
      </div>
    </>
  );
};

export default Blog;
