import NewsCard from "./NewsCard";

const articles = [
  {
    image: "/featured-news.png",
    category: "Patch Notes",
    title: "Patch 1.28 Now Live",
    summary:
      "Explore new locations, updated loot tables, balancing improvements and dozens of quality-of-life changes across NGS.",
    date: "2 Days Ago",
    readTime: "5 min read",
  },

  {
    image: "/news-event.png",
    category: "Events",
    title: "Friday Night Fight Returns",
    summary:
      "Prepare for another community PvP event with exclusive rewards, unique objectives and plenty of action.",
    date: "5 Days Ago",
    readTime: "3 min read",
  },

  {
    image: "/news-dev.png",
    category: "Development",
    title: "Behind The Scenes",
    summary:
      "Take a look at what the team has been building and what's coming next for Next Generation Survival.",
    date: "1 Week Ago",
    readTime: "6 min read",
  },

  {
    image: "/news-community.png",
    category: "Community",
    title: "Survivor Spotlight",
    summary:
      "Every month we showcase incredible player stories, screenshots and memorable moments from across the community.",
    date: "2 Weeks Ago",
    readTime: "4 min read",
  },

  {
    image: "/news-announcement.png",
    category: "Announcement",
    title: "Welcome To NGS",
    summary:
      "A quick introduction to the philosophy behind Next Generation Survival and what makes our community different.",
    date: "3 Weeks Ago",
    readTime: "2 min read",
  },

  {
    image: "/news-guide.png",
    category: "Guides",
    title: "New Survivor Guide",
    summary:
      "Everything new players need to know before stepping into Chernarus for the first time.",
    date: "1 Month Ago",
    readTime: "8 min read",
  },
];

export default function NewsGrid() {
  return (
    <section className="bg-[#070707] py-28">

      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}

        <div className="mb-16 flex items-end justify-between">

          <div>

            <p className="text-sm font-black uppercase tracking-[8px] text-lime-400">
              Latest Stories
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase text-white">
              News Archive
            </h2>

          </div>

          <p className="hidden max-w-md text-right leading-7 text-gray-400 lg:block">
            Server updates, community announcements,
            development blogs and event recaps —
            everything happening across NGS.
          </p>

        </div>

        {/* Grid */}

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {articles.map((article) => (

            <NewsCard
              key={article.title}
              image={article.image}
              category={article.category}
              title={article.title}
              summary={article.summary}
              date={article.date}
              readTime={article.readTime}
            />

          ))}

        </div>

      </div>

    </section>
  );
}