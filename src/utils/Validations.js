class Validations {
  validateAddUser(params) {
    if (params.userName.length === 0) {
      return "Please Enter UserName";
    } else if (params.age.length === 0) {
      return "Please Enter Age";
    }
    return "";
  }
}

export default Validations;
