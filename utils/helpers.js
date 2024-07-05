export function formdataToObject(formData){
    return Object.fromEntries(formData.entries())
}

// export async function registerUser(_, formData ){   //has thesame function of return data from an form by users
//     const username = formData.get('username')
//     const email = formData.get('email')
//     const password = formData.get('password')

//     console.log({email, password, username});
// }

export async function registerUser(_, formData ){
    const {username, email, password} = formdataToObject(formData);
    console.log({email, password, username});

    const hashedPassword = await bcrypt.hash(password, 10)
}