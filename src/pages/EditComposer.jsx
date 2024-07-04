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

    return <>
        {
            data && <form>
                <Box>
                    <TextField variant='outlined' value={data.name} onChange={e=>setData({...data, name: e.target.value})}>
                        
                    </TextField>
                    <Button></Button>
                </Box>
                
            </form>
        }
    </>
}