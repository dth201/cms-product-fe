const comparePassword = (pass1: string, pass2: string) => {
  if (pass1 !== pass2) return 'Mật khẩu không trùng khớp!';
  else return '';
}

export {
  comparePassword
}