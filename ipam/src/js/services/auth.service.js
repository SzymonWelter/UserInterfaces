function signIn(data){
    if(data.username.value === 'admin' && data.password.value === 'admin'){
        return 'admin';
    }
    return false;
}

export default{
  signIn
}