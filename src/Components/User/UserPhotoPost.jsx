import React from 'react'
import styles from './userPhotoPost.module.css'
import Input from '../Form/Input'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import Button from '../Form/Button'
import Error from '../Helper/Error'
import { PHOTO_POST } from '../../api'
import { useNavigate } from 'react-router-dom'
import Head from '../Helper/Head'

function UserPhotoPost() {

    const nome = useForm()
    const peso = useForm('number')
    const idade = useForm('number')
    const [img, setImg] = React.useState({})
    const { data, error, loading, request } = useFetch();
    const navigate = useNavigate()

    React.useEffect(() => {
        if (data) navigate("/conta");
    }, [data, navigate])

    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('img', img.raw);
        formData.append('nome', nome.value);
        formData.append('peso', idade.value);
        formData.append('idade', idade.value);

        const token = window.localStorage.getItem("TOKEN");
        const { url, options } = PHOTO_POST(formData, token)
        request(url, options)
    }

    function handleImgChange({ target }) {
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0],
        })
    }

    return (
        <>
            <Head title="Nova Postagem" description="Descrição" />
            <section className={`${styles.photoPost}`}>
                <form onSubmit={handleSubmit}>
                    <Input label="Nome" type="text" name="nome" {...nome} />
                    <Input label="Peso" type="number" name="peso" {...peso} />
                    <Input label="Idade" type="number" name="idade" {...idade} />
                    <input className={styles.file} type="file" name="img" id="img" onChange={handleImgChange} />
                    {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button>}
                    <Error error={error} />
                </form>
                <div>
                    {img.preview && <div className={styles.imgPreview} style={{ backgroundImage: `url('${img.preview}')` }}></div>}
                </div>
            </section >
        </>
    )
}

export default UserPhotoPost