import TemplateNav from "../components/TamplateNav";
import Users from "../components/Users"

const Index = (props) => {
    
  return (
    
      <TemplateNav>
          
        
          <Users users={props.users}> </Users>
         
      </TemplateNav>
    
  );
};


Index.getInitialProps = async(ctx)=> {
    const resp = await fetch('https://reqres.in/api/users');
    const data = await resp.json();
    return {users : data.data};
}


export default Index;
