const items = [
  {
    imageUrl: "https://placehold.co/600x600?text=One",
    title: "Post One",
    desc: "Lorem ipsum dolor sit amet.",
  },
  {
    imageUrl: "https://placehold.co/600x600?text=Two",
    title: "Post Two",
    desc: "Consectetur adipiscing elit.",
  },
  {
    imageUrl: "https://placehold.co/600x600?text=Three",
    title: "Post Three",
    desc: "Sed do eiusmod tempor.",
  },
  {
    imageUrl: "https://placehold.co/600x600?text=Four",
    title: "Post Four",
    desc: "Sed do eiusmod tempor.",
  },
];

const works = items.map((post) => ({
  ...post,
  slug: post.title.toLowerCase().replace(/\s+/g, "-"),
}));

export default works;
