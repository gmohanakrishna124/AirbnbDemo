const login = ({data}) => {
    return (
        <div>
            {data?.namee}
        </div>
    )
}

export default login
export async function handler(req,res){
    const data = await fetch("/registe"). 
        then((res) => res.json() );
    
    return {
        props : {
            data
        }
    }
}