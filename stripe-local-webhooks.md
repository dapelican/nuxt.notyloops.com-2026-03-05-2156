# Install stripe cli

```
curl -fsSL https://cli.stripe.com/install.sh | sh
```

ou 

```
npm i -g @stripe/cli@latest

```

# Connect to stripe

```
stripe login
```

# make stripe listen

```
stripe listen \
  --events checkout.session.completed,checkout.session.async_payment_succeeded,customer.subscription.updated,customer.subscription.deleted,invoice.paid,invoice.payment_failed \
  --forward-to localhost:3345/webhooks/stripe
```

# update the environment variable STRIPE_ENDPOINT_SECRET

# test with fake cards

https://docs.stripe.com/testing

4242424242424242
5555555555554444
