 export default {
  generateRandomEmailAddress: function () {
    let emailaddress =
      "Auto"+Math.random().toString().replace('0.', '') + "@webrdriveruni.com";
    return emailaddress;
  },

  generateRandomString: function () {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  },
};
