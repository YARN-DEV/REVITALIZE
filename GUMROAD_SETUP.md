# GUMROAD INTEGRATION SETUP GUIDE

## Step 1: Create Your Gumroad Account
1. Go to [gumroad.com](https://gumroad.com) and sign up
2. Verify your email and complete your profile
3. Set up your payment information

## Step 2: Create Products in Gumroad
For each product in your wellness store, create a corresponding product in Gumroad:

### Products to Create:
1. **Yoga Mat Pro** - $49.99
   - Category: Physical Product
   - Description: Premium eco-friendly yoga mat with superior grip and cushioning

2. **Smart Fitness Watch** - $199.99
   - Category: Physical Product  
   - Description: Track your health metrics, workouts, and sleep patterns

3. **Aromatherapy Diffuser** - $39.99
   - Category: Physical Product
   - Description: Create a calming atmosphere with ultrasonic essential oil diffuser

4. **Massage Gun** - $149.99
   - Category: Physical Product
   - Description: Professional-grade percussion massager for deep tissue recovery

5. **Meditation Cushion** - $34.99
   - Category: Physical Product
   - Description: Comfortable meditation pillow for proper posture during practice

6. **Resistance Bands Set** - $29.99
   - Category: Physical Product
   - Description: Complete set of resistance bands for strength training

## Step 3: Get Your Product URLs
After creating each product in Gumroad, you'll get URLs like:
- `https://your-username.gumroad.com/l/yoga-mat-pro`
- `https://your-username.gumroad.com/l/smart-fitness-watch`
- etc.

## Step 4: Update Your Website
Replace the placeholder URLs in `script.js`:

1. Open `script.js`
2. Find the `products` array at the top
3. Replace `https://your-username.gumroad.com/l/product-name` with your actual Gumroad URLs
4. Update the store link in navigation: Replace `https://your-username.gumroad.com` with your actual Gumroad store URL

## Step 5: Configure Product Settings in Gumroad
For each product:
- Upload product images
- Set shipping rates (for physical products)
- Configure tax settings
- Set up inventory tracking if needed
- Enable/disable pay-what-you-want pricing

## Step 6: Test Everything
1. Save your changes
2. Refresh your local website
3. Click "Buy Now" buttons to test Gumroad integration
4. Complete a test purchase to ensure everything works

## Step 7: Deploy to Production
Once everything is working locally:
1. Commit your changes: `git add . && git commit -m "Add Gumroad integration"`
2. Push to GitHub: `git push origin copilot/create-revitalize-wellness-store`
3. Deploy to Vercel or your hosting platform

## Benefits of This Setup:
✅ Secure payment processing through Gumroad
✅ Automatic tax calculation
✅ Digital delivery for digital products
✅ Customer support handled by Gumroad
✅ Analytics and sales tracking
✅ Mobile-optimized checkout
✅ Multiple payment methods (PayPal, Stripe, etc.)

## Important Notes:
- Gumroad takes a small fee per transaction
- You can customize the checkout experience
- Consider enabling "Pay What You Want" for some products
- Use Gumroad's affiliate system to grow sales
- Monitor your analytics regularly

Your wellness store is now ready for real sales! 🎉