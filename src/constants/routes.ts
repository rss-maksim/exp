import { FunctionComponent } from 'react'
import { Dictionary, Root, Signin, Signup } from '../containers'

interface IKeyValue<T> {
    [key: string]: T
}

export interface IRoute {
    name: string
    path: string
    label: string
    component: FunctionComponent
    exact?: boolean
}

export const routes: IKeyValue<IRoute> = {
    root: { name: 'root', path: '/', label: 'Main page', exact: true, component: Root },
    signup: { name: 'signup', path: '/signup', label: 'Sign up', component: Signup },
    signin: { name: 'signin', path: '/signin', label: 'Sign in', component: Signin },
    // 'forget-password': { name: 'forget-password', path: '/forget-password', label: 'Forget password', component:  },
    dictionary: { name: 'dictionary', path: '/dictionary', label: 'Dictionary', component: Dictionary }
}