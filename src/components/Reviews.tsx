import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const reviews = [
  {
    name: "Steven Buell",
    rating: 5,
    text: "Great price on cigarettes many or things there for your everyday convenience and very friendly staff providing great service.",
    date: "a week ago",
    badge: "Local Guide"
  },
  {
    name: "Laura Clements",
    rating: 5,
    text: "Always super friendly staff and stocked with what I need.",
    date: "a month ago",
    badge: "Local Guide"
  },
  {
    name: "Erin McNally",
    rating: 5,
    text: "Always great service. John the owner is one of the nicest guys I know and prices are cheaper in there then most places. Great selection of smoking products like pipes and bongs and grinders. I always go out of my way to go there when buying my smokes because he always knows what I need and and u can't beat the price.",
    date: "3 years ago",
    badge: "Local Guide"
  },
  {
    name: "Crysta M",
    rating: 5,
    text: "Everytime I go in, I leave with a smile",
    date: "3 weeks ago",
    badge: "Local Guide"
  },
  {
    name: "Josh Cormier",
    rating: 5,
    text: "Amazing service, best prices in town. Amidst the hundreds of customers they must interact with, they always know my purchase and have it ready before I can ask for it. Wonderful owners and staff.",
    date: "5 years ago",
    badge: "Local Guide"
  },
  {
    name: "Brechan",
    rating: 5,
    text: "Family run business, nice people. Very solid selection of tobacco/vape products that they do a great job keeping stocked.",
    date: "a year ago",
    badge: ""
  }
]

export default function Reviews() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  className="w-7 h-7 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <svg
                className="w-7 h-7 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <defs>
                  <linearGradient id="half-star">
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <path fill="url(#half-star)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                <path fill="none" stroke="currentColor" strokeWidth="0.5" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">4.9</span>
          </div>
          <p className="text-gray-400">Based on 113 Google Reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-gray-950 border-gray-800 hover:border-gray-600 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    {review.badge && (
                      <span className="text-xs text-gray-500 italic">{review.badge}</span>
                    )}
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <CardDescription className="text-xs text-gray-500">
                  {review.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
