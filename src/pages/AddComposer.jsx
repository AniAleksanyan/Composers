import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import{useNavigate} from "react-router-dom"


export const AddComposer = () => {
    const [form, setForm] = useState({
        name: "",
        surname: "",
        born: "",
        died: "",
        photo_url: ""
    })

    const [error, setError] = useState("")
    const navigate = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault()
        for (let key in form) {
            if (!form[key].trim()) {
                return setError("Please fill " + key)
            }
        }
        setError("")

        axios
            .post("http://localhost:3333/composers", form)
            .then(res => {
                console.log(res.data)
                navigate("/list")
            })


    }
    return <>
        <h1>AddComposer</h1>
        <form onSubmit={onSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Box my={2}>
                <TextField
                    label="Name"
                    variant='outlined'
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                />
            </Box>
            <Box my={2}>
                <TextField
                    label="Surname"
                    variant='outlined'
                    value={form.surname}
                    onChange={e => setForm({ ...form, surname: e.target.value })}
                />
            </Box>
            <Box my={2}>
                <TextField
                    label="Born"
                    variant='outlined'
                    value={form.born}
                    onChange={e => setForm({ ...form, born: e.target.value })}
                />
            </Box>
            <Box my={2}>
                <TextField
                    label="Died"
                    variant='outlined'
                    value={form.died}
                    onChange={e => setForm({ ...form, died: e.target.value })}
                />
            </Box>
            <Box my={2}>
                <TextField
                    label="URL of Photo"
                    variant='outlined'
                    value={form.photo_url}
                    onChange={e => setForm({ ...form, photo_url: e.target.value })}
                />
            </Box>
            <Button variant='contained' type='submit'> Submit </Button>
        </form>
    </>
}

