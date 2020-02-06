import * as yup from 'yup';

const signupValidation = yup.object().shape({
  confPassword: yup
    .string()
    .oneOf([yup.ref('pass'), null], '...كلمة المرور ليست متطابقة حاول مرة أخرى')
    .max(254)
    .min(8, 'كلمة المرور قصيرة جدا يجب أن تكون فوق 8 أحرف')
    .required('من فضلك قم بتأكيد كلمة المرور'),
  pass: yup
    .string()
    .max(254)
    .min(8, 'كلمة المرور قصيرة جدا يجب أن تكون فوق 8 أحرف')
    .required('من فضلك أدخل كلمة المرور'),
  email: yup
    .string()
    .max(254)
    .email(' صيغة البريد الإلكترونى غير صحيحة ')
    .required('من فضلك قم بتعبئة هذا الحقل'),
  username: yup
    .string()
    .max(254)
    .min(3, 'اسم المستخدم يجب أن يكون أكثر من 3 أحرف')
    .required('من فضلك قم بتعبئة هذا الحقل'),

  disabled: yup.bool().oneOf([false], 'يجب الموافقة على الشروط و الأحكام'),
});
export default signupValidation;
