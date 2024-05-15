import { Client, Account,ID } from 'appwrite';
    import conf from '../../AppWrite/conf'
// export const client = new Client();

// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('66386ec7002731ff767c'); 

// export  const account = new Account(client);
// export { ID } from 'appwrite';








export class AuthServese {
    client = new Client()
    acount;

    constructor(){
        this.client
        .setEndpoint(conf.APPWRITE_URL)
        .setProject(conf.APPWRITE_PROJECT_ID)
        this.acount = new Account(this.client)
    }
    async creatAcount({email,password,name}){
        console.log(email)
        try {
            return await this.acount.create(ID.unique(),email,password,name)
        } catch (error) {
            console.log(error)
            console.log("LOGIN ERROR",error)
        }

    }
    async Appuser({email,password}){
        try {
            return await this.acount.createEmailPasswordSession(email,password)
        } catch (error) {
            console.log("LOGIN ERROR",error)
        }
    }
    async Getuser(){
        try {
          return await this.acount.get()
        } catch (error) {
            console.log("user error",error)
        }
    }
    async Deletuser(){
        try {
            await this.acount.deleteSession('current')
        } catch (error) {
            console.log(error)
        }
    }
}



const APPauthServses = new AuthServese()
export default  APPauthServses


