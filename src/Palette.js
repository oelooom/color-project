import React from 'react';
import ColorBox from './ColorBox';
import './Palette.css'
import Navbar from './Navbar';

class Palette extends React.Component {

    constructor(props) {
        super(props);
        this.state = { level: 500 }
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level) {
        this.setState({ level: level })
    }

    render() {
        const { colors } = this.props.palette;
        const { level } = this.state
        const ColorBoxes = colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ))
        return (
            <div className='Palette'>
                {/* Navbar disini */}
                <Navbar level={level} changeLevel={this.changeLevel} />
                <div className='Palette-colors'>
                    {ColorBoxes}
                </div>
                {/* Footer disini */}
            </div>
        )
    }
}

export default Palette;