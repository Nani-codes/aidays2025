const mainTitle = "AI Days 2025";
const description = "India's largest AI conference";

export const getTitle = (title: string) => {
  return title ? `${title} | ${mainTitle}` : `${mainTitle} - ${description}`;
};

export const getMetaDescription = (title: string) => {
  return "India's largest AI conference"
};
