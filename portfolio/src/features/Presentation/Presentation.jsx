import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const Presentation = () => {
    return (
        <>
        <div id='presentation'>
        <Stack gap={1} style={{height:"100vh"}}>
        <div  className="presentation" >
            <h1 className="p-4">Hello, I'm Livnath</h1>
            <h3 className="p-5">Here is a little bit more about me and my projects</h3>
            <Button style={{paddingInline: "30px", marginTop:"30px"}} variant="secondary" size='lg'>Project</Button>{<a className="p-2" href='#projects'> </a>}
        </div>
        </Stack>

        </div>

        </>
    )
}

export default Presentation