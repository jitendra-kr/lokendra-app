export const headingToID = (heading: string) => {
  return heading.toLocaleLowerCase().replaceAll(" ", "-");
};
