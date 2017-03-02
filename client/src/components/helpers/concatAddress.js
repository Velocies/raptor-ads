const concatAddress = data =>
  `${data.address || data.companyAddress || ''}, ${data.city || data.companyCity || ''}, ${data .state || data.companyState || ''}, ${data.zip || data.companyZip || ''}`;


export default concatAddress;
