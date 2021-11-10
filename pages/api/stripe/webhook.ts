import { buffer } from 'micro'
import nextConnect from 'next-connect'
import Stripe from 'stripe'

import { onDonateSuccedded } from '../../../src/utils/stripe/donation/on-donation-succedded'
import { onPostPaymentCreated } from '../../../src/utils/stripe/post-payment/on-post-payment-created'
import { onPostPaymentDeleted } from '../../../src/utils/stripe/post-payment/on-post-payment-deleted'
import { onPostPaymentInvoiceFailed } from '../../../src/utils/stripe/post-payment/on-post-payment-invoice-failed'
import { onPostPaymentInvoicePaid } from '../../../src/utils/stripe/post-payment/on-post-payment-invoice-paid'
import { onUserSubscriptionCreated } from '../../../src/utils/stripe/user-subscription/on-user-subscription-created'
import { onUserSubscriptionDeleted } from '../../../src/utils/stripe/user-subscription/on-user-subscription-deleted'
import { onUserSubscriptionInvoiceFailed } from '../../../src/utils/stripe/user-subscription/on-user-subscription-invoice-failed'
import { onUserSubscriptionInvoicePaid } from '../../../src/utils/stripe/user-subscription/on-user-subscription-invoice-paid'

import type { NextApiRequest, NextApiResponse, PageConfig } from 'next'

const stripe = new Stripe(process.env['STRIPE_SECRET_KEY']!, {
  apiVersion: '2020-08-27',
})

// POST /api/stripe/webhook
const handler = nextConnect<NextApiRequest, NextApiResponse>().post(
  async (req, res) => {
    const payload = await buffer(req)
    const sig = req.headers['stripe-signature']!

    let event
    try {
      event = stripe.webhooks.constructEvent(
        payload,
        sig,
        process.env['STRIPE_WEBHOOK_SECRET']!
      )
    } catch (e) {
      res.status(400).send(`Webhook Error: ${(e as Error)?.message}`)
      return
    }

    const responses: boolean[] = []
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        if (session.payment_status === 'paid') {
          responses.push(await onDonateSuccedded(session))
          responses.push(await onPostPaymentCreated(session))
          responses.push(await onUserSubscriptionCreated(session))
        }

        break
      }

      case 'checkout.session.async_payment_succeeded': {
        const session = event.data.object as Stripe.Checkout.Session
        responses.push(await onDonateSuccedded(session))
        responses.push(await onPostPaymentCreated(session))
        responses.push(await onUserSubscriptionCreated(session))

        break
      }

      case 'invoice.paid': {
        const invoice = event.data.object as Stripe.Invoice
        responses.push(await onPostPaymentInvoicePaid(invoice))
        responses.push(await onUserSubscriptionInvoicePaid(invoice))

        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        responses.push(await onPostPaymentInvoiceFailed(invoice))
        responses.push(await onUserSubscriptionInvoiceFailed(invoice))

        break
      }
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        responses.push(await onPostPaymentDeleted(subscription))
        responses.push(await onUserSubscriptionDeleted(subscription))

        break
      }
    }

    if (!responses.find((r) => r === true)) {
      res
        .status(400)
        .send('Webhook Error: Unknown event or unsupported handler')
      return
    }

    res.status(204).end()
  }
)

export default handler

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
}
