import { useEffect, useState } from 'react'
import { URL_JSON_SERVER } from '../App'
import axios from 'axios'
import { CompossersTable } from '../components/ComposersTable'

export const Composers = () => {
   
    const [composers, setComposers] = useState([])

    useEffect(() => {
        axios
            .get(URL_JSON_SERVER)
            .then(res => {
                setComposers(res.data)
            })
    }, [])

    return <>
        <h1>Composers</h1>
        <CompossersTable items={composers} />
    </>
}