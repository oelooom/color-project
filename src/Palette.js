import React from 'react';
import ColorBox from './ColorBox';
import './Palette.css'
import Navbar from './Navbar';

class Palette extends React.Component {

    constructor(props) {
        super(props);
        this.state = { level: 500, format: 'hex' }
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level) {
        this.setState({ level: level })
    }

    changeFormat(val) {
        this.setState({ format: val })
    }

    render() {
        const { colors } = this.props.palette;
        const { level, format } = this.state
        const ColorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name} />
        ))
        return (
            <div className='Palette'>
                {/* Navbar disini */}
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
                <div className='Palette-colors'>
                    {ColorBoxes}
                </div>
                {/* Footer disini */}
            </div>
        )
    }
}

export default Palette;