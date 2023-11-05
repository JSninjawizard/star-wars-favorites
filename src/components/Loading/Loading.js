import React from 'react';

function Loading({ message = "Loading..." }) {
  return <p class="loading">{message}</p>;
}

export default Loading;