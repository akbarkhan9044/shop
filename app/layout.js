"use client"
import '@/app/assets/styles/global.css';
import Navbar from './component/Navbar';
import { Provider } from 'react-redux';
import { store } from '@/redux/store/store';
export default function layout({children}) {
  return (
    <Provider store={store}>
    <html lang="en">
        <body>
            <Navbar/>
            <main>{children}</main>
        </body>
    </html>
    </Provider>
  )
}
