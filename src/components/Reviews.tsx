import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Amazing selection of unique gifts! The staff is incredibly helpful and friendly. I always find something special here.",
    date: "2 weeks ago"
  },
  {
    name: "John D.",
    rating: 5,
    text: "Love this place! Such a great variety of eclectic items. Perfect for finding that one-of-a-kind gift.",
    date: "1 month ago"
  },
  {
    name: "Emily R.",
    rating: 5,
    text: "This store is a hidden gem! Beautiful curated selection and wonderful atmosphere. Highly recommend!",
    date: "3 weeks ago"
  },
  {
    name: "Michael T.",
    rating: 5,
    text: "Best gift shop in Charlottetown! Always discover something new and interesting every visit.",
    date: "1 week ago"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-gray-950 border-gray-800">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{review.name}</CardTitle>
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
                <p className="text-gray-300 text-sm">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
