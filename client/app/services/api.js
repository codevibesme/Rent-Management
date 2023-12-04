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

export const getAllReports = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/reports`, {
      method: "GET",
      cache: "no-store",
    });
    const data = await response.json();
    const filteredData = data.map((item) => {
      return {
        tenant_ref: item.tenant_ref,
        tenant_name: item.tenant_name,
        owner_name: item.owner_name,
        property_desc: item.property_desc,
        transaction_nett: item.transaction_nett,
        transaction_due_date: item.transaction_due_date,
      };
    });
    // console.log(filteredData);
    return filteredData;
  } catch (err) {
    console.log(err.messge);
    return [];
  }
};
