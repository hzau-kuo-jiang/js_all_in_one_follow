function checkPasswordComplexity(password) {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialCharacter = /[\\/:?'`"()<>|{}.!;\-+=*%#$^,@~&]/.test(
    password,
  );
  const notHasSpace = !/\s/.test(password);
  const notHasRepeat = !/(.)\1{2}/.test(password);
  const notHasContinuous = !validateContinuous(password);

  return (
    hasUpperCase &&
    hasLowerCase &&
    hasNumber &&
    hasSpecialCharacter &&
    notHasSpace &&
    notHasRepeat &&
    notHasContinuous
  );
}

function validateContinuous(password) {
  const hasContinuousNumber = /123|234|345|456|567|678|789|890/.test(password);
  const hasContinuousLowerCase =
    /abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz/.test(
      password,
    );
  const hasContinuousUpperCase =
    /ABC|BCD|CDE|DEF|EFG|FGH|GHI|HIJ|IJK|JKL|KLM|LMN|MNO|NOP|OPQ|PQR|QRS|RST|STU|TUV|UVW|VWX|WXY|XYZ/.test(
      password,
    );
  return (
    hasContinuousNumber || hasContinuousLowerCase || hasContinuousUpperCase
  );
}

function generateRandomPassword(length = 16) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";
  const charsetLength = charset.length;
  let password = "";

  for (let i = 0; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * charsetLength));
  }

  if (checkPasswordComplexity(password)) {
    return password;
  } else {
    return generateRandomPassword(length);
  }
}

const passwordEl = document.getElementById("password");
passwordEl.addEventListener("blur", () => {
  const password = passwordEl.value;
  if (checkPasswordComplexity(password)) {
    passwordEl.classList.remove("border-red-500");
    passwordEl.classList.add("border-green-500");
  } else {
    passwordEl.classList.remove("border-green-500");
    passwordEl.classList.add("border-red-500");
  }
});
