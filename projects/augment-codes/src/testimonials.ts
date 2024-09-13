export interface Testimonial {
  id: number;
  text: string;
  author: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Augment provides autocompletes and assists with engineering. It speeds up refactoring tasks, and even picks up changes and applies them through autocompletes. It's improved the efficiency of our senior engineers, and has amplified correct actions. It is a force multiplier for competent engineers!",
    author: "Senior Engineer",
    date: "August 14th"
  },
  {
    id: 2,
    text: "I have to say I am very impressed with Augment. I love that it knows my codebase as well as I do.",
    author: "Software Developer",
    date: "August 8th"
  },
  // More testimonials can be added here later
];
