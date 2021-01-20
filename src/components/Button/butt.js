import { Button } from 'react-bootstrap';

const butt =(anything) =>{
    const handleClickEvent = () => anything.onClick(anything.number)
    return (
        <Button variant="dark" onClick={handleClickEvent}>
            {anything.number}
        </Button>
    )
}

export default butt;