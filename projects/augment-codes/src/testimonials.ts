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
  {
    id: 3,
    text: "Just grabbed a few CloudFormation templates from a vendor that they wanted us to apply and used your code instructions to ask it to transform it into Terraform. The mapping was nearly perfect, and it even threw in some best practice options that weren't included in the original template. Probably just saved me an hour or two of work, easily.",
    author: "DevOps Engineer",
    date: "August 2nd"
  },
  {
    id: 4,
    text: "I was blown away by the latency. I did not realize before trying Augment how much low latency mattered... it let me flow without getting in the way.",
    author: "Software Developer",
    date: "September 1st"
  },
  {
    id: 5,
    text: "It's not just looking at a small amount of context... there's a much deeper understanding about what's going on end to end, which has just been really valuable.",
    author: "Software Engineer",
    date: "September 5th"
  }
];
