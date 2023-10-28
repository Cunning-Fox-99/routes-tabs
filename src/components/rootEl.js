import {useEffect} from "react";

import list from '../tabs.json'
import {useNavigate} from "react-router-dom";
export default function RootEl() {
    const navigate = useNavigate()

    useEffect(() => {
        // Open first tab by default
        list.forEach((item) => {
            if (item.order === 0) {
                navigate(`/${item.id}`)
            }
        })
        // First render component
        // eslint-disable-next-line
    }, [])

    return null
}