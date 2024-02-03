import axios from "axios";
import { GATEWAY_URL } from "../env.js";

export const logOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  console.log("logout");
  //   navigate("/hero");
};

export const getAbreviation = (name) => {
  const words = name.split(" ");
  let abreviation = "";
  words.forEach((word) => {
    abreviation += word[0].toUpperCase();
  });
  return abreviation;
};

export const updateInfo = async (newValues, setUserValues, userValues) => {
  try {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const res = await axios.put(`${GATEWAY_URL}/profile`, newValues);
    if (res.status === 200) {
      if (!newValues.name) newValues.name = userValues.name;
      if (!newValues.email) newValues.email = userValues.email;
      if (!newValues.phone) newValues.phone = userValues.phone;
      localStorage.setItem("user", JSON.stringify(newValues));
      setUserValues(newValues);
      alert("User info updated successfully");
    }
  } catch (error) {
    console.log(error);
    alert(error.response.data.message || "Error while updating user");
  }
};

export const updatePassword = async (oldPassword, newPassword) => {
  try {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const res = await axios.put(`${GATEWAY_URL}/profile/password`, {
      oldPassword,
      newPassword,
    });
    if (res.status === 200) {
      console.log(res.data);
      alert("Password updated successfully");
    }
  } catch (error) {
    console.log(error);
    alert(error.response.data.message || "Error while updating password");
  }
};

export const modifyArticle = async (articleId, newValues, setArticleValues) => {
  try {
    const token = localStorage.getItem("token");
    console.log(token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const res = await axios.put(
      `${GATEWAY_URL}/articles/${articleId}`,
      newValues
    );
    if (res.status === 200) {
      setArticleValues(newValues);
      alert("Article updated successfully");
    }
  } catch (error) {
    console.log(error);
    alert(error.response.data.message || "Error while updating article");
  }
};

// module.exports = {
//   logOut,
//   getAbreviation,
//   updateInfo,
//   updatePassword,
// };
