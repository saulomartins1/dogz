import React from 'react'

const types = {
    email: {
        regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
    message: "Preencha um email válido!"
}

function useForm(type) {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);


    function onChange({ target }) {
        { error && validate(target.value) }
        setValue(target.value)
    }



    function validate(value) {
        if (type === false) return true;
        if (value.length === 0) {
            setError("Preencha um valor!")
            return false;

            //types[type] verifica se o valor que vem da prop "type" do useForm passada em LoginForm.jsx
            //...existe no objeto "types" lá em cima; Seria o mesmo que: types.email
            //...mas por a prop type vir como string, ficaria assim: types['email']

            //LÓGICA: Se tiver essa propriedade: [type] no objeto types, ex: ['email'] e a validação do regex retornar false (não válido)
            //...então Informa o usuário com o error.
        } else if (types[type] && !types[type].regex.test(value)) {
            setError("Email inválido!")
            return false;
        } else {
            setError(null)
            return true
        }
    }

    return {
        /* "const username = useForm();" em LoginForm atribui esse objeto retornado a username e o username é desestruturado no component de Inputs, onde o component de input recebe todos as props e faz as ações necessárias com elas. */
        value,
        setValue,
        onChange,
        error,

        //Já retorna como métodos "engatilhados" sem a necessidade de repetir o "username"
        //Como ficaria: username.validate(username.value);

        //Como fica agora: username.validate()
        validate: () => validate(value),
        onBlur: () => validate(value)
    }
}

export default useForm