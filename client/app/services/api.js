import { BASE_URL } from "../constants";

export const getAllEmails = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/emails`, {
      method: "GET",
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
    return [];
  }
};
