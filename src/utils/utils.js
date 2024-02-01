const logOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  console.log("logout");
  //   navigate("/hero");
};

const getAbreviation = (name) => {
  const words = name.split(" ");
  let abreviation = "";
  words.forEach((word) => {
    abreviation += word[0].toUpperCase();
  });
  return abreviation;
};

module.exports = {
  logOut,
  getAbreviation,
};
