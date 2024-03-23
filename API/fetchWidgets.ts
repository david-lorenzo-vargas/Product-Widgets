export const fetchWidgets = async() => {
  if (!process.env.FETCH_WIDGETS_URL) {
    throw new Error("FETCH_WIDGETS_URL is not defined in environment variables.");
  }

  try {
    const res = await fetch(process.env.FETCH_WIDGETS_URL);

    return res.json();
  } catch (error) {
    throw new Error("Ooops! something went wrong");
  }
};