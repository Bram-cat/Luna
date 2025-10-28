# How to Add Real Google Reviews to Your Website

I couldn't directly fetch the Google reviews from the URL you provided, but here's how you can easily add them yourself:

## Method 1: Manual Copy (Recommended)

1. **Go to your Google Business listing:**
   - Visit: https://www.google.com/maps/place/Luna+Eclectic+Emporium/@46.2349277,-63.1276206
   - Or search "Luna Eclectic Emporium" on Google Maps

2. **View all reviews:**
   - Scroll down to the "Reviews" section
   - Click "See all reviews"

3. **Copy review details:**
   - For each review you want to display, note:
     - Customer name (e.g., "Sarah M.")
     - Star rating (out of 5)
     - Review text
     - Date posted

4. **Update the Reviews component:**
   - Open: `src/components/Reviews.tsx`
   - Replace the `reviews` array (lines 7-30) with your real reviews:

```typescript
const reviews = [
  {
    name: "Customer Name from Google",
    rating: 5,  // 1-5 stars
    text: "The actual review text from Google...",
    date: "1 month ago"  // or whatever date format you prefer
  },
  // Add more reviews...
]
```

## Method 2: Using Google Place Reviews Widget (Recommended for Live Updates)

If you want to display reviews that automatically update:

1. **Get your Google Place ID:**
   - Go to: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
   - Search for "Luna Eclectic Emporium, Charlottetown"
   - Copy the Place ID

2. **Use Google Places API:**
   - You'll need a Google Cloud API key
   - Enable the Places API
   - Use the Place Details API to fetch reviews programmatically

3. **Alternative - Use a third-party widget:**
   - Try services like:
     - Elfsight (https://elfsight.com/google-reviews-widget/)
     - Trustmary
     - Reviews.io
   - These provide embed codes you can add to your website

## Current Reviews Section Location

The reviews are displayed in these files:
- **Home Page**: `src/app/page.tsx` - includes the Reviews component
- **Reviews Component**: `src/components/Reviews.tsx` - the actual reviews display

## Quick Update Instructions

1. Open `src/components/Reviews.tsx`
2. Find the `reviews` array starting at line 7
3. Replace with your real Google reviews
4. Save the file
5. The changes will appear immediately on your website

## Example Format

```typescript
const reviews = [
  {
    name: "John D.",
    rating: 5,
    text: "Amazing store! Found the perfect gift for my wife. The staff were incredibly helpful and friendly.",
    date: "2 weeks ago"
  },
  {
    name: "Mary S.",
    rating: 5,
    text: "Such a unique collection of items. I always find something special here!",
    date: "1 month ago"
  },
]
```

## Notes

- You currently have 4 placeholder reviews in the Reviews component
- Feel free to add more or fewer reviews as needed
- The component displays reviews in a 4-column grid on desktop
- Consider adding 4, 8, or 12 reviews for best visual layout
