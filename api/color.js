export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const jsCode = `
Hello,world!
  `;
  
  res.status(200).send(jsCode);
}
