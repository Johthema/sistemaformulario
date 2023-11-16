export function ValidarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
  
    if (cpf.length !== 11 || !Array.from(cpf).every(c => c === cpf[0])) {
      let sum = 0;
      let remainder;
  
      for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
      }
  
      remainder = (sum * 10) % 11;
  
      if ((remainder === 10) || (remainder === 11)) {
        remainder = 0;
      }
  
      if (remainder !== parseInt(cpf.substring(9, 10))) {
        return false;
      }
  
      sum = 0;
      for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
      }
  
      remainder = (sum * 10) % 11;
  
      if ((remainder === 10) || (remainder === 11)) {
        remainder = 0;
      }
  
      if (remainder !== parseInt(cpf.substring(10, 11))) {
        return false;
      }
  
      return true;
    }
  
    return false;
  }