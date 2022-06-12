import * as React from 'react'
import { useNotify } from 'react-admin'
import BaseForm from '@approbado/lib/components/BaseForm'
import InputContainer from '@approbado/lib/components/InputContainer'
import PasswordInput from '@approbado/lib/components/PasswordInput'
import { axios } from '@approbado/lib/providers';
import PasswordInput from '../components/PasswordInput';

const validate = values => {
    const errors = {};

    if (!values.curr_password) {
        errors.curr_password = "Ingrese su contraseña actual.";
    }
    if (!values.new_password) {
        errors.new_password = "Ingrese una nueva contraseña.";
    }
    if (!values.new_password_confirmed) {
        errors.new_password_confirmed = "Ingrese una nueva contraseña.";
    }
    if (values.curr_password === values.new_password) {
        errors.new_password = "La nueva contraseña no debe ser igual a la anterior."
    }
    if (values.new_password !== values.new_password_confirmed) {
        errors.new_password_confirmed = "Las contraseñas no coinciden.";
    }

    return errors;
};

const UpdatePassword = () => {
    const notify = useNotify();

    const save = React.useCallback(async (values) => {
        try {
            await axios.post('update-password', values);
            notify('Hemos cambiado tu contraseña con éxito', 'success')
        } catch (error) {
            if (error.response.data.errors) {
                return error.response.data.errors;
            }
        }
    }, [axios])

    return (
        <BaseForm
            save={save}
            validate={validate}
            saveButtonLabel='Actualizar'
            unresponsive
        >
            <InputContainer label='Contraseña actual' md={8}>
                <PasswordInput
                    name='curr_password'
                    placeholder="Contraseña actual"
                    fullWidth
                />
            </InputContainer>
            <InputContainer label='Nueva contraseña' md={8}>
                <PasswordInput
                    name='new_password'
                    placeholder="Nueva contraseña"
                    fullWidth
                />
            </InputContainer>
            <InputContainer label='Nueva contraseña' md={8}>
                <PasswordInput
                    name='new_password_confirmed'
                    placeholder="Repita la nueva contraseña"
                    fullWidth
                />
            </InputContainer>
        </BaseForm>
    )
}

export default UpdatePassword
