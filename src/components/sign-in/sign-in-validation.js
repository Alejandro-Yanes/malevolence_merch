const validateForm = ({ info: { email, password } }) => {
  console.log(email, password);

  if (!email) {
    return { email: "Email required" };
  }

  if (!password) {
    return { password: "Password required" };
  }
  return null;
};

export default validateForm;
