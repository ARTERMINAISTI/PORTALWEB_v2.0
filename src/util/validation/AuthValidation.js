import * as yup from 'yup';

async function AuthValidation (data){
    let schema = yup.object().shape({
        user: yup.string().required(),
        password: yup.string().required().min(6),
    });
      return await schema.isValid(data);
}

export default AuthValidation