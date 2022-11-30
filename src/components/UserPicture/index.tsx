import React from 'react'
import { Picture } from './style'
import { IUserPicture } from './type'

export const UserPicture = ({src, alt, margin} : IUserPicture ) => {
    return (
        <Picture src={src} alt={alt} margin={margin}/>
    )
}
