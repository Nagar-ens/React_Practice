import React,{useState} from 'react'

const DarkMode = () => {
    const [darkModeStyle, setDarkModeStyle] = useState({
        color: 'white',
        backgroundColor: 'black'
    })

    const [darkModeBtnText, setDarkModeBtnText] = useState('Enter dark mode')

    const toggleDarkMode = () => {
        if (darkModeStyle.color === 'black') {
            setDarkModeStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setDarkModeBtnText('Enable Light Mode')
        } else {
            setDarkModeStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setDarkModeBtnText('Enable Dark Mode')
        }
    }

    return (
        <>
            <div className="container" style={darkModeStyle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim obcaecati, veritatis autem repudiandae similique quam, doloribus magni harum alias asperiores porro facere omnis nulla perspiciatis suscipit fuga. Itaque, optio fugiat!


                <div className='app' id="light"></div>
                <button onClick={toggleDarkMode} type="button" className="btn btn-primary"> {darkModeBtnText}</button>
            </div>
        </>
    );
}

export default DarkMode