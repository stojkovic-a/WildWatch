import React from 'react'
import {useState, useEffect} from 'react'
import Bar from '../crucials/Bar'
import {User} from '../../models/User'
import {Stack, Avatar, Typography, ThemeProvider, Paper} from "@mui/material"
import UserService from '../../services/UserService'
import theme from '../../themes/Theme'
import { useAuthContext } from '../../contexts/auth.context'
import { Sighting } from '../../models/Sighting'

interface props{
    name:string
}

const ClassLabel:React.FC<props>  = ({name}) => {

    const name2: string = 'australopitecus'
    return(
        <>
            <Typography
                style={{ color: theme.palette.primary.contrastText, marginRight: '5%', marginLeft: '15%' }}
                variant="h6" component="div">
                {`Class name : ${name}`}
            </Typography>
        </>
    )
}

export default ClassLabel