import {useRouter} from 'next/router'
import TemplateNav from '../../components/TamplateNav'

const User = (props)=>{
   // const router = useRouter();
   // const {id} = router.query;
    const user = props.user;
return (
    <TemplateNav>
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card">
                    <div className="card-header text-center">
                        <img src={user.avatar} style={{borderRadius:"50%"}} alt="" />
                    </div>
                    <div className="card-body text-center">
                        <p>{user.first_name} {user.last_name}</p>
                        <p>{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    </TemplateNav>
)
}

User.getInitialProps = async(ctx)=>{
const resp = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
const user = await resp.json();
return{ user: user.data}
}

export default User;