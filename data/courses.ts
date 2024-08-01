import { CourseDetailsProps } from "components/templates/workshops/CourseDetails";

export const masterClass: CourseDetailsProps = {
  title: "AI for Designers",
  actionBar: {
    closesIn: "1 day 15 hrs 36 mins 38 secs",
    bookedPercentage: "93%",
    badges: ["Beginner course"],
  },
  mainSection: {
    title: "What You'll Learn",
    description: "Empower yourself with cutting-edge skills that will enable you to both seamlessly incorporate artificial intelligence (AI) tools into your design process and learn the basics of how to design for AI.",
    videoSrc: "https://via.placeholder.com/400x200",
    longDescription: `<p>Empower yourself with cutting-edge skills that will enable you to both seamlessly incorporate artificial intelligence (AI) tools into your design process and learn the basics of how to design for AI.</p>`
  },
  secondSection: `<p>AI is a powerful tool for designers. It’s like adding an extra member to your team, one who can help you brainstorm new ideas, create designs, and test them out. Learn how to use AI to take your designs to the next level.</p>`,
  sidebar: {
    title: "Practical Information",
    bullets: [
      {
        icon: "faDollarSign",
        title: "Price: Free for Members",
        description: "Take as many courses as you want for a flat fee.",
      },
      {
        icon: "faClock",
        title: "Self-Paced Online Course with No Deadlines",
        description: "You'll never miss a class since there are no deadlines.",
      },
      {
        icon: "faBookOpen",
        title: "Permanent Access to Course Material",
        description: "You'll have access to your course material for the entire duration of your membership.",
      },
      {
        icon: "faUsers",
        title: "Online Lessons with Optional Meet-Ups",
        description: "Take our online courses from anywhere. Join optional meet-ups in your city.",
      },
      {
        icon: "faClock",
        title: "13 hours 30 mins over 6 weeks (Estimated)",
        description: "There's no time limit to finish a course, so you can take as much time as you need.",
      },
      {
        icon:   "faCheckCircle",
        title: "Grading by Experts, Not Machines",
        description: "Our experts grade your answers—that's why our Course Certificates are credible.",
      },
      {
        icon: "faMobileAlt",
        title: "Learn on Any Device",
        description: "Learn at the office, on your sofa and on the go.",
      },
      {
        icon:   "faStar",
        title: "Popular Course",
        description: "This course is the top 5 most enrolled course.",
      },
    ],
  }
};
