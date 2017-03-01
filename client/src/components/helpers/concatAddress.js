const concatAddress = data =>
  `${data.address || ''}, ${data.city || ''}, ${data.state || ''}, ${data.zip || ''}`;


export default concatAddress;
