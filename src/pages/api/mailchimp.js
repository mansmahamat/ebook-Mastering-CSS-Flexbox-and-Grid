import mailchimp from '@mailchimp/mailchimp_marketing'

async function Send(req, res) {
  const requestMethod = req.method
  const { title } = JSON.parse(req.body)

  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: 'us21', // E.g. us1
  })

  try {
    const test = await mailchimp.lists.addListMember('b9d57aeef1', {
      email_address: title,
      status: 'subscribed',
    })

    return res
      .status(200)
      .json({ message: `You submitted the following data: ${title}` })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }

  // switch (requestMethod) {
  //   case 'POST':
  //     res
  //       .status(200)
  //       .json({ message: `You submitted the following data: ${title}` })

  //   // handle other HTTP methods
  //   default:
  //     res.status(200).json({ message: 'Welcome to API Routes!' })
  // }
}

export default Send
