import { ref } from 'yup';
import { object, string, number, date, InferType } from 'yup';


const Validation = object({
    email: string().email("Geçerli bir Email gir aq.").required("Zorunlu Alan"),
    password: string().min(8,"Parolanız en az 8 karakter olmalıdır.").required("Zorunlu Alan"),
    confirmPassword : string().oneOf([ref("password")],"Parolalar uyuşmuyor!!").required("Zorunlu Alan")
  });
  




export default Validation