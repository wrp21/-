export const fetchLogin = async({id,password}) =>{
    const response = await fetch(" http://localhost:8888/users");

    if(response.ok){
        const users = await response.json();

        //console.log("값 확인",users)

        const user = users.find((user)=>user.id === id);

        //console.log('들어온값',user);

        if(!user || user.password !== password){
            throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.")
        }

        return user;
    }
    throw new Error("서버 통신이 원활하지 않습니다.");
};