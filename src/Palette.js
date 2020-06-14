import React from 'react';
import ColorBox from './ColorBox';
import './Palette.css'

class Palette extends React.Component {

    render() {
        const ColorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name} />
        ))
        return (
            <div className='Palette'>
                {/* Navbar disini */}
                <div className='Palette-colors'>
                    {ColorBoxes}
                </div>
                {/* Footer disini */}
            </div>
        )
    }
}

export default Palette;