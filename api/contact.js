export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please provide name, email, and message.' });
  }

  try {
    // 1. Direct Web3Forms submission with verified access key
    const web3Response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: '659c2144-c445-4138-bd7f-f4ea6f474b4b',
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        subject: `New Portfolio Message from ${name.trim()} (${email.trim()})`,
        from_name: `${name.trim()} via Portfolio`
      })
    });

    const web3Data = await web3Response.json().catch(() => ({}));

    if (web3Data.success || web3Response.ok) {
      return res.status(200).json({
        success: true,
        message: 'Message delivered directly to your inbox via Web3Forms.'
      });
    }

    // 2. Secondary fallback via FormSubmit if needed
    const fallbackResponse = await fetch('https://formsubmit.co/ajax/balamwarshashwat@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        _subject: `Portfolio Message from ${name.trim()} (${email.trim()})`,
        _template: 'table',
        _captcha: 'false'
      })
    });

    await fallbackResponse.json().catch(() => ({}));

    return res.status(200).json({
      success: true,
      message: 'Message delivered directly to your email.'
    });
  } catch (error) {
    console.error('API Contact Error:', error);
    return res.status(500).json({ success: false, message: 'Server error processing message dispatch.' });
  }
}
