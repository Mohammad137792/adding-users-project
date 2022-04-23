import "./Output.css";
const Output = (props) => {
  const { usersList } = props;
  //console.log('userlist',usersList);
  return (
    <div className="users">
      <ul>{usersList.map((el,index)=><li key={index}>{el.name}({el.age}years old)</li>)}</ul>
    </div>
  );
};
export default Output;
