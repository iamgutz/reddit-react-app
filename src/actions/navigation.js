import { push, goBack } from 'react-router-redux'

export const navigateTo = path => push(path)
export const navigateBack = () => goBack()
