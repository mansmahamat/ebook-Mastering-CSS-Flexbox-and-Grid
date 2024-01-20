import { stripe } from 'lib/stripe'

async function Send(req, res) {
  const billingUrl = `${process.env.NEXT_PUBLIC_BASE_URL}`

  try {
    const stripeSession = await stripe.checkout.sessions.create({
      success_url: billingUrl,
      cancel_url: billingUrl,
      payment_method_types: ['card'],
      // allow_promotion_codes: true,
      mode: 'payment',
      billing_address_collection: 'auto',

      line_items: [
        {
          price: 'price_1OamJbKpLGqfwXYVuU5SOcFB',
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
            maximum: 50,
          },
          quantity: 1,
          //  price: "price_1OQA2eKpLGqfwXYV0vuQuuqy",
          //  price: "price_1O2CItKpLGqfwXYVAfTKultM",
        },
      ],
      //   metadata: {
      //     userId: session.user.id,
      //   },
    })

    return res.status(200).json({ url: stripeSession.url })
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
