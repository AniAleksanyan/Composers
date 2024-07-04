import { Box, TextField, Button } from '@mui/material';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const EditComposer = () => {
    const [data, setData] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        axios
        .get("http://localhost:3333/composers/"+id)
        .then(res => {
           setData(res.data);
        })
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:3333/composers/" + id, data)
            .then(res => {
                console.log('Data updated successfully:', res.data);
            })
            .catch(err => {
                console.error('Error updating data:', err);
            });
    };
    return <>
        {
            data && <form onSubmit={handleSubmit}>
                <Box>
                    <TextField 
                        variant='outlined' 
                        value={data.name} 
                        onChange={e=>setData({...data, name: e.target.value})}/>
                </Box>
                <Box my={2}>
                    <TextField
                        variant='outlined'
                        value={data.surname}
                        onChange={e => setData({ ...data, surname: e.target.value })}
                    />
                </Box>
                <Box my={2}>
                    <TextField
                        label="Born"
                        variant='outlined'
                        value={data.born}
                        onChange={e => setData({ ...data, born: e.target.value })}
                    />
                </Box>
                <Box my={2}>
                    <TextField
                        label="Died"
                        variant='outlined'
                        value={data.died}
                        onChange={e => setData({ ...data, died: e.target.value })}
                    />
                </Box>
                <Box my={2}>
                    <TextField
                        label="URL of Photo"
                        variant='outlined'
                        value={data.photo_url}
                        onChange={e => setData({ ...data, photo_url: e.target.value })}
                    />
                </Box>
                <Button variant='contained' type='submit'> Submit </Button>
            </form>
        }
    </>
}