

import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

function Test() {
    return (
        <div>
            <div className='red' style={{ height: '1000px' }}>
                <Texty>
                    {
                        position => <h1>{position}</h1>
                    }
                </Texty>
            </div>

        </div>
    )
}

export default Test

function Texty(props) {

    const [position, setPosition] = useState(null)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    function handleScroll(e) {
        const scrollTop = e.target.body.scrollTop;
        console.log(e.srcElement.body.scrollTop)
        setPosition(scrollTop)
    }
    return (
        <div>
            {props.children(position)}
        </div>
    )

}

Texty.propTypes = {
    children: PropTypes.func.isRequired
}