import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const reviews = [
  {
    name: "Katerina Espinosa",
    rating: 5,
    text: "When you think of the kindness of the locals in PEI, this place is an excellent example and firsthand experience.",
    date: "a month ago",
    badge: "Local Guide"
  },
  {
    name: "Sylvia Perry",
    rating: 4,
    text: "Interesting place to find things you probably don't need but want. You could describe it as eclectic. I found some interesting souvenirs for my family. It's connected to a mall. Parking is easy in Charlottetown so not an issue. Friendly helpful staff.",
    date: "2 months ago",
    badge: "Local Guide"
  },
  {
    name: "Joanne Argue",
    rating: 5,
    text: "I love stopping in to this store. I was looking for a new purse and knew I would find something fun and beautiful at Luna. And my daughter had a great time picking out a few pins.",
    date: "2 years ago",
    badge: "Local Guide"
  },
  {
    name: "Lindsey Ross",
    rating: 5,
    text: "Great store. Always super friendly staff there to greet and help you. I like the variety of items they carry - some local and some fun items brought in from elsewhere.",
    date: "5 years ago",
    badge: "Local Guide"
  },
  {
    name: "Marlowe Power-Lockman",
    rating: 5,
    text: "I was buying an ornament of a mouse holding a rainbow, and received a compliment from an employee on my purchase. I thanked them, saying that I already had one and they would be wives, to which they responded that they totally agreed.",
    date: "3 years ago",
    badge: ""
  },
  {
    name: "Katharine Moore",
    rating: 5,
    text: "Awesome shop. The ultimate skirt, made of recycled saris. Wear at least 21 different ways. Super friendly staff, dogs allowed, bowl of water for them. Definitely worth stopping in!",
    date: "6 years ago",
    badge: "Local Guide"
  }
]

export default function Reviews() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-400 ml-2">5.0 out of 5</span>
          </div>
          <p className="text-gray-400">Based on Google Reviews</p>
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
