module.exports = function reverse (n) {
  let result = '';
  n = String(n);
  
  if(n[0] === '-') n = n.slice(1, n.length);
  
  result = n.split('').reverse().join('');
  return Number(result);
};